import { Leaf, Award, Clock } from 'lucide-react';
import aboutImage from '@/assets/about-florist.jpg';

const features = [
  {
    icon: Leaf,
    title: 'Flores Frescas',
    description: 'Selecionamos as melhores flores todos os dias',
  },
  {
    icon: Award,
    title: 'Qualidade Premium',
    description: 'Arranjos feitos com mestria e dedicação',
  },
  {
    icon: Clock,
    title: 'Entrega Rápida',
    description: 'Entregamos em Braga no mesmo dia',
  },
];

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={aboutImage}
              alt="Atelier da Flor de Braga"
              className="w-full h-auto rounded-2xl shadow-card"
            />
            
            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/20 rounded-2xl -z-10" />
            
            {/* Stats card */}
            <div className="absolute -bottom-6 -right-6 bg-background p-6 rounded-xl shadow-elevated">
              <div className="text-center">
                <span className="text-4xl font-serif font-bold text-primary">15+</span>
                <p className="text-sm text-muted-foreground mt-1">Anos de Experiência</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="text-sm font-medium tracking-widest uppercase text-primary/80">
                Sobre Nós
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold mt-4 text-foreground">
                A Arte de Emocionar com Flores
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                A <strong className="text-foreground">Flor de Braga</strong> nasceu da paixão pelas flores e pelo desejo 
                de criar momentos especiais. Situada no coração de Braga, somos uma florista artesanal 
                dedicada a transformar emoções em arranjos florais únicos.
              </p>
              <p>
                Cada bouquet que criamos conta uma história. Trabalhamos com flores frescas 
                selecionadas cuidadosamente, combinando tradição e criatividade para surpreender 
                em todas as ocasiões.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6 pt-4">
              {features.map((feature) => (
                <div key={feature.title} className="text-center sm:text-left">
                  <div className="inline-flex p-3 bg-accent rounded-xl mb-3">
                    <feature.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
