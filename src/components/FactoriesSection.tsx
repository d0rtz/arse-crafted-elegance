import { useInView } from '@/hooks/useInView';
import factoryBg from '@/assets/factory-bg.jpg';

const factories = [
  { name: 'Fábrica de Puente Genil', location: 'Córdoba, España' },
  { name: 'Fábrica de Villacañas', location: 'Toledo, España' },
];

const FactoriesSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="bg-dark-1 grain-overlay py-24 md:py-32">
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        <p className="font-nav text-xs tracking-[0.2em] uppercase text-gold mb-4">— Nuestras instalaciones</p>
        <h2 className="font-display text-4xl md:text-6xl font-light text-ivory mb-16">
          CONOCE PUERTAS ARSE
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {factories.map((f, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden h-[300px] md:h-[350px] transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <img
                src={factoryBg}
                alt={f.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-carbon/60 group-hover:bg-carbon/40 transition-all duration-500 flex flex-col justify-end p-8">
                <h3 className="font-display text-2xl md:text-3xl text-ivory mb-1">{f.name}</h3>
                <p className="font-nav text-xs tracking-[0.15em] uppercase text-ivory/50">{f.location}</p>
                <a href="#" className="mt-4 font-nav text-xs tracking-[0.15em] uppercase text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Conocer más →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Mini map */}
        <div className="flex justify-center mt-16">
          <svg viewBox="0 0 400 350" className="w-64 h-56 text-ivory/20" fill="currentColor">
            <path d="M200 10c-20 0-45 15-60 25-30 20-55 35-70 65-10 20-15 40-15 65 0 30 10 55 30 75 15 15 35 25 55 35 25 12 50 20 60 50 10-30 35-38 60-50 20-10 40-20 55-35 20-20 30-45 30-75 0-25-5-45-15-65-15-30-40-45-70-65-15-10-40-25-60-25z" opacity="0.3"/>
            {/* Puente Genil dot */}
            <circle cx="175" cy="240" r="5" className="text-gold" fill="currentColor"/>
            {/* Villacañas dot */}
            <circle cx="210" cy="170" r="5" className="text-gold" fill="currentColor"/>
            <text x="140" y="260" className="text-gold" fill="currentColor" fontSize="8" fontFamily="DM Sans">Puente Genil</text>
            <text x="220" y="168" className="text-gold" fill="currentColor" fontSize="8" fontFamily="DM Sans">Villacañas</text>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default FactoriesSection;
