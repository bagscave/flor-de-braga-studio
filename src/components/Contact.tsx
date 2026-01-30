import { MapPin, Phone, Clock, Facebook, Instagram, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Localização',
    content: 'Braga, Portugal',
    subtext: 'Entregamos em toda a região',
  },
  {
    icon: Phone,
    title: 'Telefone',
    content: '+351 914 959 451',
    subtext: 'Ligue ou envie mensagem',
  },
  {
    icon: Clock,
    title: 'Horário',
    content: 'Seg - Sáb: 9h - 19h',
    subtext: 'Domingo: Encerrado',
  },
];

const Contact = () => {
  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium tracking-widest uppercase text-primary/80">
            Fale Connosco
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold mt-4 text-foreground">
            Entre em Contacto
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Estamos aqui para ajudar a criar o arranjo perfeito para si.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((info) => (
              <div key={info.title} className="flex items-start gap-4">
                <div className="p-3 bg-accent rounded-xl flex-shrink-0">
                  <info.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{info.title}</h3>
                  <p className="text-lg text-foreground mt-1">{info.content}</p>
                  <p className="text-sm text-muted-foreground">{info.subtext}</p>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="pt-4">
              <h3 className="font-semibold text-foreground mb-4">Siga-nos</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/flordebraga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card hover:bg-accent rounded-xl transition-colors group"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5 text-muted-foreground group-hover:text-accent-foreground transition-colors" />
                </a>
                <a
                  href="https://www.instagram.com/flordebraga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card hover:bg-accent rounded-xl transition-colors group"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 text-muted-foreground group-hover:text-accent-foreground transition-colors" />
                </a>
                <a
                  href="mailto:contacto@flordebraga.pt"
                  className="p-3 bg-card hover:bg-accent rounded-xl transition-colors group"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5 text-muted-foreground group-hover:text-accent-foreground transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-2xl shadow-soft">
            <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
              Envie-nos uma Mensagem
            </h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                    placeholder="O seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                    placeholder="O seu telefone"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  placeholder="o.seu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="occasion" className="block text-sm font-medium text-foreground mb-2">
                  Ocasião
                </label>
                <select
                  id="occasion"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                >
                  <option value="">Selecione uma ocasião</option>
                  <option value="aniversario">Aniversário</option>
                  <option value="casamento">Casamento</option>
                  <option value="funeral">Homenagem</option>
                  <option value="evento">Evento Corporativo</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
                  placeholder="Descreva o que procura..."
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
