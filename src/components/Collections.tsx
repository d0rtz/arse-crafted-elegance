import { useInView } from '@/hooks/useInView';
import lacadas from '@/assets/collection-lacadas.jpg';
import laminadas from '@/assets/collection-laminadas.jpg';
import cristal from '@/assets/collection-cristal.jpg';
import medida from '@/assets/collection-medida.jpg';

const collections = [
  { name: 'Puertas Lacadas', img: lacadas },
  { name: 'Puertas Laminadas', img: laminadas },
  { name: 'Puertas de Cristal', img: cristal },
  { name: 'Puertas a Medida', img: medida },
];

const Collections = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="colecciones" ref={ref} className="bg-carbon grain-overlay py-24 md:py-32">
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="font-nav text-xs tracking-[0.2em] uppercase text-gold mb-4">— Nuestras colecciones</p>
          <h2 className="font-display text-4xl md:text-6xl font-light text-ivory">
            CONOCE NUESTRAS COLECCIONES
          </h2>
          <div className="w-20 h-[1px] bg-gold mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {collections.map((c, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden cursor-pointer h-[400px] md:h-[500px] transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <img
                src={c.img}
                alt={c.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-carbon/0 group-hover:bg-carbon/60 transition-all duration-500 flex items-end p-8">
                <div className="translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="font-display text-3xl text-ivory mb-2">{c.name}</h3>
                  <span className="font-nav text-xs tracking-[0.15em] uppercase text-gold">
                    Ver colección →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="inline-block font-nav text-xs tracking-[0.15em] uppercase px-8 py-4 border border-gold text-gold hover:bg-gold hover:text-carbon transition-all duration-300">
            Ver todas las colecciones
          </a>
        </div>
      </div>
    </section>
  );
};

export default Collections;
