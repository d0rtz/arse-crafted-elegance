import { useInView } from '@/hooks/useInView';

const features = [
  {
    title: 'Calidad Asegurada',
    desc: 'Normativa EN 1121-1 y certificación en fabricación del producto final.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold">
        <path d="M24 4L6 14v12c0 11 8 18 18 20 10-2 18-9 18-20V14L24 4z" />
        <path d="M16 24l6 6 10-12" />
      </svg>
    ),
  },
  {
    title: 'Innovación y Desarrollo',
    desc: 'Inversión continua en maquinaria e I+D para ofrecer soluciones vanguardistas.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold">
        <circle cx="24" cy="24" r="18" />
        <path d="M24 12v12l8 8" />
        <circle cx="24" cy="24" r="3" />
      </svg>
    ),
  },
  {
    title: 'Comprometidos con el medio ambiente',
    desc: 'Certificación PEFC, cadena de custodia sostenible y producción responsable.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold">
        <path d="M24 44V24" />
        <path d="M24 24c0-12 12-16 16-20-4 8-4 16-16 20z" />
        <path d="M24 24c0-12-12-16-16-20 4 8 4 16 16 20z" />
      </svg>
    ),
  },
];

const WhyChooseUs = () => {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="bg-dark-1 grain-overlay py-24 md:py-32">
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        <p className="font-nav text-xs tracking-[0.2em] uppercase text-gold mb-4 text-center">— Por qué elegirnos</p>
        <h2 className="font-display text-4xl md:text-6xl font-light text-ivory text-center mb-16">
          EXCELENCIA EN CADA DETALLE
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className={`group border border-transparent hover:border-gold p-10 transition-all duration-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="mb-6">{f.icon}</div>
              <h3 className="font-display text-2xl text-ivory mb-4">{f.title}</h3>
              <p className="font-body text-ivory/50 text-base">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
