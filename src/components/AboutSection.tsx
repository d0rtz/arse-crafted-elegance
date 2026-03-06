import { useInView } from '@/hooks/useInView';
import aboutImg from '@/assets/about-worker.jpg';

const AboutSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="nosotros" ref={ref} className="bg-carbon grain-overlay py-24 md:py-32 overflow-hidden">
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="font-nav text-xs tracking-[0.2em] uppercase text-gold mb-4">— Quiénes somos</p>
          <h2 className="font-display text-4xl md:text-6xl font-light text-ivory leading-tight mb-8">
            LA MADERA<br />COMO ARTE
          </h2>
          <p className="font-body text-ivory/60 mb-6 max-w-lg">
            Somos una empresa familiar con más de 25 años de trayectoria en el mundo de la madera. Contamos con dos centros de producción en Puente Genil y Lucena desde donde fabricamos puertas a medida y todo tipo de molduras.
          </p>
          <p className="font-accent text-xl text-gold/80 mb-8 max-w-md">
            "La puerta como experiencia. Cada pieza cuenta una historia."
          </p>
          <a href="#" className="font-nav text-xs tracking-[0.15em] uppercase text-gold border-b border-gold/40 pb-1 hover:border-gold transition-colors duration-300">
            Saber más →
          </a>
        </div>

        {/* Image */}
        <div className={`relative transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative overflow-hidden" style={{ clipPath: 'polygon(8% 0, 100% 0, 100% 100%, 0% 100%)' }}>
            <img
              src={aboutImg}
              alt="Artesano trabajando en fábrica ARSE"
              className="w-full h-[500px] md:h-[600px] object-cover"
              style={{ filter: 'grayscale(0.4) sepia(0.2)' }}
              loading="lazy"
            />
          </div>
          {/* Rotating badge */}
          <div className="absolute -bottom-6 -left-6 md:-left-10 w-28 h-28 rounded-full border-2 border-gold flex items-center justify-center animate-spin-slow">
            <div className="w-24 h-24 rounded-full bg-carbon flex items-center justify-center">
              <span className="font-display text-lg font-semibold text-gold leading-tight text-center">
                25<br />
                <span className="text-xs font-nav tracking-widest">AÑOS</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
