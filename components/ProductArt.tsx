import {
  CreditCard,
  FileText,
  Mail,
  Flag,
  Package,
  ShoppingBag,
  Coffee,
  Shirt,
  Usb,
  BadgeCheck,
  Trophy,
  LucideIcon,
} from "lucide-react";
import { IconKind } from "@/types";

const ICONS: Record<IconKind, LucideIcon> = {
  card: CreditCard,
  document: FileText,
  envelope: Mail,
  banner: Flag,
  box: Package,
  bag: ShoppingBag,
  drink: Coffee,
  apparel: Shirt,
  tech: Usb,
  badge: BadgeCheck,
  trophy: Trophy,
};

const TINTS: Record<IconKind, string> = {
  card: "text-press-600 bg-press-50",
  document: "text-ink-700 bg-paper-100",
  envelope: "text-press-700 bg-press-50",
  banner: "text-magenta-500 bg-press-50",
  box: "text-ink-700 bg-paper-100",
  bag: "text-press-600 bg-press-50",
  drink: "text-magenta-500 bg-paper-100",
  apparel: "text-press-700 bg-press-50",
  tech: "text-ink-700 bg-paper-100",
  badge: "text-press-600 bg-press-50",
  trophy: "text-yellow-400 bg-paper-100",
};

export default function ProductArt({
  kind,
  size = "md",
}: {
  kind: IconKind;
  size?: "sm" | "md" | "lg";
}) {
  const Icon = ICONS[kind];
  const dims = size === "lg" ? "h-40 w-40" : size === "sm" ? "h-14 w-14" : "h-24 w-24";
  const iconDims = size === "lg" ? "h-14 w-14" : size === "sm" ? "h-5 w-5" : "h-9 w-9";

  return (
    <div
      className={`relative flex items-center justify-center rounded-full ${dims} ${TINTS[kind]}`}
    >
      <div className="absolute inset-0 rounded-full texture-halftone opacity-[0.12]" />
      <Icon className={iconDims} strokeWidth={1.5} />
      <span className="reg-mark absolute -right-1 -top-1 h-3 w-3 text-current opacity-60" />
    </div>
  );
}
