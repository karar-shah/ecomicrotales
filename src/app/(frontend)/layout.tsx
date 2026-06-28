import type { Metadata } from "next";
import "@/app/globals.css";
import { SanityLive } from "@/sanity/lib/live";
import DesktopNav from "@/components/Nav/DesktopNav";

export const metadata: Metadata = {
  title: "Eco Micro Tales",
  description: "Eco Micro Tales - Stories for a better planet",
};

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <DesktopNav />
      {children}
      <SanityLive />
    </>
  );
}
