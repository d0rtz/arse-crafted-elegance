import { useInView } from '@/hooks/useInView';
import { useCountUp } from '@/hooks/useCountUp';

const stats = [
  { value: 500000, prefix: '+', suffix: '', label: 'Puertas entregadas' },
  { value: 1500, prefix: '+', suffix: '', label: 'Proyectos realizados' },
  { value: 200, prefix: '+', suffix: '', label: 'Profesionales' },
  { value: 25, prefix: '+', suffix: ' años', label: 'De experiencia' },
];

const StatItem = ({ stat, isActive }: { stat: typeof stats[0]; isActive: boolean }) => {
  const count = useCountUp(stat.value, isActive);
  const formatted = count >= 1000 ? count.toLocaleString('es-ES') : count;

  return (
    <div className="text-center py-8 md:py-0">
      <p className="font-display text-5xl md:text-7xl font-bold text-gold">
        {stat.prefix}{formatted}{stat.suffix}
      </p>
      <p className="font-nav text-xs tracking-[0.2em] uppercase mt-3" style={{ color: '#4a4a4a' }}>
        {stat.label}
      </p>
    </div>
  );
};

const StatsBar = () => {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="bg-ivory py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x md:divide-gold/30">
        {stats.map((stat, i) => (
          <StatItem key={i} stat={stat} isActive={isInView} />
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
