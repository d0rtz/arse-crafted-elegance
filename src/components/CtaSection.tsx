import { useInView } from '@/hooks/useInView';

const CtaSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="contacto" ref={ref} className="bg-gold py-24 md:py-32">
      <div className={`max-w-[800px] mx-auto px-6 md:px-12 text-center transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h2 className="font-display text-4xl md:text-6xl font-light text-carbon leading-tight mb-6">
          PODEMOS AYUDARTE A ENCONTRAR LO QUE NECESITAS
        </h2>
        <p className="font-body text-lg text-carbon/70 mb-10">
          Cuéntanos tu proyecto y nuestro equipo te asesorará sin compromiso.
        </p>
        <a
          href="#"
          className="inline-block font-nav text-xs tracking-[0.15em] uppercase px-10 py-4 bg-carbon text-ivory hover:bg-dark-2 transition-all duration-300"
        >
          Solicitar una cotización →
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
