import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-5 py-32 text-center">
      <span className="reg-mark h-6 w-6 text-press-500" />
      <h1 className="mt-6 font-display text-3xl font-semibold text-ink-900">
        Off the press
      </h1>
      <p className="mt-2 text-ink-600">
        That page doesn&apos;t exist. It may have moved or been renamed.
      </p>
      <Link
        href="/"
        className="focus-ring mt-8 inline-flex items-center gap-2 rounded-card bg-ink-900 px-6 py-3.5 text-sm font-semibold text-white hover:bg-press-700"
      >
        Back to home
      </Link>
    </div>
  );
}
