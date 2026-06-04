import { Award, GraduationCap, Boxes, Clock, Headphones, Repeat, type LucideIcon } from "lucide-react";

interface Feature { icon: LucideIcon; title: string; desc: string }

const features: Feature[] = [
  { icon: Award, title: "Precisión y calidad garantizada", desc: "Tolerancias críticas verificadas con instrumentos certificados." },
  { icon: GraduationCap, title: "Experiencia y conocimiento", desc: "Equipo técnico con trayectoria comprobada en la industria." },
  { icon: Boxes, title: "Versatilidad en materiales", desc: "Acero, aluminio, bronce y plásticos técnicos." },
  { icon: Clock, title: "Puntualidad garantizada", desc: "Cumplimos los plazos acordados sin comprometer la calidad." },
  { icon: Headphones, title: "Atención y asesoría", desc: "Acompañamiento técnico desde la cotización hasta la entrega." },
  { icon: Repeat, title: "Precisión en serie", desc: "Producción repetible para volúmenes pequeños y medianos." },
];

export function WhyUs() {
  return (
    <section id="por-que" className="border-y border-border/40 bg-card/30">
      <div className="container mx-auto px-4 py-24 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Diferenciadores</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">¿Por qué elegirnos?</h2>
          <p className="mt-4 text-muted-foreground">
            Seis razones por las que empresas líderes confían su manufactura en Innova.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-lg border border-border/50 bg-card p-6 transition-all hover:border-border hover:shadow-elevated"
            >
              <div className="absolute inset-0 blueprint-grid opacity-0 transition-opacity group-hover:opacity-30" />
              <div className="relative">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-accent-gradient border border-border/60">
                  <f.icon className="h-5 w-5 text-foreground" strokeWidth={1.6} />
                </div>
                <h3 className="mt-5 text-base font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}