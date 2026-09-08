import { notFound } from "next/navigation";
import Link from "next/link";
import { products, getProduct, getProductsByCategory } from "@/data/products";
import { getCategory } from "@/data/categories";
import ProductArt from "@/components/ProductArt";
import ProductCard from "@/components/ProductCard";
import AddToCartForm from "@/components/AddToCartForm";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const category = getCategory(product.categorySlug);
  const related = getProductsByCategory(product.categorySlug)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl px-5 py-14">
      <p className="text-sm text-ink-400">
        <Link href="/" className="hover:text-press-600">
          Home
        </Link>{" "}
        /{" "}
        <Link href={`/category/${category?.slug}`} className="hover:text-press-600">
          {category?.name}
        </Link>{" "}
        / {product.name}
      </p>

      <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="flex items-center justify-center rounded-card border border-paper-200 bg-paper-100 py-24">
          <ProductArt kind={product.icon} size="lg" />
        </div>

        <div>
          <h1 className="font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-ink-600">
            {product.description}
          </p>
          <p className="mt-5 font-display text-2xl font-semibold text-press-700">
            From SAR {product.priceFrom}
          </p>

          <div className="mt-8 border-t border-paper-200 pt-8">
            <AddToCartForm product={product} />
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-20 border-t border-paper-200 pt-14">
          <h2 className="font-display text-2xl font-semibold text-ink-900">
            More from {category?.name}
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
