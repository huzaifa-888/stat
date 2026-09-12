import { notFound } from "next/navigation";
import Link from "next/link";
import { categories, getCategory } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import CategoryIcon from "@/components/CategoryIcon";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const category = getCategory(params.slug);
  if (!category) return {};
  return {
    title: `${category.name} — Smart Printing`,
    description: category.description,
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = getCategory(params.slug);
  if (!category) notFound();

  const productList = getProductsByCategory(category.slug);
  const others = categories.filter((c) => c.slug !== category.slug);

  return (
    <div className="mx-auto max-w-content px-6 py-14">
      <nav className="text-sm text-navy/50">
        <Link href="/" className="focus-ring hover:text-navy">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-navy">{category.name}</span>
      </nav>

      <div className="mt-6 flex flex-col gap-8 rounded-3xl border border-line bg-white p-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-cyan-deep">{category.tagline}</p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-navy sm:text-4xl">
            {category.name}
          </h1>
          <p className="mt-3 max-w-xl text-navy/60">{category.description}</p>
          <p className="mt-4 text-sm text-navy/50">
            Typical turnaround: <span className="font-medium text-navy">{category.turnaround}</span>
          </p>
        </div>
        <CategoryIcon slug={category.icon} className="hidden h-32 w-32 flex-shrink-0 text-navy sm:block" />
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {productList.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      <div className="mt-16">
        <h2 className="font-display text-xl font-semibold text-navy">Other categories</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {others.map((c) => (
            <Link
              key={c.slug}
              href={`/categories/${c.slug}`}
              className="focus-ring rounded-pill border border-line bg-white px-4 py-2 text-sm text-navy/70 hover:bg-mist"
            >
              {c.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}