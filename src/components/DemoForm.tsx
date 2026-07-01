"use client";

import { useState } from "react";
import { ShieldCheck, Loader2 } from "lucide-react";

export default function DemoForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    cargo: "",
    industria: "",
    colaboradores: "",
    necesidad: "",
    presupuesto: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API request to backend
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (success) {
    return (
      <div className="bg-[#111827] border border-[#2563EB] rounded p-8 text-center max-w-xl mx-auto my-12">
        <div className="w-12 h-12 bg-[#2563EB]/10 border border-[#2563EB] rounded-full flex items-center justify-center mx-auto mb-4">
          <ShieldCheck className="w-6 h-6 text-[#2563EB]" />
        </div>
        <h3 className="text-xl font-display font-bold text-[#F9FAFB]">
          Solicitud de Evaluación Registrada
        </h3>
        <p className="text-xs text-[#F9FAFB]/70 mt-2 font-mono">
          REF: VAL-VAL-{Math.floor(100000 + Math.random() * 900000)}
        </p>
        <p className="text-sm text-[#F9FAFB]/80 mt-4">
          Un ingeniero de infraestructura de Valcore analizará su solicitud e iniciará contacto en un lapso no mayor a 2 horas hábiles para coordinar la evaluación técnica.
        </p>
        <div className="mt-6">
          <button
            onClick={() => setSuccess(false)}
            className="text-xs font-mono text-[#2563EB] hover:underline"
          >
            Registrar otra solicitud
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#111827] border border-[#374151] rounded p-6 sm:p-8 max-w-2xl mx-auto">
      <div className="border-b border-[#374151] pb-4 mb-6">
        <h2 className="text-xl font-display font-bold text-[#F9FAFB]">
          Inicie una evaluación técnica
        </h2>
        <p className="text-xs text-[#F9FAFB]/60 mt-1">
          Complete el formulario para que nuestro equipo de ingeniería evalúe los requerimientos y de viabilidad a su implementación.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Nombre */}
        <div>
          <label htmlFor="nombre" className="block text-[11px] font-mono text-[#F9FAFB]/60 uppercase mb-1">
            Nombre Completo *
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Ej. Ing. Carlos Mendoza"
            className="w-full bg-[#0A0F14] border border-[#374151] rounded px-3 py-2 text-sm text-[#F9FAFB] focus:border-[#2563EB] focus:outline-none placeholder-[#F9FAFB]/20 font-sans"
          />
        </div>

        {/* Empresa */}
        <div>
          <label htmlFor="empresa" className="block text-[11px] font-mono text-[#F9FAFB]/60 uppercase mb-1">
            Nombre de la Organización *
          </label>
          <input
            type="text"
            id="empresa"
            name="empresa"
            required
            value={formData.empresa}
            onChange={handleChange}
            placeholder="Ej. Consorcio Industrial S.A."
            className="w-full bg-[#0A0F14] border border-[#374151] rounded px-3 py-2 text-sm text-[#F9FAFB] focus:border-[#2563EB] focus:outline-none placeholder-[#F9FAFB]/20 font-sans"
          />
        </div>

        {/* Cargo */}
        <div>
          <label htmlFor="cargo" className="block text-[11px] font-mono text-[#F9FAFB]/60 uppercase mb-1">
            Cargo / Rol Técnico *
          </label>
          <input
            type="text"
            id="cargo"
            name="cargo"
            required
            value={formData.cargo}
            onChange={handleChange}
            placeholder="Ej. Director de TI / CTO"
            className="w-full bg-[#0A0F14] border border-[#374151] rounded px-3 py-2 text-sm text-[#F9FAFB] focus:border-[#2563EB] focus:outline-none placeholder-[#F9FAFB]/20 font-sans"
          />
        </div>

        {/* Industria */}
        <div>
          <label htmlFor="industria" className="block text-[11px] font-mono text-[#F9FAFB]/60 uppercase mb-1">
            Industria *
          </label>
          <select
            id="industria"
            name="industria"
            required
            value={formData.industria}
            onChange={handleChange}
            className="w-full bg-[#0A0F14] border border-[#374151] rounded px-3 py-2 text-sm text-[#F9FAFB] focus:border-[#2563EB] focus:outline-none font-sans"
          >
            <option value="">Seleccione una industria</option>
            <option value="gobierno">Gobierno y Sector Público</option>
            <option value="educacion">Educación y Universidades</option>
            <option value="hoteles">Hoteles y Hospitalidad</option>
            <option value="restaurantes">Restaurantes y Alimentos</option>
            <option value="salud">Salud y Laboratorios</option>
            <option value="comercio">Comercio y Retail</option>
            <option value="asociaciones">Asociaciones y Cámaras</option>
          </select>
        </div>

        {/* Colaboradores */}
        <div>
          <label htmlFor="colaboradores" className="block text-[11px] font-mono text-[#F9FAFB]/60 uppercase mb-1">
            Número de Colaboradores *
          </label>
          <select
            id="colaboradores"
            name="colaboradores"
            required
            value={formData.colaboradores}
            onChange={handleChange}
            className="w-full bg-[#0A0F14] border border-[#374151] rounded px-3 py-2 text-sm text-[#F9FAFB] focus:border-[#2563EB] focus:outline-none font-sans"
          >
            <option value="">Seleccione rango</option>
            <option value="1-50">1 - 50 colaboradores</option>
            <option value="51-250">51 - 250 colaboradores</option>
            <option value="251-1000">251 - 1,000 colaboradores</option>
            <option value="1000+">Más de 1,000 colaboradores</option>
          </select>
        </div>

        {/* Presupuesto */}
        <div>
          <label htmlFor="presupuesto" className="block text-[11px] font-mono text-[#F9FAFB]/60 uppercase mb-1">
            Presupuesto Anual Estimado *
          </label>
          <select
            id="presupuesto"
            name="presupuesto"
            required
            value={formData.presupuesto}
            onChange={handleChange}
            className="w-full bg-[#0A0F14] border border-[#374151] rounded px-3 py-2 text-sm text-[#F9FAFB] focus:border-[#2563EB] focus:outline-none font-sans"
          >
            <option value="">Seleccione rango presupuestal</option>
            <option value="basico">Menos de $10,000 USD</option>
            <option value="medio">$10,000 - $50,000 USD</option>
            <option value="corporativo">$50,000 - $100,000 USD</option>
            <option value="enterprise">Más de $100,000 USD</option>
          </select>
        </div>
      </div>

      {/* Necesidad Principal */}
      <div className="mt-4">
        <label htmlFor="necesidad" className="block text-[11px] font-mono text-[#F9FAFB]/60 uppercase mb-1">
          Necesidad Tecnológica Principal *
        </label>
        <select
          id="necesidad"
          name="necesidad"
          required
          value={formData.necesidad}
          onChange={handleChange}
          className="w-full bg-[#0A0F14] border border-[#374151] rounded px-3 py-2 text-sm text-[#F9FAFB] focus:border-[#2563EB] focus:outline-none font-sans"
        >
          <option value="">Seleccione la necesidad principal</option>
          <option value="crm">Implementación de CRM Corporativo</option>
          <option value="erp">Sustitución o Migración de ERP</option>
          <option value="pos">Punto de Venta Multi-sucursal (POS)</option>
          <option value="bi">Business Intelligence y Tableros Operativos</option>
          <option value="sistemas">Automatización con Sistemas Especializados</option>
          <option value="infraestructura">Consultoría de Infraestructura Digital</option>
        </select>
      </div>

      {/* Mensaje */}
      <div className="mt-4">
        <label htmlFor="mensaje" className="block text-[11px] font-mono text-[#F9FAFB]/60 uppercase mb-1">
          Descripción de requerimientos adicionales
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={3}
          value={formData.mensaje}
          onChange={handleChange}
          placeholder="Detalle los retos de su organización y flujos críticos..."
          className="w-full bg-[#0A0F14] border border-[#374151] rounded px-3 py-2 text-sm text-[#F9FAFB] focus:border-[#2563EB] focus:outline-none placeholder-[#F9FAFB]/20 font-sans resize-none"
        ></textarea>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center text-[10px] font-mono text-[#F9FAFB]/40">
          <span className="w-2 h-2 bg-[#2563EB] rounded-full mr-2"></span>
          ENCRIPTACIÓN SSL ACTIVA
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-[#2563EB] hover:bg-[#2563EB]/90 text-white font-mono font-bold text-xs uppercase px-5 py-2.5 rounded flex items-center space-x-2 transition-all disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 className="w-3.5 h-3.5 animate-spin mr-1.5" />
              PROCESANDO...
            </>
          ) : (
            "Solicitar evaluación técnica"
          )}
        </button>
      </div>
    </form>
  );
}
