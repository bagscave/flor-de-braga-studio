import { Truck, Heart, Calendar } from 'lucide-react';
import serviceWeddings from '@/assets/service-weddings.jpg';
import serviceDelivery from '@/assets/service-delivery.jpg';
import serviceEvents from '@/assets/service-events.jpg';

const services = [
  {
    icon: Heart,
    title: 'Casamentos',
    description: 'Bouquets de noiva, decoração de igrejas e salas de festa. Criamos a atmosfera perfeita para o seu dia especial.',
    image: serviceWeddings,
  },
  {
    icon: Truck,
    title: 'Entregas ao Domicílio',
    description: 'Entrega de flores frescas em Braga e arredores. Surpreenda quem ama com um bouquet especial.',
    image: serviceDelivery,
  },
  {
    icon: Calendar,
    title: 'Eventos & Decoração',
    description: 'Decoração floral para empresas, restaurantes e eventos especiais. Transformamos espaços com elegância.',
    image: serviceEvents,
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium tracking-widest uppercase text-primary/80">
            O Que Fazemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold mt-4 text-foreground">
            Os Nossos Serviços
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Da ideia à realização, acompanhamos cada detalhe para criar momentos inesquecíveis.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-background rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent rounded-lg">
                    <service.icon className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
