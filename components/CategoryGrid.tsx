import Link from "next/link";
import { categories } from "@/data/categories";
import CategoryIcon from "./CategoryIcon";
import CornerBadge from "./CornerBadge";

const spans = [
  "lg:col-span-2 lg:row-span-2",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-2",
  "lg:col-span-1",
];

export default function CategoryGrid() {
  return (
    <section className="mx-auto max-w-content px-6 py-20">
      <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-display text-3xl font-semibold text-navy sm:text-4xl">
            Six ways to put your name on something
          </h2>
          <p className="mt-2 max-w-lg text-navy/60">
            Pick a category to see products, specs and pricing — every job is quoted
            before it goes to press.
          </p>
        </div>
      </div>

      <div className="grid auto-rows-[190px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((cat, i) => {
          const isLarge = i === 0;
          return (
            <Link
              key={cat.slug}
              href={`/categories/${cat.slug}`}
              className={`group focus-ring relative flex flex-col justify-between overflow-hidden rounded-3xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(11,42,64,0.12)] ${spans[i]}`}
            >
              <CornerBadge />
              <CategoryIcon
                slug={cat.icon}
                className={`${isLarge ? "h-24 w-24" : "h-14 w-14"} text-navy transition-transform duration-300 group-hover:scale-105`}
              />
              <div>
                <h3 className={`font-display font-semibold text-navy ${isLarge ? "text-2xl" : "text-lg"}`}>
                  {cat.name}
                </h3>
                <p className={`mt-1 text-navy/60 ${isLarge ? "max-w-sm text-sm" : "text-xs"}`}>
                  {cat.tagline}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
