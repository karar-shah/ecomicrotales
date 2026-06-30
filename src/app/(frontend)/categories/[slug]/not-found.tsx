import Link from "next/link";
import PageHero from "@/components/Nav/PageHero";

export default function NotFound() {
  return (
    <main className="w-full min-h-screen bg-[#eff1ed] text-neutral-900">
      <PageHero
        title="Category Not Found"
        imageSrc="/category4.png"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Categories", href: "/categories" },
        ]}
      />
      <div className="max-w-3xl mx-auto px-10 py-24 text-center space-y-6">
        <h2 className="text-3xl font-bold text-brand-dark">We couldn't find that category</h2>
        <p className="text-brand-dark/70">
          The category you are looking for doesn't exist or has been removed.
        </p>
        <div className="pt-8">
          <Link
            href="/categories"
            className="bg-brand text-black font-bold px-8 py-3 rounded-full hover:bg-brand/90 transition-colors inline-block"
          >
            Back to Categories
          </Link>
        </div>
      </div>
    </main>
  );
}
