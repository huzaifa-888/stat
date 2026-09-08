"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ShoppingBag, Menu, X, Phone } from "lucide-react";
import { categories } from "@/data/categories";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-paper-200 bg-paper-50/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src="/logo/smart-printing-logo.png"
            alt="Smart Printing"
            width={150}
            height={94}
            className="h-11 w-auto"
            priority
          />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-6 lg:flex">
          {categories.slice(0, 6).map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className="whitespace-nowrap text-[13px] font-medium tracking-tight text-ink-700 transition-colors hover:text-press-600"
            >
              {c.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="tel:+966114097500"
            className="hidden items-center gap-2 text-sm text-ink-700 hover:text-press-600 md:flex"
          >
            <Phone className="h-4 w-4" strokeWidth={1.5} />
            <span className="font-medium">Call us</span>
          </a>
          <Link
            href="/cart"
            className="focus-ring relative flex h-10 w-10 items-center justify-center rounded-full text-ink-900 transition-colors hover:bg-press-50 hover:text-press-600"
            aria-label="Cart"
          >
            <ShoppingBag className="h-5 w-5" strokeWidth={1.6} />
            {totalItems > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-magenta-500 text-[10px] font-semibold text-white">
                {totalItems}
              </span>
            )}
          </Link>
          <button
            className="focus-ring flex h-10 w-10 items-center justify-center rounded-full text-ink-900 hover:bg-press-50 lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-paper-200 px-5 py-3 lg:hidden">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className="rounded px-2 py-2 text-sm font-medium text-ink-700 hover:bg-press-50 hover:text-press-600"
              onClick={() => setOpen(false)}
            >
              {c.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded px-2 py-2 text-sm font-medium text-ink-700 hover:bg-press-50 hover:text-press-600"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
