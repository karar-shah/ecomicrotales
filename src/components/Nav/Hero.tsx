import React from "react";
import Link from "next/link";
import {
  Play,
  ArrowRight,
  Sun,
  Leaf,
  TreeDeciduous,
  Eye,
  GalleryVerticalEnd,
  BookOpen,
} from "lucide-react";

export default function Hero() {
  return (
    <div className="relative w-full md:h-screen md:max-h-[950px] md:min-h-[850px] min-h-screen flex flex-col items-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/hero-video-silder.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#031600]/65 z-0"></div>

      <div className="flex flex-col justify-between w-full h-full min-h-screen md:min-h-0 pt-28 pb-12 md:pt-36 md:pb-16 relative z-10">
        {/* Main Content */}
        <div className="flex flex-col items-center text-center mt-8 md:mt-0 px-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-brand"></div>
            <span className="text-white text-xs md:text-sm font-medium">
              Protecting Nature Today For A Sustainable Tomorrow
            </span>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight mb-6">
            Nature Conservation for
            <br />
            Better Tomorrow
          </h1>

          <p className="text-white/90 text-base md:text-lg max-w-3xl mx-auto mb-10">
            We work to protect ecosystems, restore biodiversity, and promote
            sustainable living for a healthier planet and future generations.
            Through education, action, and advocacy,
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <Link
              href="/get-involved"
              className="flex items-center gap-2 bg-brand text-black font-semibold pl-6 pr-4 py-3 rounded-full hover:bg-brand/90 transition-colors w-full sm:w-auto justify-center"
            >
              Get Involved
              <span className="bg-black text-brand rounded-full w-6 h-6 flex items-center justify-center ml-1">
                <ArrowRight size={14} />
              </span>
            </Link>

            <button className="flex items-center gap-3 text-white font-semibold group w-full sm:w-auto justify-center">
              <span className="bg-brand text-black w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-brand/90 transition-colors">
                <GalleryVerticalEnd size={20} />
              </span>
              Read Our Stories
            </button>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10 mt-12 md:mt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex items-center gap-5 hover:bg-white/20 transition-colors">
              <div className="bg-brand w-14 h-14 rounded-full flex items-center justify-center shrink-0">
                <Sun size={26} className="text-black" />
              </div>
              <h3 className="text-white font-semibold text-lg leading-snug">
                Foster a deeper understanding of our environmental impact
              </h3>
            </div>

            {/* Card 2 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex items-center gap-5 hover:bg-white/20 transition-colors">
              <div className="bg-brand w-14 h-14 rounded-full flex items-center justify-center shrink-0">
                <Leaf size={26} className="text-black" />
              </div>
              <h3 className="text-white font-semibold text-lg leading-snug">
                Take action today to build a significantly greener future
              </h3>
            </div>

            {/* Card 3 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex items-center gap-5 hover:bg-white/20 transition-colors">
              <div className="bg-brand w-14 h-14 rounded-full flex items-center justify-center shrink-0">
                <BookOpen size={26} className="text-black" />
              </div>
              <h3 className="text-white font-semibold text-lg leading-snug">
                We believe that every story deeply matters
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
