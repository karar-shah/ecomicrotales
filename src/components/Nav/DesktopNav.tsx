"use client";

import { Sprout, ArrowRight, Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function DesktopNav() {
  const pathname = usePathname();
  const isPostRoute = pathname
    ? pathname.startsWith("/post") || pathname.startsWith("/posts")
    : false;

  return (
    <div
      className={`absolute top-0 left-0 w-full z-50 transition-all duration-300 ${isPostRoute ? "bg-linear-to-b from-brand-dark  via-35% to-white" : ""}`}
    >
      <div className="flex justify-between items-center py-5 px-10">
        <div className="flex items-center gap-3">
          <div className="font-bold bg-brand w-12 h-12 rounded-full flex justify-center items-center">
            <Sprout size={28} className="text-black" />
          </div>
          <div className="text-2xl font-bold text-white">Eco Micro Tales</div>
        </div>
        <nav className="flex items-center gap-8">
          {[
            { name: "Home", href: "/" },
            { name: "Micro Stories", href: "/micro-stories" },
            { name: "About Us", href: "/about" },
            { name: "Contact Us", href: "/contact" },
          ].map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-[15px] font-semibold transition-colors duration-300 hover:text-brand cursor-pointer ${
                  isActive ? "text-brand" : "text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-brand text-black font-semibold pl-5 pr-3.5 py-2.5 rounded-full hover:bg-brand/90 transition-colors"
          >
            Contact Us
            <span className="bg-black text-brand rounded-full w-6 h-6 flex items-center justify-center ml-1.5">
              <ArrowRight size={16} />
            </span>
          </Link>
          <button className="bg-brand text-black w-11 h-11 rounded-full flex items-center justify-center hover:bg-brand/90 transition-colors">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
