"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

export type VideoPost = {
  _id: string;
  title: string;
  youtubeUrl: string;
  categories?: string[];
};

type VideoCarouselProps = {
  videos: VideoPost[];
  title?: string;
  subtitle?: string;
};

/** Pulls the 11-character YouTube video ID out of any common URL shape. */
function getYouTubeId(url: string): string | null {
  if (!url) return null;
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  if (match?.[1]) return match[1];
  if (/^[a-zA-Z0-9_-]{11}$/.test(url.trim())) return url.trim();
  return null;
}

function VideoCard({ video }: { video: VideoPost }) {
  const videoId = getYouTubeId(video.youtubeUrl);

  return (
    <div className="flex-none w-[90%] sm:w-[66%] md:w-[48%] lg:w-[32%] snap-start">
      <div className="flex h-full flex-col rounded-3xl border border-neutral-200/60 bg-white p-5 transition-all duration-300 hover:border-brand/40 hover:shadow-lg">
        <div className="mb-5 overflow-hidden rounded-2xl bg-neutral-900">
          {!videoId ? (
            <div className="flex h-full min-h-48 items-center justify-center px-4 text-center text-sm text-neutral-500">
              Video unavailable
            </div>
          ) : (
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${videoId}?controls=1&rel=0&modestbranding=1&playsinline=1`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          )}
        </div>

        <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-brand-dark/40">
          {video.categories && video.categories.length > 0 && (
            <span className="rounded-full bg-brand/15 px-2.5 py-0.5 text-[#3b7d20]">
              {video.categories[0]}
            </span>
          )}
          <div className="ml-1 flex items-center gap-1.5">
            <Play size={12} className="text-[#3b7d20]/75" fill="currentColor" />
            <span>Watch</span>
          </div>
        </div>

        <h3 className="text-xl font-bold leading-snug text-neutral-900 line-clamp-2">
          {video.title}
        </h3>
      </div>
    </div>
  );
}

export default function VideoCarousel({ videos, title, subtitle }: VideoCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateArrows = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    updateArrows();
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows, videos?.length]);

  const scrollByPage = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.9, behavior: "smooth" });
  };

  if (!videos || videos.length === 0) return null;

  return (
    <section className="w-full">
      {(title || subtitle) && (
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          {title && (
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-brand-dark">
              {title}
            </h2>
          )}
          {subtitle && <p className="text-brand-dark/70 text-base md:text-lg">{subtitle}</p>}
        </div>
      )}

      <div className="relative">
        <button
          type="button"
          onClick={() => scrollByPage(-1)}
          aria-label="Scroll to previous videos"
          disabled={!canScrollLeft}
          className={`hidden md:flex absolute -left-5 top-[calc(50%-28px)] -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white border border-neutral-200/60 shadow-lg items-center justify-center transition-all duration-300 hover:border-brand/40 hover:shadow-xl ${
            canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <ChevronLeft size={20} className="text-brand-dark" />
        </button>

        <div
          ref={scrollerRef}
          className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {videos.map((video) => (
            <VideoCard key={video._id} video={video} />
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollByPage(1)}
          aria-label="Scroll to next videos"
          disabled={!canScrollRight}
          className={`hidden md:flex absolute -right-5 top-[calc(50%-28px)] -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white border border-neutral-200/60 shadow-md items-center justify-center transition-all duration-300 hover:border-brand/40 hover:shadow-xl ${
            canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <ChevronRight size={20} className="text-brand-dark" />
        </button>
      </div>
    </section>
  );
}