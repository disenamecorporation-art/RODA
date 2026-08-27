import { useState, useEffect } from "react";
import { Apple, Smartphone, ArrowRight, ChevronDown, CheckCircle2, ShieldCheck, Star } from "lucide-react";
import Navbar from "./components/Navbar";
import PhoneMockup from "./components/PhoneMockup";
import Comparison from "./components/Comparison";
import Benefits from "./components/Benefits";
import HowItWorks from "./components/HowItWorks";
import ForWorkshops from "./components/ForWorkshops";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import InteractiveForm from "./components/InteractiveForm";
import Footer from "./components/Footer";

export default function App() {
  const [preselectTaller, setPreselectTaller] = useState(false);

  // Set up performant scroll reveal animations for all sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const revealElements = document.querySelectorAll(".reveal-on-scroll");
    revealElements.forEach((el) => {
      el.classList.add("transition-all", "duration-1000", "ease-out", "opacity-0", "translate-y-8");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleTallerCTAClick = () => {
    setPreselectTaller(true);
    const formElement = document.getElementById("contacto");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen font-sans bg-white overflow-hidden text-slate-800">
      
      {/* Navbar Header */}
      <Navbar onContactWorkshopClick={handleTallerCTAClick} />

      {/* A. HERO SECTION */}
      <header
        id="inicio"
        className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-brand-blue"
      >
        {/* Immersive background image with premium dark overlay gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?auto=format&fit=crop&w=1920&q=80"
            alt="Fondo taller mecánico"
            className="w-full h-full object-cover opacity-35 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/95 via-brand-blue/80 to-[#01116a]"></div>
        </div>

        {/* Ambient glow blobs */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-orange/15 rounded-full blur-3xl z-0 pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-3xl z-0 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Col: Headings & Store Download Buttons */}
            <div className="lg:col-span-7 space-y-8 text-left max-w-2xl">
              
              {/* Intro Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
                <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-wider">
                  Disponible únicamente en Venezuela 🇻🇪
                </span>
              </div>

              {/* Title Clamp */}
              <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.08] text-balance">
                El mantenimiento de tu vehículo, <span className="text-brand-orange">bajo control total</span>
              </h1>

              {/* Subheading */}
              <p className="text-base md:text-xl text-slate-200 font-light leading-relaxed">
                Digitaliza el historial de tu carro o moto en Venezuela. Recibe recordatorios automáticos de próximos servicios y mantente conectado con tu taller de confianza.
              </p>

              {/* Trust Stars block */}
              <div className="flex flex-wrap items-center gap-4 py-1 border-y border-white/10 w-fit">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                  ))}
                </div>
                <p className="text-xs text-slate-300 font-medium">
                  Valoración de <strong>4.9 / 5.0</strong> por conductores y mecánicos en el país.
                </p>
              </div>

              {/* Store Download Badges */}
              <div id="descargar" className="flex flex-col sm:flex-row gap-4">
                
                {/* App Store button */}
                <a
                  href="#app-store"
                  className="shine-btn flex items-center gap-3.5 bg-white text-brand-blue hover:text-white hover:bg-brand-orange border border-white/20 px-6 py-3.5 rounded-2xl shadow-xl hover:shadow-brand-orange/35 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 group"
                >
                  <Apple className="w-7 h-7 shrink-0 transition-transform group-hover:scale-110" />
                  <div className="text-left">
                    <span className="block text-[9px] uppercase tracking-wider font-bold opacity-80 group-hover:text-white">
                      Consíguelo en
                    </span>
                    <span className="block text-sm font-bold font-sans">
                      App Store
                    </span>
                  </div>
                </a>

                {/* Google Play button */}
                <a
                  href="#google-play"
                  className="shine-btn flex items-center gap-3.5 bg-white/10 text-white hover:bg-brand-orange border border-white/15 px-6 py-3.5 rounded-2xl shadow-xl hover:shadow-brand-orange/35 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 group backdrop-blur-md"
                >
                  <Smartphone className="w-7 h-7 shrink-0 transition-transform group-hover:scale-110" />
                  <div className="text-left">
                    <span className="block text-[9px] uppercase tracking-wider font-bold opacity-80 text-slate-300 group-hover:text-white">
                      Disponible en
                    </span>
                    <span className="block text-sm font-bold font-sans">
                      Google Play
                    </span>
                  </div>
                </a>

              </div>

              {/* Notice that app is only mobile */}
              <div className="flex items-center gap-2 text-slate-300 text-xs">
                <ShieldCheck className="w-4 h-4 text-brand-orange" />
                <span>Aplicación 100% móvil. Libre de anuncios molestos.</span>
              </div>

            </div>

            {/* Right Col: Phone Mockup Container */}
            <div className="lg:col-span-5 flex justify-center relative mt-8 lg:mt-0">
              <PhoneMockup />
            </div>

          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-80">
          <span className="text-[10px] uppercase font-bold tracking-widest text-slate-300">
            Explora RODA
          </span>
          <ChevronDown className="w-5 h-5 text-brand-orange animate-bounce-slow" />
        </div>

      </header>

      {/* B. THE PROBLEM & THE SOLUTION (COMPARISON) */}
      <div className="reveal-on-scroll">
        <Comparison />
      </div>

      {/* C. KEY STATISTICS BANNER */}
      <Stats />

      {/* D. BENEFITS / DETAILED FUNCTIONALITIES */}
      <div className="reveal-on-scroll">
        <Benefits />
      </div>

      {/* E. HOW IT WORKS TIMELINE */}
      <div className="reveal-on-scroll">
        <HowItWorks />
      </div>

      {/* F. FOR COMMERCIAL STORES & WORKSHOPS */}
      <div className="reveal-on-scroll">
        <ForWorkshops onContactClick={handleTallerCTAClick} />
      </div>

      {/* G. USER & BUSINESS TESTIMONIALS */}
      <div className="reveal-on-scroll">
        <Testimonials />
      </div>

      {/* H. CALL TO ACTION INTERMEDIATE DOWN */}
      <section className="py-20 bg-[#01116a] text-white relative overflow-hidden border-t border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-84 h-84 bg-brand-orange/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-84 h-84 bg-brand-orange/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-3.5 py-1.5 rounded-full inline-block">
            El Motor de tu Vida en Buen Estado
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            ¿Listo para llevar el control de tu vehículo?
          </h2>
          <p className="text-base md:text-lg text-slate-300 font-light max-w-xl mx-auto leading-relaxed">
            Descarga RODA de forma gratuita hoy mismo. Registra tu garaje digital y olvídate para siempre de recordar la fecha del lubricante.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            {/* App Store button */}
            <a
              href="#app-store"
              className="shine-btn flex items-center justify-center gap-3 bg-white text-brand-blue hover:text-white hover:bg-brand-orange px-6 py-3 rounded-xl shadow-lg transition-all duration-300 group"
            >
              <Apple className="w-5.5 h-5.5 shrink-0" />
              <div className="text-left">
                <span className="block text-[8px] uppercase tracking-wider font-bold opacity-80">
                  Consíguelo en
                </span>
                <span className="block text-xs font-bold">
                  App Store
                </span>
              </div>
            </a>

            {/* Google Play button */}
            <a
              href="#google-play"
              className="shine-btn flex items-center justify-center gap-3 bg-brand-orange text-white hover:bg-brand-orange/90 px-6 py-3 rounded-xl shadow-lg transition-all duration-300 group"
            >
              <Smartphone className="w-5.5 h-5.5 shrink-0" />
              <div className="text-left">
                <span className="block text-[8px] uppercase tracking-wider font-bold opacity-80 text-white/80">
                  Disponible en
                </span>
                <span className="block text-xs font-bold">
                  Google Play
                </span>
              </div>
            </a>
          </div>

          <div className="text-xs text-slate-400 font-light pt-2">
            Disponible para dispositivos móviles con iOS 15.0+ y Android 9.0+.
          </div>
        </div>
      </section>

      {/* I. GLASS CONTACT FORM */}
      <div className="reveal-on-scroll">
        <InteractiveForm
          preselectTaller={preselectTaller}
          onClearPreselect={() => setPreselectTaller(false)}
        />
      </div>

      {/* J. FOOTER */}
      <Footer />

    </div>
  );
}
