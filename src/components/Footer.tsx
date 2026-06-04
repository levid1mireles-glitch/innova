import { Cog } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground md:flex-row md:px-8">
        <div className="flex items-center gap-2">
          <Cog className="h-4 w-4" />
          <span>© {new Date().getFullYear()} Innova Precision CNC. Todos los derechos reservados.</span>
        </div>
        <p className="text-xs uppercase tracking-[0.25em]">Conectamos tu confianza con la precisión</p>
      </div>
    </footer>
  );
}