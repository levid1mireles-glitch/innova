import type { LucideIcon } from "lucide-react";
import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  label?: string;
  icon?: LucideIcon;
  aspect?: "video" | "square" | "portrait" | "wide";
  className?: string;
  blueprint?: boolean;
}

const aspectMap = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]",
};

export function ImagePlaceholder({
  label = "Imagen",
  icon: Icon = ImageIcon,
  aspect = "video",
  className = "",
  blueprint = true,
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-border/60 bg-card ${aspectMap[aspect]} ${className}`}
    >
      {blueprint && <div className="absolute inset-0 blueprint-grid opacity-60" />}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-background/80" />
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center">
        <div className="rounded-full border border-border/60 bg-background/60 p-4 backdrop-blur-sm">
          <Icon className="h-7 w-7 text-muted-foreground" strokeWidth={1.5} />
        </div>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}