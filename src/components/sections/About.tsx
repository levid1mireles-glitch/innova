import { Building2, Target, Eye, Heart } from "lucide-react";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import nosotros from "@/assets/nosotros.png";

const values = [
  { icon: Target, title: "Misión", text: "Brindar soluciones de mecanizado CNC de alta precisión, transformando ideas y materiales en componentes industriales confiables que impulsen la productividad de nuestros clientes." },
  { icon: Eye, title: "Visión", text: "Consolidarnos como referente nacional en manufactura CNC e ingeniería aplicada, reconocidos por la excelencia técnica y la cercanía con cada cliente." },
  { icon: Heart, title: "Valores", text: "Compromiso, Integridad y Excelencia en cada proceso, pieza y relación que construimos." },
];

export function About() {
  return (
    <section id="nosotros" className="container mx-auto px-4 py-24 md:px-8">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">

          <img src={nosotros} />

        </div>
        <div className="order-1 flex flex-col justify-center lg:order-2">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">¿Quiénes somos?</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
            Perfil Corporativo
          </h2>
          <p className="mt-4 text-muted-foreground">
            En Innova combinamos décadas de experiencia con tecnología de vanguardia para
            entregar piezas industriales que cumplen las tolerancias más exigentes del
            mercado.
          </p>
          <div className="mt-8 space-y-5">
            {values.map((v) => (
              <div key={v.title} className="flex gap-4 rounded-lg border border-border/50 bg-card p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent-gradient border border-border/60">
                  <v.icon className="h-5 w-5 text-foreground" strokeWidth={1.6} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{v.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}