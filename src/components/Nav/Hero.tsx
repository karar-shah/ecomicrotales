import React from "react";
import {
  Play,
  ArrowRight,
  Sun,
  Leaf,
  TreeDeciduous,
  Eye,
  GalleryVerticalEnd,
} from "lucide-react";

export default function Hero() {
  return (
    <div className="relative w-full max-h-[950px] min-h-[850px] flex flex-col items-center overflow-hidden">
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

      <div className="flex flex-col justify-between w-full h-screen my-24">
        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center text-center mt-16 px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-brand"></div>
            <span className="text-white text-sm font-medium">
              Protecting Nature Today For A Sustainable Tomorrow
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Nature Conservation for
            <br />
            Better Tomorrow
          </h1>

          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-10">
            We work to protect ecosystems, restore biodiversity, and promote
            sustainable living for a healthier planet and future generations.
            Through education, action, and advocacy,
          </p>

          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 bg-brand text-black font-semibold pl-6 pr-4 py-3 rounded-full hover:bg-brand/90 transition-colors">
              Get Involved
              <span className="bg-black text-brand rounded-full w-6 h-6 flex items-center justify-center ml-1">
                <ArrowRight size={14} />
              </span>
            </button>

            <button className="flex items-center gap-3 text-white font-semibold group">
              <span className="bg-brand text-black w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-brand/90 transition-colors">
                <GalleryVerticalEnd size={20} />
              </span>
              Read Our Stories
            </button>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-10 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex items-center gap-5 hover:bg-white/20 transition-colors">
              <div className="bg-brand w-14 h-14 rounded-full flex items-center justify-center shrink-0">
                <Sun size={26} className="text-black" />
              </div>
              <h3 className="text-white font-semibold text-lg leading-snug">
                Wildlife Protection
                <br />
                Initiatives
              </h3>
            </div>

            {/* Card 2 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex items-center gap-5 hover:bg-white/20 transition-colors">
              <div className="bg-brand w-14 h-14 rounded-full flex items-center justify-center shrink-0">
                <Leaf size={26} className="text-black" />
              </div>
              <h3 className="text-white font-semibold text-lg leading-snug">
                Support biodivers
                <br />
                conservation
              </h3>
            </div>

            {/* Card 3 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex items-center gap-5 hover:bg-white/20 transition-colors">
              <div className="bg-brand w-14 h-14 rounded-full flex items-center justify-center shrink-0">
                <TreeDeciduous size={26} className="text-black" />
              </div>
              <h3 className="text-white font-semibold text-lg leading-snug">
                Drives climate action
                <br />
                initiatives
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
