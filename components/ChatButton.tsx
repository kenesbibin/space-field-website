'use client';

import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import dynamic from 'next/dynamic';

// CopilotShell is loaded only when the user opens the chat for the first time.
const CopilotShell = dynamic(
  () => import('@/components/CopilotShell'),
  { ssr: false, loading: () => null }
);

export default function ChatButton() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <button
          type="button"
          onClick={() => setLoaded(true)}
          aria-label="Open AI assistant"
          className="fixed bottom-[calc(max(1.5rem,env(safe-area-inset-bottom))+8rem)] right-4 z-50 h-14 w-14 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/30 flex items-center justify-center hover:bg-blue-700 active:scale-95 transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
      {loaded && <CopilotShell defaultOpen={true} />}
    </>
  );
}
