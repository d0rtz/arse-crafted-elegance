import heroImg from '@/assets/hero-door.jpg';

const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Puerta de madera premium" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to right, rgba(13,13,13,0.92) 40%, rgba(13,13,13,0.3) 100%)'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full flex items-center gap-8">
          {/* Decorative line */}
          <div className="hidden md:block w-[2px] h-20 bg-gold flex-shrink-0" />

          <div>
            {/* Label */}
            <p
              className="font-nav text-xs tracking-[0.2em] uppercase text-gold mb-6"
              style={{ animation: 'slideUpFade 0.6s ease-out 0.3s both' }}
            >
              — Fabricantes desde 1999
            </p>

            {/* Title */}
            <h1 className="font-display font-light text-ivory leading-[1.05]" style={{ fontSize: 'clamp(48px, 8vw, 96px)' }}>
              {['FABRICANTES DE', 'PUERTAS DE', 'MADERA'].map((line, i) => (
                <span
                  key={i}
                  className="block"
                  style={{ animation: `slideUpFade 0.6s ease-out ${0.3 + i * 0.15}s both` }}
                >
                  {line}
                </span>
              ))}
            </h1>

            {/* Subtitle */}
            <p
              className="font-body text-lg text-ivory/60 mt-6 max-w-md"
              style={{ animation: 'slideUpFade 0.6s ease-out 0.8s both' }}
            >
              Diseño, instalación y normativa en toda España.
            </p>

            {/* CTA */}
            <a
              href="#colecciones"
              className="inline-block mt-8 font-nav text-xs tracking-[0.15em] uppercase px-8 py-4 bg-gold text-carbon hover:bg-transparent hover:text-gold border border-gold transition-all duration-300"
              style={{ animation: 'slideUpFade 0.6s ease-out 0.9s both' }}
            >
              Descubrir nuestros productos →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
