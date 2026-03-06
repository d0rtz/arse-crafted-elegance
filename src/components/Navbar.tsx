import { useState, useEffect } from 'react';
import logo from '@/assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Inicio', 'Colecciones', 'Proyectos', 'Nosotros'];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-carbon/95 backdrop-blur-md' : 'bg-transparent'
      }`}
      style={{ animation: 'fadeInDown 0.6s ease-out 0.3s both' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src={logo} alt="ARSE Logo" className="h-8 w-auto" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-nav text-xs font-light tracking-[0.15em] uppercase text-ivory/70 hover:text-gold transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contacto"
          className="hidden md:block font-nav text-xs tracking-[0.15em] uppercase px-6 py-2.5 border border-gold text-gold rounded-full hover:bg-gold hover:text-carbon transition-all duration-300"
        >
          Descargar Catálogo
        </a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-ivory"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 8h18M3 16h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-carbon/95 backdrop-blur-md px-6 pb-6 space-y-4">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              className="block font-nav text-sm tracking-[0.15em] uppercase text-ivory/70 hover:text-gold transition-colors"
            >
              {link}
            </a>
          ))}
          <a
            href="#contacto"
            className="block font-nav text-sm tracking-[0.15em] uppercase text-gold border border-gold px-4 py-2 text-center rounded-full"
          >
            Descargar Catálogo
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
