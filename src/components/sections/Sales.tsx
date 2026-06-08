import { Wrench, Hammer, Bolt, FlaskConical, Replace, Package, type LucideIcon } from "lucide-react";

// 1. Cargamos de forma automática todas las imágenes de tu carpeta assets
const assetFiles = import.meta.glob<{ default: string }>("@/assets/*.{png,jpg,jpeg,webp}", { eager: true });

// 2. Agregamos 'imageName' a la interfaz
interface Product { 
  title: string; 
  desc: string; 
  icon: LucideIcon;
  imageName: string; 
}

// 3. Asignamos los nombres de los archivos correspondientes para cada producto
const products: Product[] = [
  { title: "Herramientas de corte, medición y precisión", desc: "Insertos, brocas, calibradores y micrómetros.", icon: Wrench, imageName: "herramientas_corte.png" },
  { title: "Herramientas de ferretería en general", desc: "Equipamiento confiable para taller e industria.", icon: Hammer, imageName: "ferreteria.png" },
  { title: "Tornillería, accesorios y componentes mecánicos", desc: "Pernos, tuercas, rodamientos y fijaciones.", icon: Bolt, imageName: "tornilleria.jpg" },
  { title: "Adhesivos, selladores y productos químicos", desc: "Soluciones para ensamble, sellado y mantenimiento.", icon: FlaskConical, imageName: "selladores.jpg" },
  { title: "Refacciones estándar o a la medida", desc: "Stock disponible o fabricación bajo plano.", icon: Replace, imageName: "refacciones.jpg" },
  { title: "Materiales en bruto o procesados", desc: "Acero, aluminio, bronce y plásticos técnicos.", icon: Package, imageName: "materiales_bruto.jpg" },
];

export function Sales() {
  
  // 4. Función auxiliar para buscar y retornar la URL real de la imagen
  const getImageUrl = (imageName: string) => {
    const key = Object.keys(assetFiles).find((k) => k.endsWith(imageName));
    return key ? assetFiles[key].default : "";
  };

  return (
    <section id="ventas" className="container mx-auto px-4 py-24 md:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Ventas y Suministros</p>
        <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
          Catálogo de Productos
        </h2>
        <p className="mt-4 text-muted-foreground">
          Todo lo que su operación necesita, en un solo proveedor.
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <div key={p.title} className="group overflow-hidden rounded-lg border border-border/50 bg-card transition-all hover:border-border hover:shadow-elevated">
            
            {/* REEMPLAZO: Cambiamos ImagePlaceholder por el contenedor con aspect-square e img real */}
            <div className="relative aspect-square w-full overflow-hidden bg-muted">
              <img 
                src={getImageUrl(p.imageName)} 
                alt={p.title} 
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="p-5">
              <h3 className="text-base font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}