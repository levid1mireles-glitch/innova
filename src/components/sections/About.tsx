import { Building2, Target, Eye, Heart } from "lucide-react";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import nosotros from "@/assets/nosotros.png";

const values = [
  { icon: Target, title: "Misión", text: "Fabricar piezas de alta precisión con tecnología avanzada y calidad garantizada, brindando soluciones confiables y oportunas, satisfaciendo los requerimientos técnicos y operativos de nuestros clientes." },
  { icon: Eye, title: "Visión", text: "Ser la empresa líder en el sector por nuestra innovación, excelencia y capacidad de adaptación a los retos de la industria y generar valor sostenido al proporcionar soluciones de maquinados en la región." },
  { icon: Heart, title: "Valores", text: "Compromiso: Responsabilidad con acuerdos y plazos. Integridad: Ética y transparencia en nuestras acciones. Excelencia: Búsqueda permanente de resultados óptimos" },
];

export function About() {
  return (
    <section id="nosotros" className="container mx-auto px-4 py-24 md:px-8">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">

          <img src={nosotros} className="rounded-2xl"/>

        </div>
        <div className="order-1 flex flex-col justify-center lg:order-2">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">¿Quiénes somos?</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
            Perfil Corporativo
          </h2>
          <p className="mt-4 text-muted-foreground">
            Somos especialistas en maquinado CNC y fabricación de componentes industriales de alta precisión. Transformamos acero, aluminio, bronce y plásticos técnicos en piezas de
            alto rendimiento bajo los estándares más exigentes del mercado. Combinamos tecnología moderna con la experiencia de nuestro equipo para entender sus necesidades y entregarle
            resultados exactos y eficientes. Nos especializamos en diseños de alta complejidad y tolerancias estrictas, garantizando acabados impecables y uniformidad técnica en cada entrega.
            Nos consolidamos como su socio estratégico en la transformación de materiales, donde la calidad, la precisión y la confianza son nuestra firma en cada proyecto.
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