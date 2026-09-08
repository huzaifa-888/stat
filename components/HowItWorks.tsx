import { FileUp, Eye, MessageCircle, Truck } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Choose your product",
    desc: "Pick from stationery, packaging, banners or promotional items and set your specs.",
    icon: FileUp,
  },
  {
    n: "02",
    title: "We check the file",
    desc: "Our press team reviews resolution, colour mode and bleed before anything is queued.",
    icon: Eye,
  },
  {
    n: "03",
    title: "Confirm on WhatsApp",
    desc: "Your order lands in our WhatsApp with the full spec — confirm and pay there.",
    icon: MessageCircle,
  },
  {
    n: "04",
    title: "Print & deliver",
    desc: "Most orders are ready in 2–5 working days, with delivery across the region.",
    icon: Truck,
  },
];

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20">
      <h2 className="font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
        From file to finish
      </h2>
      <p className="mt-2 max-w-md text-ink-600">
        Four steps, the same way every time.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <div key={s.n} className="relative pl-1">
            <div className="flex items-center gap-3">
              <span className="font-display text-2xl font-semibold text-press-300">
                {s.n}
              </span>
              <s.icon className="h-5 w-5 text-press-600" strokeWidth={1.6} />
            </div>
            <h3 className="mt-3 font-display text-lg font-semibold text-ink-900">
              {s.title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{s.desc}</p>
            {i < steps.length - 1 && (
              <div className="pointer-events-none absolute -right-5 top-3 hidden h-px w-10 bg-paper-200 lg:block" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
