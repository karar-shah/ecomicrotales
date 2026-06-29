"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import Link from "next/link";
import PageHero from "@/components/Nav/PageHero";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="w-full min-h-screen bg-white text-neutral-900">
      <PageHero
        title="Something went wrong"
        imageSrc="/mahesh.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />
      <div className="max-w-3xl mx-auto px-10 py-24 text-center space-y-6">
        <h2 className="text-3xl font-bold">Oops! An error occurred.</h2>
        <p className="text-neutral-600">
          We apologize for the inconvenience. Our team has been notified.
        </p>
        <div className="pt-8 flex justify-center gap-4">
          <button
            onClick={() => reset()}
            className="bg-brand text-black font-semibold px-8 py-3 rounded-full hover:bg-brand/90 transition-colors inline-block"
          >
            Try again
          </button>
          <Link
            href="/"
            className="border-2 border-brand text-black font-semibold px-8 py-3 rounded-full hover:bg-brand/10 transition-colors inline-block"
          >
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}
