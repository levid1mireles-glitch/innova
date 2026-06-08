import { ArrowRight, Ruler, Layers, Cpu, ShieldCheck, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import logo from "@/assets/logo.jpeg";

const pillars = [
  { icon: Ruler, title: "Precisión Milimétrica", desc: "Tecnología de última generación." },
  { icon: Layers, title: "Versatilidad", desc: "Expertos en diversos materiales industriales." },
  { icon: Cpu, title: "Ingeniería Aplicada", desc: "Soluciones a la medida de sus requerimientos." },
  { icon: ShieldCheck, title: "Fiabilidad", desc: "Cumplimiento de plazos y tolerancias críticas." },
];

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-hero-gradient">
      <div className="absolute inset-0 blueprint-grid opacity-30" />
      <div className="container relative mx-auto grid gap-12 px-4 py-20 md:px-8 md:py-28 lg:grid-cols-2 lg:gap-16 lg:py-32">
        <div className="flex flex-col justify-center">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border/60 bg-card/60 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-muted-foreground backdrop-blur">
            <Factory className="h-3.5 w-3.5" /> CNC Machining Specialists
          </div>
          <h1 className="text-4xl font-bold leading-[1.05] text-foreground md:text-5xl lg:text-6xl">
            Innova Precision <span className="text-muted-foreground">CNC</span>
          </h1>
          <p className="mt-6 text-xl font-light italic text-foreground/90 md:text-2xl">
            "Conectamos tu confianza con la precisión"
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Especialistas en mecanizado CNC y fabricación de componentes industriales de alta
            precisión. Transformamos acero, aluminio, bronce y plásticos técnicos en piezas
            de alto rendimiento.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://wa.me/527227415404" target="_blank" rel="noreferrer">

            </a>

          </div>
        </div>

        <div className="relative">
          <img src={logo} />
          
          <div className="absolute -bottom-6 -left-6 hidden h-32 w-32 rounded-lg border border-border/60 bg-card/80 backdrop-blur md:block">
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="text-3xl font-bold text-foreground">±0.01</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">mm tolerance</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border/40 bg-background/40 backdrop-blur">
        <div className="container mx-auto grid gap-px bg-border/40 px-0 md:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.title} className="group bg-background/60 p-6 transition-colors hover:bg-card md:p-8">
              <p.icon className="h-6 w-6 text-foreground transition-transform group-hover:scale-110" strokeWidth={1.5} />
              <h3 className="mt-4 text-sm font-semibold text-foreground">{p.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}