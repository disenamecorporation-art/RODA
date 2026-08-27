import { useState, useEffect } from "react";
import { Car, Bell, FileText, Check, Shield, Award, Sparkles, Wrench } from "lucide-react";

export default function PhoneMockup() {
  const [activeScreen, setActiveScreen] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % 3);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const screens = [
    {
      title: "Mi Garaje",
      subtitle: "Tus vehículos bajo control",
      badge: "Al día",
      color: "bg-emerald-500",
      content: (
        <div className="space-y-4 animate-fade-in p-1">
          {/* Main Vehicle Card */}
          <div className="bg-white/90 rounded-2xl p-4 shadow-sm border border-slate-100">
            <div className="flex justify-between items-start mb-3">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Vehículo Principal</span>
                <h4 className="text-sm font-bold text-brand-blue">Toyota Corolla 2022</h4>
                <p className="text-[10px] text-slate-500">Placas: AB123CD • Caracas</p>
              </div>
              <span className="bg-brand-orange/10 text-brand-orange text-[9px] font-bold px-2 py-0.5 rounded-full">
                Urgente
              </span>
            </div>

            {/* Progress/Health Bar */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-[10px]">
                <span className="text-slate-500 font-medium">Aceite de Motor (15W-40)</span>
                <span className="text-brand-orange font-bold">Faltan 240 km</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-brand-orange h-full rounded-full" style={{ width: "92%" }} />
              </div>
            </div>
          </div>

          {/* Secondary Vehicle Card */}
          <div className="bg-white/80 rounded-2xl p-4 shadow-sm border border-slate-100/50">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="text-sm font-semibold text-slate-700">Chevrolet Tahoe 2018</h4>
                <p className="text-[10px] text-slate-400">Placas: XY987ZT • Valencia</p>
              </div>
              <span className="bg-emerald-100 text-emerald-800 text-[9px] font-bold px-2 py-0.5 rounded-full">
                Al día
              </span>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-slate-500 bg-emerald-50/50 p-2 rounded-xl border border-emerald-100/30">
              <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Próximo servicio: 12 de Octubre o 135,000 km</span>
            </div>
          </div>

          {/* Quick Action Button mock */}
          <div className="bg-brand-blue rounded-xl p-3 text-center text-white text-[11px] font-bold shadow-md shadow-brand-blue/20 flex items-center justify-center gap-1.5 cursor-pointer">
            <Wrench className="w-3.5 h-3.5" />
            Agenda un Servicio Rápido
          </div>
        </div>
      ),
    },
    {
      title: "Notificaciones",
      subtitle: "Recordatorios inteligentes",
      badge: "1 Alerta",
      color: "bg-brand-orange",
      content: (
        <div className="space-y-4 animate-fade-in p-1">
          {/* Simulated Push Notification floating atop */}
          <div className="bg-brand-blue text-white rounded-2xl p-4 shadow-xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/20 rounded-full blur-xl -mr-6 -mt-6"></div>
            
            <div className="flex items-center gap-2 mb-2 relative">
              <div className="bg-brand-orange p-1.5 rounded-lg">
                <Bell className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-wider font-bold text-brand-orange/90">RODA Alerta</span>
                <p className="text-[10px] text-white/85">Hace 2 minutos</p>
              </div>
            </div>
            <h4 className="text-xs font-bold mb-1 relative">¡Mantenimiento Requerido!</h4>
            <p className="text-[11px] text-slate-200 leading-relaxed mb-3 relative">
              Tu Toyota Corolla está a <strong>240 km</strong> del cambio de aceite recomendado por <strong>MultiServicios Altamira</strong>.
            </p>
            <div className="flex gap-2 relative">
              <button className="flex-1 bg-white text-brand-blue text-[10px] font-bold py-1.5 rounded-lg shadow-sm">
                Reservar Cita
              </button>
              <button className="flex-1 bg-brand-blue/30 text-white border border-white/20 text-[10px] font-medium py-1.5 rounded-lg">
                Posponer
              </button>
            </div>
          </div>

          {/* Simple card background */}
          <div className="bg-white/80 rounded-2xl p-4 shadow-sm border border-slate-100 text-center py-6">
            <Sparkles className="w-6 h-6 text-brand-orange mx-auto mb-2" />
            <p className="text-xs font-bold text-slate-700">Notificaciones 100% Automáticas</p>
            <p className="text-[10px] text-slate-500 mt-1">Sincronizadas con el millaje real reportado por tu taller aliado.</p>
          </div>
        </div>
      ),
    },
    {
      title: "Historial Digital",
      subtitle: "Trazabilidad garantizada",
      badge: "Verificado",
      color: "bg-brand-blue",
      content: (
        <div className="space-y-3.5 animate-fade-in p-1">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Servicios Recientes</div>
          
          {/* History item 1 */}
          <div className="bg-white/95 rounded-xl p-3 shadow-xs border border-slate-100 flex gap-3">
            <div className="bg-slate-100 p-2 rounded-xl text-brand-blue shrink-0 flex items-center justify-center h-10 w-10">
              <FileText className="w-5 h-5 text-brand-blue" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start">
                <h5 className="text-xs font-bold text-slate-800 truncate">Cambio de Aceite y Filtros</h5>
                <span className="text-[9px] text-slate-400">12 Ago 2026</span>
              </div>
              <p className="text-[10px] text-brand-orange font-semibold">Taller Aliado: CarExpress Chacao</p>
              <div className="flex items-center gap-1 mt-1 text-[9px] text-emerald-600 font-medium">
                <Check className="w-3 h-3" />
                <span>124,100 km • Garantía Activa</span>
              </div>
            </div>
          </div>

          {/* History item 2 */}
          <div className="bg-white/95 rounded-xl p-3 shadow-xs border border-slate-100 flex gap-3">
            <div className="bg-slate-100 p-2 rounded-xl text-brand-blue shrink-0 flex items-center justify-center h-10 w-10">
              <Award className="w-5 h-5 text-brand-blue" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start">
                <h5 className="text-xs font-bold text-slate-800 truncate">Revisión de Frenos y Bandas</h5>
                <span className="text-[9px] text-slate-400">18 Jul 2026</span>
              </div>
              <p className="text-[10px] text-slate-500">Taller Aliado: Frenos El Rosal</p>
              <div className="flex items-center gap-1 mt-1 text-[9px] text-slate-500">
                <Check className="w-3 h-3 text-emerald-500" />
                <span>Pastillas cambiadas • 121,500 km</span>
              </div>
            </div>
          </div>

          {/* Security stamp */}
          <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
            <Shield className="w-3.5 h-3.5 text-brand-blue shrink-0" />
            <span className="text-[9px] text-slate-500 leading-normal">
              Historial encriptado e inmutable. Respaldado digitalmente para mayor valor de reventa.
            </span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full max-w-[320px] mx-auto animate-float">
      {/* Decorative Glow Backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 to-brand-blue/30 rounded-[48px] blur-3xl transform -scale-95 translate-y-4"></div>

      {/* External Frame of Phone */}
      <div className="relative mx-auto w-full rounded-[40px] border-[10px] border-slate-900 bg-slate-900 shadow-2xl overflow-hidden aspect-[9/18.5] max-w-[300px]">
        {/* Dynamic Notch / Island */}
        <div className="absolute top-2.5 left-1/2 transform -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-center">
          <div className="w-2.5 h-2.5 bg-slate-900 rounded-full ml-auto mr-3 border border-slate-800/50"></div>
        </div>

        {/* Home Indicator bar */}
        <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-slate-700 rounded-full z-30"></div>

        {/* Screen Content Panel */}
        <div className="w-full h-full bg-slate-50 flex flex-col justify-between pt-9 pb-6 px-4 select-none">
          {/* Header Bar of Phone UI */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3">
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-extrabold text-brand-blue tracking-tight">RODA</span>
              <span className="text-[8px] px-1 py-0.2 bg-brand-orange/10 text-brand-orange font-bold rounded-sm">VE 🇻🇪</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[9px] text-slate-400 font-medium">Sincronizado</span>
            </div>
          </div>

          {/* Main scrollable content frame */}
          <div className="flex-1 overflow-y-auto no-scrollbar py-0.5">
            {screens[activeScreen].content}
          </div>

          {/* Bottom Custom Navigation tabs */}
          <div className="border-t border-slate-100 pt-2.5 mt-2 flex items-center justify-around">
            <button
              onClick={() => setActiveScreen(0)}
              className={`flex flex-col items-center gap-1 transition-colors ${
                activeScreen === 0 ? "text-brand-orange" : "text-slate-400"
              }`}
            >
              <Car className="w-4 h-4" />
              <span className="text-[8px] font-bold">Garaje</span>
            </button>
            <button
              onClick={() => setActiveScreen(1)}
              className={`flex flex-col items-center gap-1 relative transition-colors ${
                activeScreen === 1 ? "text-brand-orange" : "text-slate-400"
              }`}
            >
              <Bell className="w-4 h-4" />
              <span className="text-[8px] font-bold">Alertas</span>
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-brand-orange"></span>
            </button>
            <button
              onClick={() => setActiveScreen(2)}
              className={`flex flex-col items-center gap-1 transition-colors ${
                activeScreen === 2 ? "text-brand-orange" : "text-slate-400"
              }`}
            >
              <FileText className="w-4 h-4" />
              <span className="text-[8px] font-bold">Historial</span>
            </button>
          </div>
        </div>
      </div>

      {/* Screen Selector Dots (Underneath) */}
      <div className="flex justify-center items-center gap-3.5 mt-6 relative z-10">
        {screens.map((screen, idx) => (
          <button
            key={idx}
            onClick={() => setActiveScreen(idx)}
            className={`transition-all duration-300 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold ${
              activeScreen === idx
                ? "bg-brand-blue text-white shadow-md shadow-brand-blue/15 scale-105"
                : "bg-slate-100 text-slate-500 hover:bg-slate-200"
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${screen.color}`}></span>
            {screen.title}
          </button>
        ))}
      </div>
    </div>
  );
}
