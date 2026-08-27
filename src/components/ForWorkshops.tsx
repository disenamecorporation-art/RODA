import {
  Wrench,
  TrendingUp,
  FolderLock,
  MessagesSquare,
  Users2,
  ChevronRight,
  Sparkles,
} from "lucide-react";

interface ForWorkshopsProps {
  onContactClick: () => void;
}

export default function ForWorkshops({ onContactClick }: ForWorkshopsProps) {
  const workshopFeatures = [
    {
      title: "Base de Datos de Clientes Digital",
      desc: "Reemplaza las libretas y hojas de Excel. Guarda el historial completo de cada carro, con repuestos instalados y millajes, en un sistema en la nube rápido y seguro.",
      icon: <FolderLock className="w-5 h-5 text-brand-orange" />,
    },
    {
      title: "Retorno de Clientes Automatizado",
      desc: "Cuando le haces un servicio a un cliente, el sistema calcula su próximo vencimiento. RODA le avisa automáticamente con una alerta push de parte de tu taller.",
      icon: <TrendingUp className="w-5 h-5 text-brand-orange" />,
    },
    {
      title: "Cero Papeleo, Más Profesionalismo",
      desc: "Imprime presupuestos u hojas de servicio con un código QR. El cliente lo escanea y guarda toda su ficha de servicio instantáneamente en su cuenta RODA.",
      icon: <Wrench className="w-5 h-5 text-brand-orange" />,
    },
    {
      title: "Canal de Comunicación Directo",
      desc: "Envía promociones de cambio de aceite, alertas de stock de neumáticos, u ofertas de alineación directamente a la pantalla de tus clientes registrados.",
      icon: <MessagesSquare className="w-5 h-5 text-brand-orange" />,
    },
  ];

  return (
    <section id="talleres" className="py-24 bg-white relative overflow-hidden">
      {/* Visual background rings */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl -ml-40 -mb-40"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Core pitch */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-3.5 py-1.5 rounded-full inline-block">
              Locales y Talleres Aliados 🇻🇪
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-blue tracking-tight leading-tight">
              Lleva tu taller automotriz al próximo nivel
            </h2>
            <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed">
              ¿Eres dueño de un centro de cambio de aceite, taller mecánico, taller de frenos, alineación o suspensión en Venezuela?
            </p>
            <p className="text-sm md:text-base text-slate-500 font-light leading-relaxed">
              Con la plataforma de <strong>RODA para Talleres</strong>, digitalizas tu negocio de forma inmediata. Fidelizas a tus clientes recurrentes y aumentas la tasa de retorno de vehículos hasta en un <strong>42%</strong> gracias a nuestras alertas automatizadas de millaje.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={onContactClick}
                className="shine-btn text-center text-xs font-bold uppercase tracking-wider bg-brand-orange text-white py-4 px-8 rounded-full shadow-lg shadow-brand-orange/25 hover:shadow-brand-orange/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Súmate como local aliado
                <ChevronRight className="w-4 h-4" />
              </button>
              
              <div className="flex items-center gap-2.5 text-slate-500 pl-2">
                <Users2 className="w-5 h-5 text-brand-blue" />
                <span className="text-xs font-bold text-slate-700">Ya son +500 talleres en el país</span>
              </div>
            </div>
          </div>

          {/* Right Column: Grid of features */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-6">
              {workshopFeatures.map((feat, index) => (
                <div
                  key={index}
                  className="bg-slate-50/70 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 hover:border-brand-orange/20 border border-slate-100 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="mb-4 bg-white shadow-xs w-10 h-10 rounded-xl flex items-center justify-center border border-slate-100">
                      {feat.icon}
                    </div>
                    <h3 className="text-base font-bold text-brand-blue mb-2">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center gap-1.5 text-[10px] font-bold text-brand-orange">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Incrementa productividad</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Simulated Taller Dashboard snapshot */}
            <div className="mt-8 bg-brand-blue rounded-2xl p-6 text-white relative overflow-hidden shadow-xl shadow-brand-blue/15 border border-white/5">
              <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-brand-orange/20 rounded-full blur-xl"></div>
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-2 rounded-xl border border-white/10 shrink-0">
                  <TrendingUp className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <h4 className="text-sm font-bold mb-1">Impacto del Taller en Números</h4>
                  <p className="text-xs text-slate-200 font-light leading-relaxed">
                    Nuestros locales de cambio de aceite reportan que <strong>8 de cada 10 clientes</strong> regresan a hacer su mantenimiento a tiempo cuando reciben la notificación automática de RODA.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
