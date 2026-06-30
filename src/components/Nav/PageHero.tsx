import React from "react";
import Image from "next/image";
import Link from "next/link";

interface PageHeroProps {
  title: string;
  imageSrc: string;
  breadcrumbs: {
    label: string;
    href?: string;
  }[];
}

export default function PageHero({
  title,
  imageSrc,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <div className="relative w-full h-[40vh] min-h-[400px] flex flex-col justify-center items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="absolute inset-0 w-full h-full object-cover z-0"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#031600]/50 z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center mt-20 px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          {title}
        </h1>

        <div className="flex items-center gap-2 text-white/90 text-lg font-medium">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="hover:text-brand transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span>{crumb.label}</span>
              )}
              {index < breadcrumbs.length - 1 && (
                <span className="mx-2">/</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
