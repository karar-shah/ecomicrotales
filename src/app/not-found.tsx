import Link from "next/link";
import PageHero from "@/components/Nav/PageHero";

export default function GlobalNotFound() {
  return (
    <main className="w-full min-h-screen bg-white text-neutral-900">
      <PageHero
        title="Page Not Found"
        imageSrc="/mahesh.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />
      <div className="max-w-3xl mx-auto px-10 py-24 text-center space-y-6">
        <h2 className="text-3xl font-bold">404 - Nothing here</h2>
        <p className="text-neutral-600">
          We couldn't find the page you were looking for.
        </p>
        <div className="pt-8 flex justify-center gap-4">
          <Link
            href="/"
            className="bg-brand text-black font-semibold px-8 py-3 rounded-full hover:bg-brand/90 transition-colors inline-block"
          >
            Go Home
          </Link>
          <Link
            href="/posts"
            className="border-2 border-brand text-black font-semibold px-8 py-3 rounded-full hover:bg-brand/10 transition-colors inline-block"
          >
            Read Stories
          </Link>
        </div>
      </div>
    </main>
  );
}
