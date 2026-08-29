"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  altText?: string;
}

const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  altText = "Comparision",
}: BeforeAfterSliderProps) => {
  const [isResizing, setIsResizing] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50); // Percentage
  const containerRef = useRef<HTMLDivElement>(null);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const handleResize = useCallback(
    (clientX: number) => {
      if (containerRef.current) {
        const { left, width } = containerRef.current.getBoundingClientRect();
        const newPosition = ((clientX - left) / width) * 100;
        setSliderPosition(Math.min(100, Math.max(0, newPosition)));
      }
    },
    []
  );

  const startResizing = useCallback(() => {
    setIsResizing(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing) return;
      handleResize(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isResizing) return;
      handleResize(e.touches[0].clientX);
    };

    const handleMouseUp = () => stopResizing();
    const handleTouchEnd = () => stopResizing();

    if (isResizing) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isResizing, handleResize, stopResizing]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video overflow-hidden rounded-xl border border-slate-200 shadow-2xl select-none group touch-none"
      onMouseDown={startResizing}
      onTouchStart={startResizing}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <Image
          src={afterImage}
          alt={`After: ${altText}`}
          fill
          className="object-cover"
          draggable={false}
          sizes="100vw"
        />
        <span className="absolute top-4 right-4 bg-emerald-500/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm z-10 shadow-sm">
          {afterLabel}
        </span>
      </div>

      {/* Before Image (Clipped Foreground) */}
      <div
        className="absolute inset-0 border-r-2 border-white/50"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <Image
          src={beforeImage}
          alt={`Before: ${altText}`}
          fill
          className="object-cover"
          draggable={false}
          sizes="100vw"
        />
        <span className="absolute top-4 left-4 bg-slate-900/80 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm z-10 shadow-sm">
          {beforeLabel}
        </span>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize hover:bg-amber-400 transition-colors z-20 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-slate-400 group-hover:text-amber-500 group-hover:scale-110 transition-all">
          <MoveHorizontal className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
