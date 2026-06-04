import { useState } from "react";
import { Factory, Cog, PenTool, Disc3, Scissors, Flame, Zap, CircleDot, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

// 1. Cargamos de forma dinámica e inmediata todas las imágenes de la carpeta assets.
// El fragmento { eager: true } asegura que se importen en el momento del renderizado,
// idéntico a hacer un 'import' estático manual por cada una.
const assetFiles = import.meta.glob<{ default: string }>("@/assets/*.{png,jpg,jpeg,webp}", { eager: true });

interface ServiceItem { 
  id: string; 
  title: string; 
  desc: string; 
  icon: LucideIcon; 
  tag: "servicio" | "maquina";
  imageName: string; // <-- Guardamos el nombre exacto del archivo aquí
}

const items: ServiceItem[] = [
  { id: "serie", title: "Fabricación y Producción en Serie", desc: "Líneas de producción optimizadas para volúmenes consistentes y repetibles.", icon: Factory, tag: "servicio", imageName: "prodSerie.jpeg" },
  { id: "cnc", title: "Maquinado CNC de Alta Precisión", desc: "Fresado y torneado con tolerancias críticas en una sola operación.", icon: Cog, tag: "servicio", imageName: "altPresicion.jpeg" },
  { id: "proto", title: "Desarrollo de Prototipos e Ingeniería", desc: "Del plano 3D al prototipo funcional con asesoría técnica integral.", icon: PenTool, tag: "servicio", imageName: "ProtIng.jpeg" },
  { id: "torno", title: "Torno CNC", desc: "Alta precisión, velocidad y acabados superiores.", icon: Disc3, tag: "maquina", imageName: "torno.jpeg" },
  { id: "laser", title: "Cortadora Láser", desc: "Cortes limpios, detallados y eficientes.", icon: Scissors, tag: "maquina", imageName: "cortadora.jpeg" },
  { id: "sold", title: "Soldadura Sanitaria Láser", desc: "Acabados impecables e higiénicos.", icon: Flame, tag: "maquina", imageName: "soldadura.jpeg" },
  { id: "electro", title: "Electro erosionadora", desc: "Componentes complejos en materiales de alta dureza.", icon: Zap, tag: "maquina", imageName: "electro.jpeg" },
  { id: "punz", title: "Electro punzado", desc: "Procesos exactos y consistentes.", icon: CircleDot, tag: "maquina", imageName: "ElectroPunzado.jpeg" },
];

type Filter = "todos" | "servicio" | "maquina";

const filters: { id: Filter; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "servicio", label: "Servicios" },
  { id: "maquina", label: "Maquinaria" },
];

export function Services() {
  const [active, setActive] = useState<Filter>("todos");
  const filtered = items.filter((i) => active === "todos" || i.tag === active);

  // Función auxiliar para buscar la imagen importada por su nombre de archivo
  const getImageUrl = (imageName: string) => {
    // Buscamos la llave en el objeto importado que coincida con el nombre del archivo
    const key = Object.keys(assetFiles).find((k) => k.endsWith(imageName));
    return key ? assetFiles[key].default : "";
  };

  return (
    <section id="servicios" className="container mx-auto px-4 py-24 md:px-8">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Catálogo</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
            Servicios y Capacidades Industriales
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tecnología, maquinaria y conocimiento al servicio de su proyecto.
          </p>
        </div>
        <div className="flex gap-2 rounded-lg border border-border/50 bg-card p-1">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                active === f.id
                  ? "bg-accent-gradient text-foreground border border-border/60"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <article
            key={item.id}
            className="group flex flex-col overflow-hidden rounded-lg border border-border/50 bg-card transition-all hover:border-border hover:shadow-elevated"
          >
            {/* REEMPLAZO: Aquí se asigna la imagen traída dinámicamente de src/assets */}
            <div className="relative aspect-video w-full overflow-hidden bg-muted">
              <img 
                src={getImageUrl(item.imageName)} 
                alt={item.title} 
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-1 flex-col p-5">
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {item.tag === "servicio" ? "Servicio" : "Maquinaria"}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{item.desc}</p>
              <a href="#contacto" className="mt-4">
                <Button variant="outline" size="sm" className="w-full">Solicitar información</Button>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}