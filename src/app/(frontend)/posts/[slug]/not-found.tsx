import Link from "next/link";
import PageHero from "@/components/Nav/PageHero";

export default function NotFound() {
  return (
    <main className="w-full min-h-screen bg-white text-neutral-900">
      <PageHero
        title="Story Not Found"
        imageSrc="/mahesh.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/posts" },
        ]}
      />
      <div className="max-w-3xl mx-auto px-10 py-24 text-center space-y-6">
        <h2 className="text-3xl font-bold">We couldn't find that story</h2>
        <p className="text-neutral-600">
          The micro-story you are looking for doesn't exist or has been removed.
        </p>
        <div className="pt-8">
          <Link
            href="/posts"
            className="bg-brand text-black font-semibold px-8 py-3 rounded-full hover:bg-brand/90 transition-colors inline-block"
          >
            Back to Stories
          </Link>
        </div>
      </div>
    </main>
  );
}
