import React from "react";
import PageHero from "@/components/Nav/PageHero";
import Link from "next/link";
import {
  Leaf,
  Globe,
  Flame,
  Shield,
  BookOpen,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function AboutPage() {
  const pillars = [
    {
      icon: <Leaf className="text-brand w-8 h-8" />,
      title: "Nature & Biodiversity",
      description:
        "Celebrating the intricate web of life and exploring how every species, big or small, plays a vital role in our ecosystems.",
    },
    {
      icon: <Globe className="text-brand w-8 h-8" />,
      title: "Climate Change",
      description:
        "Confronting the defining crisis of our time through stories that raise awareness, prompt reflection, and inspire individual and collective action.",
    },
    {
      icon: <Shield className="text-brand w-8 h-8" />,
      title: "Wildlife & Conservation",
      description:
        "Giving a voice to the voiceless. Highlighting the struggles of endangered species and the heroes fighting to protect them.",
    },
    {
      icon: <Flame className="text-brand w-8 h-8" />,
      title: "Pollution & Waste",
      description:
        "Exposing the impact of plastics, emissions, and industrial waste, and reimagining a world where circularity and respect for nature guide our habits.",
    },
    {
      icon: <Sparkles className="text-brand w-8 h-8" />,
      title: "Sustainable Living",
      description:
        "Providing hope and inspiration for everyday green choices, eco-friendly habits, and sustainable solutions that restore balance to our Earth.",
    },
    {
      icon: <BookOpen className="text-brand w-8 h-8" />,
      title: "Creative Advocacy",
      description:
        "Using the ancient art of storytelling to reach hearts and minds, bypassing academic jargon to foster deep empathy and immediate action.",
    },
  ];

  return (
    <main className="w-full min-h-screen bg-[#eff1ed] text-brand-dark">
      {/* Page Hero */}
      <PageHero
        title="About Us"
        imageSrc="/about-us6.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      {/* Main Mission Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-brand/15 border border-brand/30 px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-brand"></span>
              <span className="text-sm font-semibold tracking-wide uppercase text-brand-dark/80">
                Our Mission
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Small Tales. <br />
              <span className="text-[#3b7d20]">Big Environmental Impact.</span>
            </h2>
            <p className="text-lg md:text-xl text-brand-dark/80 leading-relaxed font-medium">
              Welcome to <strong>Eco Micro Tales</strong>, where powerful
              environmental messages are shared through the beauty of short
              stories.
            </p>
            <p className="text-base md:text-lg text-brand-dark/70 leading-relaxed">
              We believe that even the smallest tale can inspire the biggest
              change. Every micro tale on this platform is written to spark
              awareness about nature, climate change, wildlife, pollution,
              biodiversity, sustainable living, and our shared responsibility to
              protect the Earth.
            </p>
          </div>

          {/* Graphical Card */}
          <div className="lg:col-span-5">
            <div className="relative p-8 rounded-3xl bg-brand-dark text-white shadow-xl overflow-hidden group">
              {/* Background Glow */}
              <div className="absolute -right-20 -top-20 w-60 h-60 bg-brand/10 rounded-full blur-3xl group-hover:bg-brand/20 transition-all duration-500"></div>

              <div className="relative z-10 flex flex-col justify-between h-full min-h-[300px]">
                <div>
                  <div className="bg-brand text-black w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                    <Leaf size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    Why Micro Stories?
                  </h3>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed">
                    In a fast-paced world, long reports and data points often
                    lose our attention. Micro stories bridge the gap—delivering
                    quick, memorable emotional sparks that stick with readers
                    and inspire action.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
                  <div className="font-bold text-xs uppercase tracking-wider text-brand">
                    Eco Micro Tales
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                  <div className="text-white/50 text-xs">
                    Stories for Change
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Grid Section */}
      <section className="bg-white border-t border-b border-[#eff1ed] w-full py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              What We Write About
            </h2>
            <p className="text-brand-dark/70 text-base md:text-lg">
              Explore the ecological themes and sustainability pillars that
              anchor our creative micro fiction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-[#eff1ed]/50 hover:bg-[#eff1ed] hover:shadow-md transition-all duration-300 p-8 rounded-2xl border border-neutral-100 flex flex-col group"
              >
                <div className="bg-brand-dark/5 p-4 rounded-xl w-fit mb-6 group-hover:bg--brand/10 transition-colors">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-dark">
                  {pillar.title}
                </h3>
                <p className="text-brand-dark/70 text-sm md:text-base leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Climate Warrior Callout */}
      <section className="max-w-4xl mx-auto px-6 md:px-10 py-20 md:py-28 text-center">
        <div className="bg--brand/10 border border--brand/30 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg--brand/5 rounded-full blur-xl"></div>

          <span className="text-brand-dark/50 text-6xl font-serif leading-none block mb-2">
            “
          </span>

          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-brand-dark mb-6 max-w-2xl mx-auto leading-relaxed">
            As a climate warrior, my goal is to encourage people to think, feel,
            and act for the environment—one story at a time. Through creativity
            and storytelling, I hope to inspire readers to become part of a
            greener, kinder, and more sustainable future.
          </h3>

          <div className="w-12 h-0.5 bg--brand mx-auto mb-4"></div>
          <p className="text-sm font-bold uppercase tracking-wider text-brand-dark/80">
            Founder & Climate Warrior
          </p>
          <p className="text-xs text-brand-dark/50 mt-1">Eco Micro Tales</p>
        </div>
      </section>

      {/* Final Action CTA */}
      <section className="bg-brand-dark text-white py-16 md:py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#89ea5f0a,transparent_40%)]"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Together, let's turn words into action and stories into change.
          </h2>
          <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto mb-10">
            Dive into our repository of bite-sized tales and start sharing the
            messages that resonate with you.
          </p>
          <div className="flex justify-center">
            <Link
              href="/posts"
              className="inline-flex items-center gap-2 bg--brand text-black font-bold pl-8 pr-6 py-4 rounded-full hover:bg--brand/90 transition-all transform hover:-translate-y-0.5"
            >
              Explore Micro Stories
              <span className="bg-black text--brand rounded-full w-7 h-7 flex items-center justify-center ml-2">
                <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
