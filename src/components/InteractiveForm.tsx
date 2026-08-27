import { useState, useRef, useEffect, FormEvent, ChangeEvent } from "react";
import { Send, CheckCircle2, AlertCircle, Building, MapPin, Phone, Mail, User, ShieldCheck } from "lucide-react";

interface InteractiveFormProps {
  preselectTaller: boolean;
  onClearPreselect: () => void;
}

export default function InteractiveForm({ preselectTaller, onClearPreselect }: InteractiveFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    workshopName: "",
    phone: "",
    email: "",
    city: "",
    message: "",
    roleType: "conductor", // 'conductor' | 'taller'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const formRef = useRef<HTMLFormElement>(null);

  // Sync preselect status from workshops section
  useEffect(() => {
    if (preselectTaller) {
      setFormData((prev) => ({ ...prev, roleType: "taller" }));
      onClearPreselect();
    }
  }, [preselectTaller, onClearPreselect]);

  const citiesInVenezuela = [
    "Caracas",
    "Maracaibo",
    "Valencia",
    "Barquisimeto",
    "Maracay",
    "Ciudad Guayana",
    "San Cristóbal",
    "Mérida",
    "Barcelona / Puerto La Cruz",
    "Maturín",
    "Porlamar (Margarita)",
    "Coro / Punto Fijo",
    "Otra ciudad de Venezuela",
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Simple validations
    if (!formData.name.trim()) {
      setErrorMessage("Por favor, ingresa tu nombre completo.");
      return;
    }
    if (formData.roleType === "taller" && !formData.workshopName.trim()) {
      setErrorMessage("Por favor, ingresa el nombre de tu local o taller.");
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMessage("Por favor, ingresa un número de teléfono de contacto.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Por favor, ingresa un correo electrónico válido.");
      return;
    }
    if (!formData.city) {
      setErrorMessage("Por favor, selecciona una ciudad de Venezuela.");
      return;
    }

    // Trigger fake loading
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form
      setFormData({
        name: "",
        workshopName: "",
        phone: "",
        email: "",
        city: "",
        message: "",
        roleType: "conductor",
      });
    }, 2000);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contacto" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative colored spots */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-3.5 py-1.5 rounded-full">
            ¿Quieres Sumarte?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-blue tracking-tight mt-4 mb-6 leading-tight">
            Ponte en contacto con RODA
          </h2>
          <p className="text-lg text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
            ¿Eres conductor o propietario de un taller aliado? Cuéntanos tus requerimientos y nuestro equipo te responderá de inmediato.
          </p>
        </div>

        {/* Success Alert */}
        {submitSuccess ? (
          <div className="glass-light border border-emerald-500/30 p-8 md:p-12 rounded-3xl text-center shadow-2xl animate-fade-in relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[5px] bg-emerald-500"></div>
            <div className="mx-auto w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-emerald-500 animate-bounce" />
            </div>
            <h3 className="text-2xl font-bold text-brand-blue mb-3">
              ¡Mensaje enviado exitosamente!
            </h3>
            <p className="text-slate-600 font-light max-w-lg mx-auto mb-8 leading-relaxed">
              Gracias por interesarte en RODA. Nuestro equipo de soporte comercial en Venezuela se comunicará contigo vía WhatsApp o correo electrónico en menos de 24 horas hábiles.
            </p>
            <button
              onClick={() => setSubmitSuccess(false)}
              className="px-6 py-2.5 bg-brand-blue text-white font-semibold text-xs tracking-wider uppercase rounded-full shadow-lg hover:bg-brand-orange hover:shadow-brand-orange/20 transition-all duration-300"
            >
              Enviar otro mensaje
            </button>
          </div>
        ) : (
          /* Contact Glass Box Form */
          <div className="glass-light rounded-3xl p-8 md:p-12 border border-white/60 shadow-2xl shadow-brand-blue/5 relative">
            {/* Form Role Selector */}
            <div className="flex gap-4 mb-8 p-1.5 bg-slate-100/80 rounded-2xl border border-slate-200/50">
              <button
                type="button"
                onClick={() => setFormData((prev) => ({ ...prev, roleType: "conductor" }))}
                className={`flex-1 py-3 text-xs md:text-sm font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
                  formData.roleType === "conductor"
                    ? "bg-brand-blue text-white shadow-md"
                    : "text-slate-600 hover:bg-slate-200/50"
                }`}
              >
                <User className="w-4 h-4" />
                Soy Conductor
              </button>
              <button
                type="button"
                onClick={() => setFormData((prev) => ({ ...prev, roleType: "taller" }))}
                className={`flex-1 py-3 text-xs md:text-sm font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
                  formData.roleType === "taller"
                    ? "bg-brand-orange text-white shadow-md"
                    : "text-slate-600 hover:bg-slate-200/50"
                }`}
                id="form-btn-taller"
              >
                <Building className="w-4 h-4" />
                Soy Dueño de Taller
              </button>
            </div>

            {errorMessage && (
              <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-xs flex items-center gap-2 animate-fade-in">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-bold text-brand-blue uppercase tracking-wider">
                    Nombre Completo *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Ej. Juan Pérez"
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl text-sm glass-input text-slate-800 font-medium placeholder-slate-400 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Optional Workshop Name */}
                {formData.roleType === "taller" ? (
                  <div className="space-y-2 animate-fade-in">
                    <label htmlFor="workshopName" className="block text-xs font-bold text-brand-blue uppercase tracking-wider">
                      Nombre del Taller / Local *
                    </label>
                    <div className="relative">
                      <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        id="workshopName"
                        name="workshopName"
                        required
                        value={formData.workshopName}
                        onChange={handleInputChange}
                        placeholder="Ej. Lubricentro Altamira C.A."
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl text-sm glass-input text-slate-800 font-medium placeholder-slate-400 focus:outline-none"
                      />
                    </div>
                  </div>
                ) : (
                  /* Phone number as fallback grid item if single */
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-xs font-bold text-brand-blue uppercase tracking-wider">
                      Número de Teléfono *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Ej. 0412-1234567"
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl text-sm glass-input text-slate-800 font-medium placeholder-slate-400 focus:outline-none"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Render Phone separately if Workshop role is active */}
                {formData.roleType === "taller" && (
                  <div className="space-y-2 animate-fade-in">
                    <label htmlFor="phone" className="block text-xs font-bold text-brand-blue uppercase tracking-wider">
                      Número de Teléfono *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Ej. 0412-1234567"
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl text-sm glass-input text-slate-800 font-medium placeholder-slate-400 focus:outline-none"
                      />
                    </div>
                  </div>
                )}

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-bold text-brand-blue uppercase tracking-wider">
                    Correo Electrónico *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Ej. juan@gmail.com"
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl text-sm glass-input text-slate-800 font-medium placeholder-slate-400 focus:outline-none"
                    />
                  </div>
                </div>

                {/* City select */}
                <div className="space-y-2">
                  <label htmlFor="city" className="block text-xs font-bold text-brand-blue uppercase tracking-wider">
                    Ciudad en Venezuela *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    <select
                      id="city"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl text-sm glass-input text-slate-700 font-medium focus:outline-none appearance-none"
                    >
                      <option value="">-- Selecciona una Ciudad --</option>
                      {citiesInVenezuela.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-bold text-brand-blue uppercase tracking-wider">
                  Tu Mensaje o Dudas
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={
                    formData.roleType === "taller"
                      ? "Cuéntanos sobre tu local (servicios que prestas, cantidad aproximada de clientes al mes, etc.)"
                      : "Escribe tus dudas, sugerencias o comentarios acerca de la aplicación móvil de RODA."
                  }
                  className="w-full px-4 py-3.5 rounded-xl text-sm glass-input text-slate-800 font-medium placeholder-slate-400 focus:outline-none resize-none"
                ></textarea>
              </div>

              {/* Secure terms check */}
              <div className="flex items-center gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-200/50">
                <ShieldCheck className="w-5 h-5 text-brand-orange shrink-0" />
                <p className="text-[10px] text-slate-500 leading-normal">
                  Respetamos tu privacidad. Tus datos serán tratados estrictamente para la afiliación comercial a RODA y nunca serán vendidos a terceros.
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`shine-btn w-full py-4 rounded-xl font-bold uppercase tracking-widest text-xs shadow-lg flex items-center justify-center gap-2.5 transition-all duration-300 ${
                  isSubmitting
                    ? "bg-slate-400 text-white cursor-wait"
                    : formData.roleType === "taller"
                    ? "bg-brand-orange text-white shadow-brand-orange/20 hover:shadow-brand-orange/40"
                    : "bg-brand-blue text-white shadow-brand-blue/20 hover:shadow-brand-blue/40"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Enviando información...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {formData.roleType === "taller" ? "Enviar solicitud de afiliación" : "Enviar consulta comercial"}
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
