import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import heroImage from '@/assets/hero-flowers.jpg';
import aboutImage from '@/assets/about-florist.jpg';
import eventsImage from '@/assets/service-events.jpg';

const galleryImages = [
  { src: gallery1, alt: 'Rosas vermelhas, tulipas e flores silvestres', span: 'col-span-1 row-span-1' },
  { src: gallery2, alt: 'Arranjo romântico com rosas em vaso vintage', span: 'col-span-1 row-span-2' },
  { src: gallery3, alt: 'Orquídeas brancas modernas', span: 'col-span-1 row-span-1' },
  { src: heroImage, alt: 'Bouquet elegante com peónias', span: 'col-span-2 row-span-1' },
  { src: aboutImage, alt: 'Atelier da florista', span: 'col-span-1 row-span-1' },
  { src: eventsImage, alt: 'Decoração de mesa para evento', span: 'col-span-1 row-span-1' },
];

const Gallery = () => {
  return (
    <section id="galeria" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium tracking-widest uppercase text-primary/80">
            Inspiração Floral
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold mt-4 text-foreground">
            A Nossa Galeria
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Cada arranjo é uma obra de arte única, criada com paixão e dedicação.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-primary-foreground text-sm font-medium bg-primary/90 px-3 py-1 rounded-full">
                  Ver mais
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.facebook.com/flordebraga"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Ver mais no Facebook
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
