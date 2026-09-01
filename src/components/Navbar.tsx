import { useState, useEffect } from "react";
import { Menu, X, Smartphone } from "lucide-react";

interface NavbarProps {
  onContactWorkshopClick: () => void;
}

export default function Navbar({ onContactWorkshopClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple active section detection
      const sections = ["inicio", "beneficios", "como-funciona", "talleres", "testimonios", "contacto"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Beneficios", href: "#beneficios", id: "beneficios" },
    { label: "Cómo funciona", href: "#como-funciona", id: "como-funciona" },
    { label: "Para talleres", href: "#talleres", id: "talleres" },
    { label: "Testimonios", href: "#testimonios", id: "testimonios" },
    { label: "Contacto", href: "#contacto", id: "contacto" },
  ];

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/75 backdrop-blur-xl border-b border-white/35 shadow-md shadow-brand-blue/5 ${
        isScrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <img
            src="https://i.postimg.cc/JzhfYvjX/LOGO-WEB-RODA.png"
            alt="RODA Logo"
            referrerPolicy="no-referrer"
            className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-all duration-300 relative py-1 ${
                activeSection === link.id
                  ? "text-brand-orange"
                  : "text-brand-blue hover:text-brand-orange"
              }`}
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-brand-orange transition-transform duration-300 origin-left ${
                  activeSection === link.id ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contacto"
            onClick={onContactWorkshopClick}
            className="text-xs font-semibold uppercase tracking-wider text-brand-blue hover:text-brand-orange transition-colors"
          >
            Socio Comercial 🇻🇪
          </a>
          <a
            href="#descargar"
            className="shine-btn px-6 py-2.5 bg-brand-orange text-white font-semibold text-xs tracking-wider uppercase rounded-full shadow-lg shadow-brand-orange/20 hover:shadow-brand-orange/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center gap-2"
          >
            <Smartphone className="w-4 h-4" />
            Descargar App
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-brand-blue hover:text-brand-orange transition-colors"
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu with Glassmorphism */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/85 backdrop-blur-xl border-b border-white/35 px-6 py-8 flex flex-col gap-6 animate-fade-in shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-semibold transition-all ${
                activeSection === link.id ? "text-brand-orange pl-2 border-l-2 border-brand-orange" : "text-brand-blue"
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="h-[1px] bg-brand-blue/10 my-1" />
          <div className="flex flex-col gap-4">
            <a
              href="#contacto"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onContactWorkshopClick();
              }}
              className="text-center text-sm font-semibold py-3 text-brand-blue bg-brand-blue/5 rounded-xl border border-brand-blue/10 hover:bg-brand-blue/10 transition-colors"
            >
              Suma tu Taller 🇻🇪
            </a>
            <a
              href="#descargar"
              onClick={() => setIsMobileMenuOpen(false)}
              className="shine-btn text-center text-sm font-semibold py-3 bg-brand-orange text-white rounded-xl shadow-lg shadow-brand-orange/20 flex items-center justify-center gap-2"
            >
              <Smartphone className="w-4 h-4" />
              Descargar RODA
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
