import logo from '@/assets/logo.png';

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
          <img src={logo} alt="ARSE Logo" className="h-8 w-auto mb-4" />
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
          <p className="font-nav text-xs tracking-[0.2em] uppercase text-gold mb-4">¿Te Ayudamos?</p>
          
          {/* Phone and Email */}
          <div className="mb-6">
            <a href="tel:957606645" className="flex items-center gap-2 text-ivory/40 hover:text-gold transition-colors mb-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="font-nav text-sm">957 606 645</span>
            </a>
            <a href="mailto:info@puertasarse.com" className="flex items-center gap-2 text-ivory/40 hover:text-gold transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m4 6 8 6 8-6" />
              </svg>
              <span className="font-nav text-sm break-all">info@puertasarse.com</span>
            </a>
          </div>

          {/* Locations */}
          <p className="font-nav text-xs tracking-[0.2em] uppercase text-gold mb-2">Ubicaciones</p>
          <div className="space-y-2 text-ivory/40">
            <div className="flex gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="flex-shrink-0 mt-0.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div className="font-nav text-xs">
                <p className="font-semibold text-ivory/60">Puente Genil</p>
                <p>Urbanización de las Palomas, 15</p>
              </div>
            </div>
            <div className="flex gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="flex-shrink-0 mt-0.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div className="font-nav text-xs">
                <p className="font-semibold text-ivory/60">Lucena</p>
                <p>Carretera de Cabra, s/n</p>
              </div>
            </div>
            <div className="flex gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="flex-shrink-0 mt-0.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div className="font-nav text-xs">
                <p className="font-semibold text-ivory/60">Villacañas</p>
                <p>Carretera de Quintanar km. 95</p>
              </div>
            </div>
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
