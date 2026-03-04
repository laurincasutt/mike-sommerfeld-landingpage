"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import Image from "next/image";

interface VideoEmbedProps {
  videoId: string;
  thumbnailAlt: string;
  thumbnailSrc?: string;
}

export default function VideoEmbed({
  videoId,
  thumbnailAlt,
  thumbnailSrc,
}: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false);

  const ytThumb =
    thumbnailSrc ?? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  if (playing) {
    return (
      <div className="aspect-video w-full rounded-2xl overflow-hidden border border-[#D4A017]/30">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title="Mike Sommerfeld Coaching Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      className="group relative aspect-video w-full rounded-2xl overflow-hidden border border-[#D4A017]/30 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017]"
      aria-label="Video abspielen"
    >
      <Image
        src={ytThumb}
        alt={thumbnailAlt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 768px"
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-[#D4A017] flex items-center justify-center shadow-[0_0_40px_rgba(212,160,23,0.6)] group-hover:scale-110 transition-transform duration-300">
          <Play className="w-8 h-8 text-[#0A0A0A] ml-1" fill="currentColor" />
        </div>
      </div>
    </button>
  );
}
