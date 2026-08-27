import { useState, useEffect, useRef } from "react";
import { Hammer, CheckCircle, Smartphone, ThumbsUp } from "lucide-react";

export default function Stats() {
  const [talleres, setTalleres] = useState(0);
  const [conductores, setConductores] = useState(0);
  const [recordatorios, setRecordatorios] = useState(0);
  const [mantenimientos, setMantenimientos] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    // Animate Talleres: 0 to 500
    let tStart = 0;
    const tEnd = 500;
    const tDuration = 2000;
    const tStepTime = Math.abs(Math.floor(tDuration / tEnd));
    const tTimer = setInterval(() => {
      tStart += 5;
      if (tStart >= tEnd) {
        setTalleres(tEnd);
        clearInterval(tTimer);
      } else {
        setTalleres(tStart);
      }
    }, tStepTime * 5);

    // Animate Conductores: 0 to 15000
    let cStart = 0;
    const cEnd = 15000;
    const cStep = 150;
    const cTimer = setInterval(() => {
      cStart += cStep;
      if (cStart >= cEnd) {
        setConductores(cEnd);
        clearInterval(cTimer);
      } else {
        setConductores(cStart);
      }
    }, 15);

    // Animate Recordatorios: 0 to 99.4
    let rStart = 0;
    const rEnd = 99.4;
    const rTimer = setInterval(() => {
      rStart += 1.1;
      if (rStart >= rEnd) {
        setRecordatorios(rEnd);
        clearInterval(rTimer);
      } else {
        setRecordatorios(parseFloat(rStart.toFixed(1)));
      }
    }, 20);

    // Animate Mantenimientos: 0 to 12000
    let mStart = 0;
    const mEnd = 12000;
    const mStep = 120;
    const mTimer = setInterval(() => {
      mStart += mStep;
      if (mStart >= mEnd) {
        setMantenimientos(mEnd);
        clearInterval(mTimer);
      } else {
        setMantenimientos(mStart);
      }
    }, 15);

    return () => {
      clearInterval(tTimer);
      clearInterval(cTimer);
      clearInterval(rTimer);
      clearInterval(mTimer);
    };
  }, [hasAnimated]);

  const statsList = [
    {
      label: "Talleres Aliados",
      value: `+${talleres.toLocaleString()}`,
      desc: "Distribuidos en Caracas, Maracaibo, Valencia, Barquisimeto y más ciudades.",
      icon: <Hammer className="w-5 h-5 text-brand-orange" />,
    },
    {
      label: "Conductores Activos",
      value: `+${conductores.toLocaleString()}`,
      desc: "Conductores que ya digitalizaron el garaje de su hogar.",
      icon: <Smartphone className="w-5 h-5 text-brand-orange" />,
    },
    {
      label: "Efectividad de Alertas",
      value: `${recordatorios}%`,
      desc: "Recordatorios recibidos a tiempo antes de vencer la fecha límite.",
      icon: <CheckCircle className="w-5 h-5 text-brand-orange" />,
    },
    {
      label: "Servicios Registrados",
      value: `+${mantenimientos.toLocaleString()}`,
      desc: "Historiales detallados de cambios de aceite, pastillas y repuestos.",
      icon: <ThumbsUp className="w-5 h-5 text-brand-orange" />,
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="bg-brand-blue py-16 text-white relative overflow-hidden"
    >
      {/* Visual glowing accents inside dark section */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {statsList.map((stat, index) => (
            <div
              key={index}
              className="glass-card-dark bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="mx-auto w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/15 mb-4">
                {stat.icon}
              </div>
              <span className="block text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2 font-mono">
                {stat.value}
              </span>
              <span className="block text-sm font-bold text-brand-orange uppercase tracking-wider mb-2">
                {stat.label}
              </span>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
