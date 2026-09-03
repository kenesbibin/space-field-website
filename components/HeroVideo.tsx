'use client';

import { useState, useRef } from 'react';
import { Play } from 'lucide-react';

export default function HeroVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div
      className="absolute inset-0 bg-black"
      onMouseEnter={() => {
        setIsPlaying(true);
        setTimeout(() => videoRef.current?.play(), 50);
      }}
      onMouseLeave={() => {
        videoRef.current?.pause();
        setIsPlaying(false);
      }}
    >
      {!isPlaying && (
        <div className="absolute inset-0 z-10 pointer-events-none">
          <img
            src="/images/hero-poster.jpg"
            alt="SpaceCapture app demo"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl">
              <Play className="w-7 h-7 text-blue-600 ml-1" />
            </div>
          </div>
        </div>
      )}
      <video
        ref={videoRef}
        src="/videos/app-demo-video.mp4"
        muted
        loop
        playsInline
        preload="none"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
