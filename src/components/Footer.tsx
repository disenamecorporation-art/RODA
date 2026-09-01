import { Smartphone, Facebook, Instagram, Twitter, Heart, MapPin, Mail, Sparkles } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue text-white pt-20 pb-8 relative overflow-hidden border-t border-white/5">
      {/* Visual background accents */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-orange/5 rounded-full blur-3xl -mr-32 -mb-32"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Columns Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          
          {/* Column 1: App summary & Logo */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#inicio" className="inline-block">
              <img
                src="https://i.postimg.cc/JzhfYvjX/LOGO-WEB-RODA.png"
                alt="RODA Logo"
                referrerPolicy="no-referrer"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </a>
            <p className="text-slate-300 text-sm font-light leading-relaxed max-w-sm">
              La plataforma definitiva para el control inteligente del mantenimiento vehicular y la digitalización de talleres aliados en toda Venezuela.
            </p>
            
            {/* Social media links */}
            <div className="flex gap-4">
              <a
                href="#social"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-brand-orange hover:bg-brand-orange/10 flex items-center justify-center transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-slate-300 group-hover:text-brand-orange" />
              </a>
              <a
                href="#social"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-brand-orange hover:bg-brand-orange/10 flex items-center justify-center transition-all duration-300 group"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-slate-300 group-hover:text-brand-orange" />
              </a>
              <a
                href="#social"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-brand-orange hover:bg-brand-orange/10 flex items-center justify-center transition-all duration-300 group"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 text-slate-300 group-hover:text-brand-orange" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation links */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-orange">
              Navegación
            </h4>
            <ul className="space-y-3.5">
              <li>
                <a href="#beneficios" className="text-slate-300 hover:text-white transition-colors text-sm font-light">
                  Beneficios clave
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-slate-300 hover:text-white transition-colors text-sm font-light">
                  ¿Cómo funciona?
                </a>
              </li>
              <li>
                <a href="#talleres" className="text-slate-300 hover:text-white transition-colors text-sm font-light">
                  Sección Talleres
                </a>
              </li>
              <li>
                <a href="#testimonios" className="text-slate-300 hover:text-white transition-colors text-sm font-light">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-slate-300 hover:text-white transition-colors text-sm font-light">
                  Formulario de Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info & Support */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-orange">
              Soporte Local
            </h4>
            
            <ul className="space-y-4 text-sm text-slate-300 font-light">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-brand-orange shrink-0" />
                <span>Caracas, Venezuela. Cobertura a nivel nacional.</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-brand-orange shrink-0" />
                <a href="mailto:soporte@roda.ve" className="hover:text-white transition-colors">
                  soporte@roda.ve
                </a>
              </li>
              <li className="flex gap-3">
                <Smartphone className="w-5 h-5 text-brand-orange shrink-0" />
                <span>Disponible únicamente en iOS y Android.</span>
              </li>
            </ul>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-brand-orange shrink-0 animate-pulse" />
              <p className="text-[11px] text-slate-300 leading-normal font-light">
                ¿Tu taller no está registrado? Escríbenos para incluirlo y automatizar tus avisos.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Location signature */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-light">
          <div>
            &copy; {year} RODA Tecnologías. Todos los derechos reservados.{" "}
            <span className="mx-1">|</span> Hecho por{" "}
            <a
              href="https://instagram.com/legaint.ve"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-orange hover:text-white transition-colors font-medium underline underline-offset-4"
            >
              Legaint Corporation
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
