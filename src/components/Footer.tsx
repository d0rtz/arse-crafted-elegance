const Footer = () => {
  return (
    <footer className="bg-carbon pt-16 pb-8">
      {/* Top separator */}
      <div className="h-[1px] mb-16 mx-6 md:mx-12" style={{
        background: 'linear-gradient(to right, transparent, hsl(38 45% 61%), transparent)'
      }} />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Col 1: Logo */}
        <div>
          <p className="font-display text-2xl font-semibold tracking-[0.15em] text-gold mb-4">ARSE</p>
          <p className="font-accent text-sm text-ivory/40">
            La madera como arte.<br />La puerta como experiencia.
          </p>
        </div>

        {/* Col 2: Links */}
        <div>
          <p className="font-nav text-xs tracking-[0.2em] uppercase text-gold mb-4">Enlaces</p>
          {['Inicio', 'Nosotros', 'Proyectos', 'Contacto'].map(l => (
            <a key={l} href="#" className="block font-nav text-sm text-ivory/40 hover:text-gold transition-colors mb-2">{l}</a>
          ))}
        </div>

        {/* Col 3: Collections */}
        <div>
          <p className="font-nav text-xs tracking-[0.2em] uppercase text-gold mb-4">Colecciones</p>
          {['Lacadas', 'Laminadas'].map(l => (
            <a key={l} href="#" className="block font-nav text-sm text-ivory/40 hover:text-gold transition-colors mb-2">{l}</a>
          ))}
        </div>

        {/* Col 4: Contact */}
        <div>
          <p className="font-nav text-xs tracking-[0.2em] uppercase text-gold mb-4">Contacto</p>
          <p className="font-nav text-sm text-ivory/40 mb-2">Puente Genil & Lucena</p>
          <p className="font-nav text-sm text-ivory/40 mb-4">Córdoba, España</p>
          <div className="flex gap-4">
            {/* Social icons - outline style */}
            {['M24 4.5C12.2 4.5 2.6 13.1 2.6 23.7c0 6 2.8 11.4 7.2 14.9v7.3l7-3.8c1.9.5 3.9.8 6 .8 11.8 0 21.4-8.6 21.4-19.2S35.8 4.5 24 4.5z'].map((_, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 border border-ivory/20 hover:border-gold hover:text-gold text-ivory/40 flex items-center justify-center transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mt-12 pt-6 border-t border-ivory/10">
        <p className="font-nav text-[11px] text-ivory/30 text-center">
          © 2024 Puertas ARSE. Todos los derechos reservados. Puente Genil & Lucena, Córdoba.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
