import React from "react";
import PageHero from "@/components/Nav/PageHero";
import Link from "next/link";
import {
  Mail,
  Phone,
  ArrowRight,
  PenTool,
  Award,
  Megaphone,
  Leaf,
} from "lucide-react";

export default function GetInvolvedPage() {
  const steps = [
    {
      icon: <PenTool className="text-brand w-8 h-8" />,
      title: "1. Draft Your Tale",
      description:
        "Write a brief, impactful micro story (under 100 words) centered around one of our core ecological themes, such as climate action, wildlife conservation, or sustainable living.",
    },
    {
      icon: <Mail className="text-brand w-8 h-8" />,
      title: "2. Submit Your Work",
      description:
        "Reach out to us via email or phone/WhatsApp with your drafted story, a short bio, and a photo to be used for your author profile.",
    },
    {
      icon: <Award className="text-brand w-8 h-8" />,
      title: "3. Get Listed as Author",
      description:
        "Once reviewed, your story will be published, and you will be officially listed as an author on our platform to showcase your voice for the environment.",
    },
  ];

  return (
    <main className="w-full min-h-screen bg-[#eff1ed] text-brand-dark">
      {/* Page Hero */}
      <PageHero
        title="Get Involved"
        imageSrc="/mahesh.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Get Involved" }]}
      />

      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-brand/15 border border-brand/30 px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-brand"></span>
              <span className="text-sm font-semibold tracking-wide uppercase text-brand-dark/80">
                Write For Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Raise Your Voice. <br />
              <span className="text-[#3b7d20]">Write Micro Tales.</span>
            </h2>
            <p className="text-lg md:text-xl text-brand-dark/80 leading-relaxed font-medium">
              Are you passionate about climate action, biodiversity, or environmental justice? Use the power of story to inspire others.
            </p>
            <p className="text-base md:text-lg text-brand-dark/70 leading-relaxed">
              At <strong>Eco Micro Tales</strong>, we provide a platform for eco-conscious writers, activists, and thinkers to share bite-sized narratives. By contributing micro stories, you help build a library of empathy and action that encourages readers to make sustainable choices and stand up for our planet.
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
                    <Megaphone size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    Spread Awareness
                  </h3>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed">
                    By listing yourself as an author, you become part of a movement. Your stories will educate, engage, and trigger meaningful actions in local and global communities.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
                  <div className="font-bold text-xs uppercase tracking-wider text-brand">
                    Eco Micro Tales
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                  <div className="text-white/50 text-xs">
                    Author Contributor Program
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Grid Section */}
      <section className="bg-white border-t border-b border-[#eff1ed] w-full py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              How It Works
            </h2>
            <p className="text-brand-dark/70 text-base md:text-lg">
              Follow these simple steps to submit your stories and join our collective of eco-storytellers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#eff1ed]/50 hover:bg-[#eff1ed] hover:shadow-md transition-all duration-300 p-8 rounded-2xl border border-neutral-100 flex flex-col group"
              >
                <div className="bg-brand-dark/5 p-4 rounded-xl w-fit mb-6 group-hover:bg-brand/10 transition-colors">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-dark">
                  {step.title}
                </h3>
                <p className="text-brand-dark/70 text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-28 text-center">
        <div className="inline-flex items-center gap-2 bg-brand/15 border border-brand/30 px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-brand"></span>
          <span className="text-sm font-semibold tracking-wide uppercase text-brand-dark/80">
            Contact Channels
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-brand-dark">
          Get in Touch to Publish
        </h2>
        <p className="text-brand-dark/70 text-base md:text-lg max-w-2xl mx-auto mb-12">
          Contact our editorial team with your micro tales or ideas. We'll set up your profile and list you as an author.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Email Card */}
          <div className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-all duration-300">
            <div className="bg-brand/15 p-4 rounded-2xl text-[#3b7d20] mb-4">
              <Mail size={32} />
            </div>
            <h3 className="text-lg font-bold text-brand-dark mb-2">Email Address</h3>
            <a
              href="mailto:syedaridafatima426@gmail.com"
              className="text-lg md:text-xl font-extrabold hover:text-[#3b7d20] transition-colors break-all"
            >
              syedaridafatima426@gmail.com
            </a>
            <p className="text-sm text-brand-dark/50 mt-2">
              Send your stories and author details
            </p>
          </div>

          {/* Phone Card */}
          <div className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-all duration-300">
            <div className="bg-brand/15 p-4 rounded-2xl text-[#3b7d20] mb-4">
              <Phone size={32} />
            </div>
            <h3 className="text-lg font-bold text-brand-dark mb-2">Phone Number</h3>
            <a
              href="tel:03144335821"
              className="text-lg md:text-xl font-extrabold hover:text-[#3b7d20] transition-colors"
            >
              0314-4335821
            </a>
            <p className="text-sm text-brand-dark/50 mt-2">
              Call, message, or WhatsApp us directly
            </p>
          </div>
        </div>
      </section>

      {/* Final Action CTA */}
      <section className="bg-brand-dark text-white py-16 md:py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#89ea5f0a,transparent_40%)]"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Ready to make a difference with your words?
          </h2>
          <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto mb-10">
            Reach out today and let's publish stories that inspire change for a sustainable tomorrow.
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:syedaridafatima426@gmail.com"
              className="inline-flex items-center gap-2 bg-brand text-black font-bold pl-8 pr-6 py-4 rounded-full hover:bg-brand/90 transition-all transform hover:-translate-y-0.5"
            >
              Submit Your Tale
              <span className="bg-black text-brand rounded-full w-7 h-7 flex items-center justify-center ml-2">
                <ArrowRight size={16} />
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
