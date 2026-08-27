import { Star, Quote, MapPin } from "lucide-react";

export default function Testimonials() {
  const list = [
    {
      name: "Carlos Mendoza",
      role: "Propietario de Toyota Fortuner",
      city: "Caracas",
      quote: "Llevo el control de mi camioneta y la de mi esposa en RODA. Antes perdía la calcomanía que ponía el taller y me pasaba de kilometraje. Ahora la app me avisa 400 kilómetros antes. ¡Es una maravilla!",
      rating: 5,
    },
    {
      name: "Ing. Alejandro Rivas",
      role: "Director de AutoServicios El Rosal",
      city: "Valencia, Edo. Carabobo",
      quote: "Afiliar nuestro taller a RODA fue la mejor decisión comercial del año. Digitalizamos el historial técnico de los clientes y, gracias a los avisos automáticos de la app, el 78% de ellos vuelve por su cambio de aceite exacto.",
      rating: 5,
    },
    {
      name: "María Fernanda Pérez",
      role: "Propietaria de Chevrolet Spark",
      city: "Barquisimeto",
      quote: "Cuando llevé mi carro a revisión en fosa, el mecánico escaneó el código de mi RODA y vio al instante qué marca de aceite y qué filtros le habían puesto en Caracas. Me ahorró un montón de explicaciones técnicas.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonios" className="py-24 bg-white relative overflow-hidden">
      {/* Visual top border line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-slate-100"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-3.5 py-1.5 rounded-full">
            Opiniones de Clientes
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-blue tracking-tight mt-4 mb-6 leading-tight">
            ¿Qué dicen en Venezuela sobre RODA?
          </h2>
          <p className="text-lg text-slate-600 font-light leading-relaxed">
            Conductores y talleres de todo el país ya experimentan la tranquilidad de llevar el mantenimiento vehicular en formato digital.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {list.map((item, index) => (
            <div
              key={index}
              className="glass-card hover:bg-slate-50/50 hover:border-brand-blue/20 rounded-2xl p-8 relative flex flex-col justify-between transition-all duration-300"
            >
              <div>
                {/* Five star ratings */}
                <div className="flex gap-1 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 fill-brand-orange text-brand-orange" />
                  ))}
                </div>

                {/* Quote Icon decorative */}
                <Quote className="w-8 h-8 text-brand-orange/10 absolute top-8 right-8" />

                <p className="text-sm md:text-base text-slate-600 font-light italic leading-relaxed mb-8">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Row */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 bg-brand-blue/10 rounded-full flex items-center justify-center font-bold text-brand-blue">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-blue leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-slate-400 font-medium">
                    {item.role}
                  </p>
                  <div className="flex items-center gap-1 text-[10px] text-slate-500 mt-0.5">
                    <MapPin className="w-3 h-3 text-brand-orange" />
                    <span>{item.city}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
