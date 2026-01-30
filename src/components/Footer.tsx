import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-4">Flor de Braga</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Florista artesanal em Braga. Criamos arranjos florais únicos para todos os momentos especiais da sua vida.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#servicos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Braga, Portugal</li>
              <li>+351 914 959 451</li>
              <li>contacto@flordebraga.pt</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/70">
            © {currentYear} Flor de Braga. Todos os direitos reservados.
          </p>
          <p className="text-sm text-primary-foreground/70 flex items-center gap-1">
            Feito com <Heart className="h-4 w-4 text-accent" fill="currentColor" /> em Braga
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
