import { X, Check, Car, AlertTriangle, Sparkles, Smile } from "lucide-react";

export default function Comparison() {
  const painPoints = [
    {
      text: "La típica calcomanía en el parabrisas se borra, se despega o la olvidas por completo.",
      icon: <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />,
    },
    {
      text: "Papeles y facturas de cambios de aceite o repuestos perdidos en la guantera.",
      icon: <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />,
    },
    {
      text: "No sabes con certeza qué marca o viscosidad de aceite o qué pastillas de freno te colocaron en la última visita.",
      icon: <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />,
    },
    {
      text: "Los talleres no te avisan cuándo te toca volver, perdiendo recurrencia y clientes.",
      icon: <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />,
    },
    {
      text: "Sin certeza de la garantía o del millaje real de las partes de repuesto de tu carro.",
      icon: <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />,
    },
  ];

  const solutions = [
    {
      text: "Notificaciones directas a tu celular basadas en tiempo y kilometraje real de tu carro.",
      icon: <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />,
    },
    {
      text: "Historial de servicios digital, seguro e inmutable, disponible desde cualquier lugar de Venezuela.",
      icon: <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />,
    },
    {
      text: "Ficha técnica completa de repuestos, lubricantes y revisiones guardadas por tu taller de confianza.",
      icon: <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />,
    },
    {
      text: "Los talleres se conectan directo con los clientes enviando avisos de retorno automáticos en la app.",
      icon: <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />,
    },
    {
      text: "Trazabilidad blindada de repuestos e historial verificado para proteger el valor de reventa de tu carro.",
      icon: <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />,
    },
  ];

  return (
    <section id="comparacion" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl -ml-24 -mt-24"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl -mr-32 -mb-32"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-3.5 py-1.5 rounded-full">
            La Evolución del Mantenimiento
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-blue tracking-tight mt-4 mb-6 leading-tight">
            ¿Cómo cuidas tu carro hoy?
          </h2>
          <p className="text-lg text-slate-600 font-light leading-relaxed">
            Olvídate de la desorganización de los talleres tradicionales y da el salto al control total digital en Venezuela.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Sin RODA Card */}
          <div className="glass-card-dark bg-white rounded-2xl p-8 md:p-10 border border-slate-200 shadow-xl shadow-slate-100 flex flex-col justify-between hover:border-red-200/50 hover:shadow-red-500/5 transition-all duration-300">
            <div>
              <div className="flex items-center gap-3.5 mb-8 border-b border-slate-100 pb-5">
                <div className="bg-red-50 p-3 rounded-xl">
                  <X className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">El Método de siempre</span>
                  <h3 className="text-xl font-bold text-slate-800">Mantenimiento tradicional</h3>
                </div>
              </div>

              <ul className="space-y-6">
                {painPoints.map((item, index) => (
                  <li key={index} className="flex gap-4">
                    {item.icon}
                    <span className="text-sm md:text-base text-slate-600 font-light leading-relaxed">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 bg-slate-100/50 rounded-xl p-4 flex items-center gap-3 border border-slate-100">
              <span className="text-2xl">⚠️</span>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                El descuido por falta de recordatorios incrementa el riesgo de fallas costosas de motor y transmisión en más del 65%.
              </p>
            </div>
          </div>

          {/* Con RODA Card */}
          <div className="bg-brand-blue rounded-2xl p-8 md:p-10 text-white relative overflow-hidden flex flex-col justify-between hover:shadow-brand-blue/30 transition-all duration-300 shadow-2xl">
            {/* Ambient gradients */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl -mr-20 -mt-20"></div>

            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-8">
                <div className="flex items-center gap-3.5">
                  <div className="bg-brand-orange/20 p-3 rounded-xl border border-brand-orange/30">
                    <Sparkles className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-brand-orange uppercase tracking-wider">El Estilo Inteligente</span>
                    <h3 className="text-xl font-bold text-white">Conectado con RODA</h3>
                  </div>
                </div>
                <span className="hidden sm:inline-block bg-brand-orange text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  Recomendado
                </span>
              </div>

              <ul className="space-y-6">
                {solutions.map((item, index) => (
                  <li key={index} className="flex gap-4">
                    <div className="bg-white/10 p-1 rounded-full shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-sm md:text-base text-slate-100 font-light leading-relaxed">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 bg-white/10 rounded-xl p-4 flex items-center gap-3 border border-white/10 backdrop-blur-md relative z-10">
              <Smile className="w-6 h-6 text-brand-orange shrink-0" />
              <p className="text-xs text-slate-200 font-medium leading-relaxed">
                Con RODA, tu carro se mantiene siempre en óptimo estado físico, asegurando la paz mental en cada viaje por el país.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
