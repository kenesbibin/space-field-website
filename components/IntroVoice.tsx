'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const INTRO_TEXT =
  'Welcome to SpaceCapture — the AI-powered field inspection platform for construction teams. Capture photos, video, 360-degree and LiDAR data right from the field, even offline. Turn them into inspection reports in minutes, and let AI flag cracks, corrosion and safety hazards automatically. Every answer comes with a source you can verify. Explore the site, or tap the chat button anytime to ask us anything.';

const SESSION_KEY = 'sc-intro-heard';
const STOP_KEY = 'sc-intro-stopped';
/** Chrome pauses speech after ~15s; periodic resume() keeps long utterances going. */
const KEEPALIVE_MS = 8000;

type Status = 'idle' | 'speaking';

function readFlag(key: string): boolean {
  try {
    return window.sessionStorage.getItem(key) === '1';
  } catch {
    return false;
  }
}

function writeFlag(key: string): void {
  try {
    window.sessionStorage.setItem(key, '1');
  } catch {
    /* storage unavailable (private mode) — degrade gracefully */
  }
}

/** Best available English voice: Edge natural > Google > Microsoft > any en. */
function pickVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {  return (
    voices.find((v) => v.lang.startsWith('en') && /natural/i.test(v.name)) ||
    voices.find((v) => v.lang.startsWith('en') && /google/i.test(v.name)) ||
    voices.find((v) => v.lang.startsWith('en') && /microsoft/i.test(v.name)) ||
    voices.find((v) => v.lang.startsWith('en')) ||
    null
  );
}

/**
 * Homepage-only intro voice.
 *
 * Flow: try to speak shortly after load (allowed for returning Chrome visitors),
 * otherwise auto-start on the visitor's first pointer/key interaction (browser
 * autoplay policy requires a gesture). Plays at most once per session; the
 * floating button always allows stop/replay. Renders nothing when the browser
 * has no speech synthesis support.
 */
export default function IntroVoice() {
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [heard, setHeard] = useState(false);
  const statusRef = useRef<Status>('idle');
  const utterIdRef = useRef(0);
  const keepAliveRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const voiceRef = useRef<SpeechSynthesisVoice | null>(null);

  const supported =
    typeof window !== 'undefined' && typeof window.speechSynthesis !== 'undefined';

  const stopKeepAlive = useCallback(() => {
    if (keepAliveRef.current) {
      clearInterval(keepAliveRef.current);
      keepAliveRef.current = null;
    }
  }, []);

  const startKeepAlive = useCallback(() => {
    if (keepAliveRef.current) return;
    keepAliveRef.current = setInterval(() => {
      const synth = window.speechSynthesis;
      if (synth && synth.speaking) synth.resume();
    }, KEEPALIVE_MS);
  }, []);

  const setStatusSafe = useCallback((next: Status) => {
    statusRef.current = next;
    setStatus(next);
  }, []);

  /** Start speaking. Auto paths (manual=false) respect session/stop flags and never restart. */
  const startSpeaking = useCallback(
    (manual: boolean) => {
      const synth = window.speechSynthesis;
      if (!synth) return;

      if (manual) {
        stopKeepAlive();
        synth.cancel();
      } else {
        if (statusRef.current !== 'idle') return;
        if (readFlag(SESSION_KEY) || readFlag(STOP_KEY)) return;
        // An earlier auto attempt may already be going — never double-speak.
        if (synth.speaking || synth.pending) return;
      }

      const id = ++utterIdRef.current;
      const utter = new SpeechSynthesisUtterance(INTRO_TEXT);
      const voice = voiceRef.current || pickVoice(synth.getVoices());
      if (voice) {
        utter.voice = voice;
        voiceRef.current = voice;
      }
      utter.lang = voice?.lang || 'en-US';

      utter.onstart = () => {
        if (utterIdRef.current !== id) return;
        setStatusSafe('speaking');
        setHeard(true);
        writeFlag(SESSION_KEY);
        startKeepAlive();
      };
      utter.onend = () => {
        if (utterIdRef.current !== id) return;
        stopKeepAlive();
        setStatusSafe('idle');
      };
      utter.onerror = () => {
        // Includes pre-gesture blocks ('not-allowed'): flags stay unset so the
        // first real interaction can retry.
        if (utterIdRef.current !== id) return;
        stopKeepAlive();
        setStatusSafe('idle');
      };

      synth.speak(utter);
    },
    [setStatusSafe, startKeepAlive, stopKeepAlive]
  );

  /** Cancel speech (optionally marking the rest of the session silent). */
  const stopSpeech = useCallback(
    (markStopped: boolean) => {
      utterIdRef.current += 1; // invalidate stale utterance handlers
      stopKeepAlive();
      window.speechSynthesis?.cancel();
      setStatusSafe('idle');
      if (markStopped) writeFlag(STOP_KEY);
    },
    [setStatusSafe, stopKeepAlive]
  );

  useEffect(() => {
    // Deferred past the effect body to satisfy react-hooks/set-state-in-effect;
    // still runs before paint, so the button appears right after hydration.
    const mountTimer = setTimeout(() => {
      setMounted(true);
      if (readFlag(SESSION_KEY)) setHeard(true);
    }, 0);

    const synth = window.speechSynthesis;
    if (!synth) {
      clearTimeout(mountTimer);
      return;
    }

    // Voices load asynchronously; capture the best one when they arrive.
    const loadVoices = () => {
      if (!voiceRef.current) {
        const voice = pickVoice(synth.getVoices());
        if (voice) voiceRef.current = voice;
      }
    };
    loadVoices();
    synth.addEventListener('voiceschanged', loadVoices);

    // Step 1 — try a quiet auto-start (succeeds for returning Chrome visitors).
    const attemptTimer = setTimeout(() => startSpeaking(false), 450);

    // Step 2 — fallback: first interaction unlocks audio (Safari / first visit).
    const onInteract = () => {
      startSpeaking(false);
      document.removeEventListener('pointerdown', onInteract);
      document.removeEventListener('keydown', onInteract);
    };
    document.addEventListener('pointerdown', onInteract);
    document.addEventListener('keydown', onInteract);

    // Tab hidden → cut the one-shot intro (it will not auto-repeat).
    const onVisibility = () => {
      if (document.hidden && statusRef.current !== 'idle') stopSpeech(false);
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      clearTimeout(mountTimer);
      document.removeEventListener('pointerdown', onInteract);
      document.removeEventListener('keydown', onInteract);
      document.removeEventListener('visibilitychange', onVisibility);
      synth.removeEventListener('voiceschanged', loadVoices);
      clearTimeout(attemptTimer);
      // Unmount (navigation away) → silence.
      utterIdRef.current += 1;
      stopKeepAlive();
      synth.cancel();
    };
  }, [startSpeaking, stopKeepAlive, stopSpeech]);

  if (!mounted || !supported) return null;

  const speaking = status === 'speaking';

  return (
    <button
      type="button"
      onClick={() => (speaking ? stopSpeech(true) : startSpeaking(true))}
      aria-label={
        speaking
          ? 'Stop the intro voice'
          : heard
            ? 'Replay the SpaceCapture intro'
            : 'Hear a quick intro about SpaceCapture'
      }
      className="fixed right-4 z-50 h-14 w-14 rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 flex items-center justify-center hover:bg-indigo-500 active:scale-95 transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 bottom-[calc(max(1.5rem,env(safe-area-inset-bottom))+13.5rem)]"
    >
      {speaking ? (
        <VolumeX className="w-6 h-6" aria-hidden="true" />
      ) : (
        <Volume2 className="w-6 h-6" aria-hidden="true" />
      )}
    </button>
  );
}
