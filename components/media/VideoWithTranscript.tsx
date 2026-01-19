"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, FileText, Play } from 'lucide-react';

interface TranscriptItem {
  time: string;
  text: string;
}

interface VideoWithTranscriptProps {
  videoSrc?: string; // Optional for now, can be placeholder
  posterSrc?: string;
  title: string;
  transcript: TranscriptItem[];
}

export const VideoWithTranscript: React.FC<VideoWithTranscriptProps> = ({
  videoSrc,
  posterSrc,
  title,
  transcript
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 my-12 not-prose">
      {/* Video Player Placeholder */}
      <div className="relative aspect-video bg-slate-950 flex items-center justify-center group cursor-pointer group">
        {videoSrc ? (
            <video 
                src={videoSrc} 
                poster={posterSrc} 
                controls 
                className="w-full h-full object-cover"
            />
        ) : (
            <div className="text-center p-8">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white ml-1" />
                </div>
                <p className="text-slate-400 font-medium">Video Placeholder: {title}</p>
                <p className="text-xs text-slate-600 mt-2">(Upload video to enable playback)</p>
            </div>
        )}
      </div>

      {/* Transcript Controls */}
      <div className="bg-slate-800 p-4 flex items-center justify-between cursor-pointer hover:bg-slate-750 transition-colors" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center gap-2 text-white font-medium">
            <FileText className="w-4 h-4 text-blue-400" />
            <span>Video Transcript</span>
        </div>
        <button className="text-slate-400">
            {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
      </div>

      {/* Transcript Content */}
      {isOpen && (
        <div className="bg-slate-900/50 p-6 border-t border-slate-800 max-h-60 overflow-y-auto custom-scrollbar">
            <div className="space-y-4">
                {transcript.map((item, index) => (
                    <div key={index} className="flex gap-4">
                        <span className="text-blue-500 font-mono text-xs flex-shrink-0 mt-1">{item.time}</span>
                        <p className="text-slate-300 text-sm leading-relaxed m-0">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
      )}
    </div>
  );
};
