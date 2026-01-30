import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-flowers.jpg';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-up">
            <div className="inline-block">
              <span className="text-sm font-medium tracking-widest uppercase text-primary/80">
                Florista em Braga
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-semibold leading-tight text-foreground">
              Flores que
              <br />
              <span className="text-primary">Contam Histórias</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Criamos arranjos florais únicos e personalizados para todos os momentos especiais da sua vida. 
              Cada flor é selecionada com carinho e dedicação.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button size="lg" asChild className="text-base px-8">
                <a href="#servicos">Descobrir Serviços</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8">
                <a href="#galeria">Ver Galeria</a>
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Bouquet de flores elegante com rosas e peónias"
                className="w-full h-auto rounded-2xl shadow-elevated"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full opacity-60 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-sage-light rounded-full opacity-50 blur-3xl" />
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-float">
          <span className="text-xs text-muted-foreground tracking-wider uppercase">Explorar</span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
