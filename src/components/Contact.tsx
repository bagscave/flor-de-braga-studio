import { MapPin, Phone, Clock, Facebook, Instagram, Mail } from 'lucide-react';

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

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <div className="grid sm:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info) => (
              <div key={info.title} className="text-center">
                <div className="p-4 bg-accent rounded-xl inline-flex mb-4">
                  <info.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">{info.title}</h3>
                <p className="text-lg text-foreground mt-1">{info.content}</p>
                <p className="text-sm text-muted-foreground">{info.subtext}</p>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h3 className="font-semibold text-foreground mb-4">Siga-nos</h3>
            <div className="flex justify-center gap-4">
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
      </div>
    </section>
  );
};

export default Contact;
