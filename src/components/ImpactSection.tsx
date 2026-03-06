import { useInView } from '@/hooks/useInView';
import { useCountUp } from '@/hooks/useCountUp';
import factoryBg from '@/assets/factory-bg.jpg';

const figures = [
  { value: 12, suffix: ' millones', label: 'Metros de molduras al año' },
  { value: 100000, suffix: ' m²', label: 'De instalaciones' },
  { value: 1500, suffix: '', label: 'Proyectos realizados' },
  { value: 3000, suffix: '', label: 'Referencias de puertas' },
  { value: 500000, suffix: '', label: 'Puertas al año' },
  { value: 5, suffix: '', label: 'Centros de producción' },
];

const FigureItem = ({ fig, isActive }: { fig: typeof figures[0]; isActive: boolean }) => {
  const count = useCountUp(fig.value, isActive);
  const formatted = count >= 1000 ? count.toLocaleString('es-ES') : count;

  return (
    <div className="text-center py-8 border-b border-gold/20 md:border-b-0">
      <p className="font-display text-4xl md:text-5xl font-bold text-gold">
        +{formatted}{fig.suffix}
      </p>
      <p className="font-nav text-xs tracking-[0.2em] uppercase text-ivory/50 mt-3">{fig.label}</p>
    </div>
  );
};

const ImpactSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={factoryBg} alt="Fábrica" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-carbon/85" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        <p className="font-nav text-xs tracking-[0.2em] uppercase text-gold mb-4 text-center">— Cifras empresariales</p>
        <h2 className="font-display text-4xl md:text-6xl font-light text-ivory text-center mb-16">
          UN GRAN GRUPO EMPRESARIAL
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {figures.map((fig, i) => (
            <FigureItem key={i} fig={fig} isActive={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
