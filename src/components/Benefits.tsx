import {
  FileClock,
  BellRing,
  Building2,
  Milestone,
  CopyPlus,
  Zap,
} from "lucide-react";

export default function Benefits() {
  const list = [
    {
      title: "Historial de Mantenimiento Único",
      desc: "Lleva el registro digital completo de tu carro de forma inmutable. Aceite, frenos, filtros, neumáticos, y baterías en un solo lugar.",
      icon: <FileClock className="w-8 h-8 text-brand-orange" />,
    },
    {
      title: "Alertas y Avisos Inteligentes",
      desc: "Recordatorios automáticos que calculan la fecha y kilometraje aproximado de tu próximo servicio para que nunca olvides un cambio.",
      icon: <BellRing className="w-8 h-8 text-brand-orange" />,
    },
    {
      title: "Para Conductores y Talleres",
      desc: "La app conecta al dueño del carro con el taller aliado. Tu mecánico sube la información técnica y tú la recibes en tiempo real.",
      icon: <Building2 className="w-8 h-8 text-brand-orange" />,
    },
    {
      title: "Control por Kilometraje y Fecha",
      desc: "Registra cada servicio según el kilometraje actual o la fecha estimada del calendario. La app calcula el desgaste real de forma precisa.",
      icon: <Milestone className="w-8 h-8 text-brand-orange" />,
    },
    {
      title: "Garaje Multivehículo",
      desc: "Agrega todos los carros de tu casa o flota de negocio en una sola cuenta. Administra el historial de cada uno de forma independiente.",
      icon: <CopyPlus className="w-8 h-8 text-brand-orange" />,
    },
    {
      title: "Acceso Rápido en Fosa/Revisión",
      desc: "Muestra tu historial digital al mecánico al momento de ingresar a fosa. Ahorra tiempo diagnosticando y evita duplicar gastos.",
      icon: <Zap className="w-8 h-8 text-brand-orange" />,
    },
  ];

  return (
    <section id="beneficios" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-3.5 py-1.5 rounded-full">
            Funcionalidades Premium
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-blue tracking-tight mt-4 mb-6 leading-tight">
            Todo el control automotriz, en tu bolsillo
          </h2>
          <p className="text-lg text-slate-600 font-light leading-relaxed">
            Hemos diseñado la herramienta definitiva para que cuidar el motor de tu carro sea sencillo, predecible y 100% digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {list.map((item, index) => (
            <div
              key={index}
              className="group glass-card hover:bg-white hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-orange/10 hover:border-brand-orange/40 rounded-2xl p-8 relative overflow-hidden transition-all duration-400"
            >
              {/* Subtle top decoration */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-orange/0 via-brand-orange/0 to-brand-orange/0 group-hover:from-brand-orange/40 group-hover:to-brand-blue/30 transition-all duration-500"></div>

              {/* Icon Container with subtle animation */}
              <div className="mb-6 bg-slate-50 w-16 h-16 rounded-xl flex items-center justify-center border border-slate-100 group-hover:scale-110 group-hover:bg-brand-orange/5 transition-transform duration-300">
                {item.icon}
              </div>

              <h3 className="text-lg font-bold text-brand-blue mb-3 group-hover:text-brand-orange transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-slate-600 font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
