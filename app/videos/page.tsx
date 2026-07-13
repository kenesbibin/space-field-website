import React from 'react';
import type { Metadata } from 'next';
import CallToAction from '@/components/CallToAction';
import { VIDEOS } from '@/lib/video-data';
import { Play, Film } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Video Gallery | SpaceCapture',
  description: 'Watch tutorial videos and demos for SpaceCapture field inspection software. Learn how AI-powered defect detection transforms your construction workflows.',
  alternates: {
    canonical: 'https://spacecapture.ai/videos',
  },
};

export default function VideoGalleryPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main>
        {/* Hero Section */}
        <section className="bg-white pt-12 pb-16 border-b border-slate-200">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest mb-6">
              <Film className="w-3 h-3" /> Video Gallery
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Watch Our <span className="text-blue-600">Videos</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Explore tutorial videos and demos covering SpaceCapture's AI-powered features for construction field management.
            </p>
          </div>
        </section>

        {/* Video Grid */}
        <div className="container mx-auto max-w-[1200px] px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VIDEOS.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>

        <CallToAction />
      </main>
    </div>
  );
}

function VideoCard({ video }: { video: typeof VIDEOS[number] }) {
  return (
    <article className="group flex flex-col bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
      {/* Video Embed */}
      <div className="relative w-full aspect-video">
        <iframe
          src={`https://www.youtube.com/embed/${video.youtubeId}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {video.category && (
          <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded w-fit mb-3">
            <Play className="w-2.5 h-2.5" /> {video.category}
          </span>
        )}

        <h2 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors leading-snug">
          {video.title}
        </h2>

        <p className="text-slate-500 text-sm leading-relaxed flex-1">
          {video.description}
        </p>
      </div>
    </article>
  );
}
