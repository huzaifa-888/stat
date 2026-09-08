import { notFound } from "next/navigation";
import Link from "next/link";
import { categories, getCategory } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import ProductArt from "@/components/ProductArt";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = getCategory(params.slug);
  if (!category) notFound();

  const items = getProductsByCategory(category.slug);

  return (
    <div className="mx-auto max-w-7xl px-5 py-14">
      <p className="text-sm text-ink-400">
        <Link href="/" className="hover:text-press-600">
          Home
        </Link>{" "}
        / {category.name}
      </p>

      <div className="mt-4 flex flex-col gap-6 border-b border-paper-200 pb-10 sm:flex-row sm:items-center">
        <ProductArt kind={category.icon} size="md" />
        <div>
          <h1 className="font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
            {category.name}
          </h1>
          <p className="mt-2 max-w-xl text-ink-600">{category.description}</p>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
