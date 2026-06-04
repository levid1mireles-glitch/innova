import { useState, type FormEvent } from "react";
import { Phone, MessageCircle, Mail, MapPin, Send, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface ContactForm {
  name: string;
  company: string;
  service: string;
  message: string;
}

const WHATSAPP = "527227415404";

export function Contact() {
  const [form, setForm] = useState<ContactForm>({ name: "", company: "", service: "", message: "" });
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    const text = encodeURIComponent(
      `Hola Innova, soy ${form.name} de ${form.company}.\nServicio: ${form.service}\n\n${form.message}`,
    );
    setTimeout(() => {
      window.open(`https://wa.me/${WHATSAPP}?text=${text}`, "_blank");
      toast.success("Abriendo WhatsApp con tu mensaje…");
      setSending(false);
    }, 400);
  };

  return (
    <section id="contacto" className="relative overflow-hidden bg-hero-gradient">
      <div className="absolute inset-0 blueprint-grid opacity-20" />
      <div className="container relative mx-auto px-4 py-24 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Cog className="mx-auto h-10 w-10 text-foreground" strokeWidth={1.4} />
          <h2 className="mt-6 text-3xl font-bold text-foreground md:text-4xl">
            Soluciones completas, no solo piezas
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            En Innova, no solo le vendemos un servicio o una pieza: le ofrecemos soluciones
            completas que impulsan la confiabilidad y el rendimiento de su operación.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <div className="rounded-lg border border-border/50 bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground">Habla con un asesor</h3>
              <p className="mt-2 text-sm text-muted-foreground">Respuesta rápida vía WhatsApp.</p>
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="mt-5 block">
                <Button className="w-full gap-2" size="lg">
                  <MessageCircle className="h-4 w-4" /> WhatsApp +52 722 741 5404
                </Button>
              </a>
            </div>
            <div className="grid gap-3">
              {[
                { icon: Phone, label: "Teléfono", value: "+52 722 741 5404" },
                { icon: Mail, label: "Correo", value: "contacto@innovacnc.mx" },
                { icon: MapPin, label: "Ubicación", value: "Estado de México, MX" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4 rounded-lg border border-border/50 bg-card p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent-gradient border border-border/60">
                    <c.icon className="h-4 w-4 text-foreground" strokeWidth={1.6} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{c.label}</p>
                    <p className="text-sm font-medium text-foreground">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

         {/* <form onSubmit={onSubmit} className="space-y-5 rounded-lg border border-border/50 bg-card p-6 md:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre</Label>
                <Input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Tu nombre" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Empresa</Label>
                <Input id="company" required value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Tu empresa" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="service">Servicio de interés</Label>
              <Input id="service" required value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} placeholder="Ej. Torno CNC, prototipos…" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Mensaje</Label>
              <Textarea id="message" required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Cuéntanos sobre tu proyecto" />
            </div>
            <Button type="submit" size="lg" className="w-full gap-2" disabled={sending}>
              {sending ? "Enviando…" : (<><Send className="h-4 w-4" /> Enviar por WhatsApp</>)}
            </Button>
          </form>*/}
        </div>
      </div>
    </section>
  );
}