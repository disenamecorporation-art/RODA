import { useState, useEffect } from "react";
import { Download, Car, Bell, FileSpreadsheet, ChevronRight } from "lucide-react";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  // Automatically cycle active step as a guide, or allow manual selection
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      num: "01",
      title: "Descarga RODA gratis",
      desc: "Instala la app en tu teléfono Android o iPhone en pocos segundos. No requiere suscripción para conductores.",
      icon: <Download className="w-6 h-6 text-white" />,
      detail: "Disponible en App Store y Google Play para toda Venezuela.",
    },
    {
      num: "02",
      title: "Registra tu carro o moto",
      desc: "Ingresa el modelo, año y millaje de tu vehículo. También puedes pedirle a un taller aliado que te registre al visitarlo.",
      icon: <Car className="w-6 h-6 text-white" />,
      detail: "Soporta carros, camionetas, motos y flotas de transporte.",
    },
    {
      num: "03",
      title: "Recibe avisos automáticos",
      desc: "RODA calcula el desgaste aproximado y te notifica cuando se acerque el próximo cambio de aceite, filtro o pastillas.",
      icon: <Bell className="w-6 h-6 text-white" />,
      detail: "Notificación push y por correo para que actúes a tiempo.",
    },
    {
      num: "04",
      title: "Tu historial viaja contigo",
      desc: "Ten a mano la ficha técnica y kilometraje exacto de cada reparación anterior. Úsala para diagnósticos rápidos y precisos.",
      icon: <FileSpreadsheet className="w-6 h-6 text-white" />,
      detail: "Conserva el registro verificado, agregando valor a tu vehículo.",
    },
  ];

  return (
    <section id="como-funciona" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl transform -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-3.5 py-1.5 rounded-full">
            Simplicidad en 4 Pasos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-blue tracking-tight mt-4 mb-6 leading-tight">
            ¿Cómo funciona RODA?
          </h2>
          <p className="text-lg text-slate-600 font-light leading-relaxed">
            Hemos digitalizado todo el ciclo de mantenimiento para que no tengas que preocuparte de nada. Mira lo fácil que es.
          </p>
        </div>

        {/* Desktop timeline flow */}
        <div className="hidden lg:grid grid-cols-4 gap-8 relative mb-16">
          {/* Animated Connecting Line */}
          <div className="absolute top-[52px] left-[12%] right-[12%] h-[2px] bg-slate-200">
            <div
              className="h-full bg-brand-orange transition-all duration-1000 ease-out"
              style={{ width: `${(activeStep / 3) * 100}%` }}
            ></div>
          </div>

          {steps.map((step, idx) => {
            const isActive = idx === activeStep;
            return (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`relative flex flex-col items-center text-center cursor-pointer p-6 rounded-2xl transition-all duration-300 ${
                  isActive
                    ? "bg-white shadow-xl shadow-slate-200/50 scale-105 border border-slate-100"
                    : "hover:bg-white/40"
                }`}
              >
                {/* Number Badge */}
                <span
                  className={`text-6xl font-extrabold select-none mb-4 tracking-tighter block ${
                    isActive ? "text-brand-orange" : "text-slate-200"
                  }`}
                >
                  {step.num}
                </span>

                {/* Animated Node Circle */}
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 z-10 relative mb-6 ${
                    isActive
                      ? "bg-brand-orange shadow-lg shadow-brand-orange/30 scale-110"
                      : "bg-brand-blue/90"
                  }`}
                >
                  {step.icon}
                  {/* Outer pulsating ring for active step */}
                  {isActive && (
                    <span className="absolute inset-0 rounded-full border-2 border-brand-orange animate-ping opacity-75"></span>
                  )}
                </div>

                <h3 className="text-base font-bold text-brand-blue mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-500 font-light leading-relaxed mb-4">
                  {step.desc}
                </p>

                {isActive && (
                  <div className="mt-auto bg-brand-orange/5 text-brand-orange text-[10px] font-semibold py-1.5 px-3 rounded-full border border-brand-orange/15 animate-fade-in">
                    {step.detail}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile/Tablet Vertical Stack */}
        <div className="lg:hidden space-y-6 max-w-xl mx-auto">
          {steps.map((step, idx) => {
            const isActive = idx === activeStep;
            return (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`flex gap-6 p-6 rounded-2xl transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-white shadow-lg border border-slate-100"
                    : "bg-transparent border border-transparent hover:bg-white/40"
                }`}
              >
                {/* Left Number column */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm text-white shrink-0 mb-2 transition-all ${
                      isActive
                        ? "bg-brand-orange shadow-md shadow-brand-orange/20"
                        : "bg-brand-blue/80"
                    }`}
                  >
                    {step.num}
                  </div>
                  {idx < 3 && (
                    <div
                      className={`w-[2px] flex-1 min-h-[40px] transition-all duration-300 ${
                        isActive ? "bg-brand-orange" : "bg-slate-200"
                      }`}
                    ></div>
                  )}
                </div>

                {/* Right content column */}
                <div className="flex-1">
                  <h3 className="text-base font-bold text-brand-blue mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    {step.desc}
                  </p>
                  {isActive && (
                    <div className="mt-3 bg-brand-orange/10 text-brand-orange text-[10px] font-bold px-3 py-1.5 rounded-lg border border-brand-orange/10 w-fit">
                      {step.detail}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
