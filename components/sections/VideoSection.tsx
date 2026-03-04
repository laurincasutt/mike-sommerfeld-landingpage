"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Volume2, VolumeX } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";
import { videoContent } from "@/data/content";
import { staggerContainer, fadeUpVariants, staggerFast, viewportOnce } from "@/lib/animations";

const videos = [
  { src: "/videos/mike-ad-1.mp4", label: "Warum Mike?" },
  { src: "/videos/mike-ad-2.mp4", label: "Wie funktionierts?" },
];

function VideoCard({ src, label, index }: { src: string; label: string; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (playing) {
      v.pause();
      setPlaying(false);
    } else {
      v.play();
      setPlaying(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <motion.div
      variants={fadeUpVariants}
      className="relative rounded-2xl overflow-hidden border border-[#2A2A2A] hover:border-[#D4A017]/40 transition-colors duration-300 bg-[#111111] cursor-pointer group"
      onClick={togglePlay}
    >
      {/* Aspect ratio: 9/16 for vertical reels */}
      <div className="aspect-[9/16] relative">
        <video
          ref={videoRef}
          src={src}
          className="w-full h-full object-cover"
          playsInline
          muted={muted}
          loop
          preload="metadata"
          onEnded={() => setPlaying(false)}
        />

        {/* Overlay */}
        <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`} />

        {/* Play button */}
        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}>
          <div className="w-16 h-16 rounded-full bg-[#D4A017] flex items-center justify-center shadow-[0_0_40px_rgba(212,160,23,0.6)] group-hover:scale-110 transition-transform duration-300">
            <Play className="w-6 h-6 text-[#0A0A0A] ml-1" fill="currentColor" />
          </div>
        </div>

        {/* Mute button */}
        <button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-black/80 transition-colors z-10"
          aria-label={muted ? "Ton an" : "Ton aus"}
        >
          {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>

        {/* Label */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-[#D4A017]/90 text-[#0A0A0A] text-xs font-bold uppercase tracking-wide">
            {label}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function VideoSection() {
  return (
    <section id="video" className="py-24 lg:py-32 bg-[#111111]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeUpVariants} className="flex justify-center mb-5">
            <SectionBadge>{videoContent.eyebrow}</SectionBadge>
          </motion.div>
          <motion.h2
            variants={fadeUpVariants}
            className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#F5F5F5] leading-none text-center mb-4"
          >
            <span className="gradient-text-gold">{videoContent.headline}</span>
          </motion.h2>
          <motion.p
            variants={fadeUpVariants}
            className="text-center text-[#A0A0A0] max-w-lg mx-auto mb-14"
          >
            {videoContent.description}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto"
          variants={staggerFast}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {videos.map((v, i) => (
            <VideoCard key={v.src} src={v.src} label={v.label} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
