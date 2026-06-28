import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sprout,
  Mail,
  ArrowRight,
  Leaf,
  BookOpen,
  TreeDeciduous,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* Background Image + Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/section-bg-image-1.png"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#031600]/90" />
      </div>

      {/* ── Top Bar ── */}
      <div className="relative z-10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-10 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-brand w-12 h-12 rounded-full flex justify-center items-center group-hover:scale-105 transition-transform">
              <Sprout size={28} className="text-black" />
            </div>
            <span className="text-2xl font-bold text-white">
              Eco Micro Tales
            </span>
          </Link>

          {/* Contact Info */}
          {/* <div className="flex items-center gap-10">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full border-2 border-brand flex items-center justify-center">
                <Mail size={18} className="text-brand" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Email Us</p>
                <p className="text-white/60 text-sm">hello@ecomicrotales.com</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* ── Main Footer Content ── */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-10 py-16 grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* About Column */}
          <div className="md:col-span-4">
            <h3 className="text-white text-lg font-bold mb-5 flex items-center gap-2">
              <Leaf size={18} className="text-brand" />
              About Eco Micro Tales
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Bite-sized stories that inspire action for our planet. We explore
              themes of sustainability, conservation, and environmental
              awareness through engaging micro fiction and real-world insights.
            </p>

            {/* Newsletter */}
            {/* <h4 className="text-white font-semibold text-sm mb-4">
              Newsletter Subscription
            </h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter Email Address*"
                className="flex-1 bg-white/5 border border-white/10 rounded-l-full px-5 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-brand/50 transition-colors"
              />
              <button className="bg-brand hover:bg-brand/90 text-black w-12 rounded-r-full flex items-center justify-center transition-colors">
                <ArrowRight size={18} />
              </button>
            </div> */}
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 md:pl-8">
            <h3 className="text-white text-lg font-bold mb-5 flex items-center gap-2">
              <BookOpen size={18} className="text-brand" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Micro Stories", href: "/micro-stories" },
                { name: "Categories", href: "/categories" },
                { name: "About Us", href: "/about" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-brand transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-brand/60 group-hover:text-brand transition-colors text-xs">
                      ›
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore Topics Column */}
          <div className="md:col-span-3">
            <h3 className="text-white text-lg font-bold mb-5 flex items-center gap-2">
              <TreeDeciduous size={18} className="text-brand" />
              Explore Topics
            </h3>
            <ul className="space-y-3">
              {[
                "Climate Action",
                "Wildlife Conservation",
                "Sustainable Living",
                "Ocean Preservation",
                "Green Energy",
              ].map((topic) => (
                <li key={topic}>
                  <span className="text-white/60 text-sm flex items-center gap-2">
                    <span className="text-brand/60 text-xs">›</span>
                    {topic}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved Column */}
          <div className="md:col-span-2">
            <h3 className="text-white text-lg font-bold mb-5">Get Involved</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Have a micro tale to share? We'd love to hear from eco-conscious
              storytellers.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand text-black font-semibold text-sm pl-5 pr-3.5 py-2.5 rounded-full hover:bg-brand/90 transition-colors"
            >
              Write to Us
              <span className="bg-black text-brand rounded-full w-5 h-5 flex items-center justify-center">
                <ArrowRight size={12} />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {[
              {
                label: "Twitter / X",
                href: "#",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ),
              },
              {
                label: "Facebook",
                href: "#",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                ),
              },
              {
                label: "Instagram",
                href: "#",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                ),
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-brand hover:text-black hover:border-brand transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-white/40 text-sm">
            Copyright © {new Date().getFullYear()} Eco Micro Tales. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
