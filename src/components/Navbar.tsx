import { useState } from "react";
import { Menu, X, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle"; // ◄ Importamos tu botón de tema

const links = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#por-que", label: "¿Por qué elegirnos?" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#ventas", label: "Ventas" },
  { href: "#contacto", label: "Contacto" },
  { href: "#nuestros_trabajos", label: "Nuestros Trabajos" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <a href="#hero" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent-gradient border border-border/60">
            <Cog className="h-5 w-5 text-foreground" strokeWidth={1.8} />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-foreground">Innova</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Precision CNC</p>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-7 md:flex">
          <nav className="flex items-center gap-7">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {l.label}
              </a>
            ))}
          </nav>
          
          <div className="border-l border-border/40 pl-4">
            <ThemeToggle /> {/* ◄ Botón visible en escritorio */}
          </div>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle /> {/* ◄ Botón visible en móvil fuera del menú para acceso rápido */}
          
          <button
            onClick={() => setOpen(!open)}
            className="rounded-md border border-border/60 p-2"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-border/40 bg-background md:hidden">
          <nav className="container mx-auto flex flex-col gap-1 px-4 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}