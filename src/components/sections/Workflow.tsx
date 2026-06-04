import { useState } from "react";
import { Boxes, Ruler, Cog, ClipboardCheck, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

// 1. Volvemos a leer de forma automática todas las imágenes de tu carpeta assets
const assetFiles = import.meta.glob<{ default: string }>("@/assets/*.{png,jpg,jpeg,webp}", { eager: true });

// 2. Agregamos 'imageName' a la interfaz
interface Step { 
  id: number; 
  title: string; 
  icon: LucideIcon; 
  desc: string; 
  bullets: string[];
  imageName: string;
}

// 3. Asignamos los nombres de los archivos correspondientes (ajusta las extensiones si cambian)
const steps: Step[] = [
  { id: 1, title: "Materiales", icon: Boxes, desc: "Selección estratégica y análisis de propiedades.", bullets: ["Análisis de dureza", "Compatibilidad de uso", "Trazabilidad de origen"], imageName: "torno.jpeg" },
  { id: 2, title: "Dibujo / Diseño", icon: Ruler, desc: "Modelado y planos con precisión dimensional.", bullets: ["Modelado en Solidworks", "Validación dimensional", "Optimización para CNC"], imageName: "diseno.jpg" },
  { id: 3, title: "Mecanizado", icon: Cog, desc: "Manufactura con maquinaria calibrada.", bullets: ["Herramientas de corte", "Calibración de máquina", "Control de proceso"], imageName: "mecanizado.jpg" },
  { id: 4, title: "Verificación", icon: ClipboardCheck, desc: "Inspección y certificación final.", bullets: ["Instrumentos certificados", "Reporte dimensional", "Liberación de pieza"], imageName: "verificacion.jpg" },
];

export function Workflow() {
  const [active, setActive] = useState(1);
  const current = steps.find((s) => s.id === active)!;

  // 4. Función auxiliar idéntica para buscar y retornar la URL real de la imagen en compilación
  const getImageUrl = (imageName: string) => {
    const key = Object.keys(assetFiles).find((k) => k.endsWith(imageName));
    return key ? assetFiles[key].default : "";
  };

  return (
    <section id="proceso" className="border-y border-border/40 bg-card/30">
      <div className="container mx-auto px-4 py-24 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Proceso</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
            Mantenimiento Preventivo y Correctivo
          </h2>
          <p className="mt-4 text-muted-foreground">
            Un flujo de trabajo riguroso garantiza piezas confiables, una a una.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div className="space-y-3">
            {steps.map((s) => {
              const isActive = s.id === active;
              return (
                <button
                  key={s.id}
                  onClick={() => setActive(s.id)}
                  className={`group flex w-full items-start gap-4 rounded-lg border p-5 text-left transition-all ${
                    isActive
                      ? "border-border bg-card shadow-elevated"
                      : "border-border/40 bg-card/40 hover:border-border/70"
                  }`}
                >
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-md border ${
                    isActive ? "bg-accent-gradient border-border/60" : "border-border/40 bg-background/40"
                  }`}>
                    <s.icon className="h-5 w-5 text-foreground" strokeWidth={1.6} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Paso {s.id}</span>
                    </div>
                    <h3 className="mt-1 text-base font-semibold text-foreground">{s.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>

          <div>
            {/* REEMPLAZO: Cambiamos ImagePlaceholder por el contenedor e img real */}
            <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border/50 bg-muted shadow-elevated">
              <img 
                src={getImageUrl(current.imageName)} 
                alt={current.title} 
                className="h-full w-full object-cover transition-transform duration-300"
              />
            </div>
            
            <div className="mt-6 rounded-lg border border-border/50 bg-card p-6">
              <h3 className="text-xl font-semibold text-foreground">{current.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{current.desc}</p>
              <ul className="mt-5 space-y-2">
                {current.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-sm text-foreground/90">
                    <span className="h-1.5 w-1.5 rounded-full bg-foreground/70" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}