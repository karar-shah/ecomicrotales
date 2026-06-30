"use client";

import { Sprout, ArrowRight, Smile, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function DesktopNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isPostRoute = pathname
    ? pathname.startsWith("/post/") || pathname.startsWith("/posts/")
    : false;

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Micro Stories", href: "/posts" },
    { name: "Categories", href: "/categories" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div
      className={`absolute top-0 left-0 w-full z-50 transition-all duration-300 ${
        isPostRoute ? "bg-linear-to-b from-brand-dark via-35% to-white" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 md:py-5 md:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="font-bold bg-brand w-10 h-10 md:w-12 md:h-12 rounded-full flex justify-center items-center group-hover:scale-105 transition-transform duration-300">
            <Sprout size={24} className="text-black md:w-[28px] md:h-[28px]" />
          </div>
          <div className="text-xl md:text-2xl font-bold text-white tracking-tight">
            Eco Micro Tales
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
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

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
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
            <Smile size={24} />
          </button>
        </div>

        {/* Mobile/Tablet Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex lg:hidden bg-white/10 hover:bg-white/20 text-white w-10 h-10 md:w-11 md:h-11 rounded-full items-center justify-center transition-colors focus:outline-none z-50"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer Panel */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full sm:w-80 bg-brand-dark/95 backdrop-blur-md p-6 flex flex-col justify-between shadow-2xl transition-all duration-300 ease-in-out transform lg:hidden ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <div>
          {/* Drawer Header */}
          <div className="flex justify-between items-center pb-6 border-b border-white/10">
            <Link href="/" className="flex items-center gap-2">
              <div className="font-bold bg-brand w-9 h-9 rounded-full flex justify-center items-center">
                <Sprout size={18} className="text-black" />
              </div>
              <div className="text-lg font-bold text-white">Eco Micro Tales</div>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="bg-white/10 hover:bg-white/20 text-white w-9 h-9 rounded-full flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>

          {/* Drawer Nav Links */}
          <nav className="flex flex-col gap-5 mt-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-lg font-semibold transition-colors duration-300 hover:text-brand py-1 ${
                    isActive ? "text-brand" : "text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Drawer Actions */}
        <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 bg-brand text-black font-semibold py-3 px-6 rounded-full hover:bg-brand/90 transition-colors w-full text-center"
          >
            Contact Us
            <span className="bg-black text-brand rounded-full w-6 h-6 flex items-center justify-center ml-1.5">
              <ArrowRight size={14} />
            </span>
          </Link>
          <button className="flex items-center justify-center gap-2 bg-white/10 text-white font-semibold py-3 px-6 rounded-full hover:bg-white/25 transition-colors w-full">
            <Smile size={20} />
            <span>Smile</span>
          </button>
        </div>
      </div>
    </div>
  );
}

