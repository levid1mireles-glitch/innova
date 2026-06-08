import { useState } from "react";

// 1. Cargamos de forma dinámica e inmediata todas las imágenes de la carpeta assets.
const assetFiles = import.meta.glob<{ default: string }>("@/assets/*.{png,jpg,jpeg,webp}", { eager: true });

interface ServiceItem { 
  id: string; 
  imageName: string;
}

const items: ServiceItem[] = [
  { id: "0",    imageName: "0.jpeg" },
  { id: "1",    imageName: "1.jpeg" },
  { id: "2",    imageName: "2.jpeg" },
  { id: "3",    imageName: "3.jpeg" },
  { id: "4",    imageName: "4.jpeg" },
  { id: "5",    imageName: "5.jpeg" },
  { id: "6",    imageName: "6.jpeg" },
  { id: "7",    imageName: "7.jpeg" },
  { id: "8",    imageName: "8.jpeg" },
  { id: "9",    imageName: "9.jpeg" },
  { id: "10",   imageName: "10.jpeg" },
  { id: "11",   imageName: "11.jpeg" },
];

export function Ourjobs() {

  const getImageUrl = (imageName: string) => {
    const key = Object.keys(assetFiles).find((k) => k.endsWith(`/${imageName}`));
    return key ? assetFiles[key].default : "";
  };

  return (
    <section id="nuestros_trabajos" className="container mx-auto px-7 py-20 md:px-2">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
            Nuestros Trabajos
          </h2>
          <p className="mt-4 text-muted-foreground">
            Conoce un poco acerca de nuestros trabajos que realizamos.
          </p>
        </div>
      </div>

      {/* Renderizamos directamente todos los items sin filtros */}
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {items.map((item) => (
          <article
            key={item.id}
            className="group flex flex-col overflow-hidden rounded-lg border border-border/50 bg-card transition-all hover:border-border hover:shadow-md"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-muted">
              <img 
                src={getImageUrl(item.imageName)} 
                alt={item.id}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}