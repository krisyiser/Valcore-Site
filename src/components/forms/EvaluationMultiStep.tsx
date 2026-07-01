'use client'

import * as React from 'react'
import { InputCorporate } from '../ui/InputCorporate'
import { ButtonCorporate } from '../ui/ButtonCorporate'
import { EvaluationFormData, validateEvaluationForm } from '../../config/schemas/evaluation'

/**
 * @description Maneja el flujo secuencial de pantallas para la captura estructurada de leads de infraestructura sin recargas de página.
 */
export const EvaluationMultiStep: React.FC = () => {
  const [step, setStep] = React.useState<number>(1)
  const [formData, setFormData] = React.useState<Partial<EvaluationFormData>>({
    fullName: '',
    organizationName: '',
    roleTitle: '',
    industry: undefined,
    employeeCount: 0,
    primaryNeed: '',
    estimatedBudgetRange: undefined,
    technicalMessage: ''
  })
  const [errors, setErrors] = React.useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false)
  const [isCompleted, setIsCompleted] = React.useState<boolean>(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'employeeCount' ? parseInt(value, 10) || 0 : value
    }))
    if (errors[name]) {
      setErrors(prev => {
        const copy = { ...prev }
        delete copy[name]
        return copy
      })
    }
  }

  const navigateStep = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      const { errors: validationErrors } = validateEvaluationForm(formData)
      
      // Validación parcial por steps jerárquicos
      if (step === 1 && (validationErrors.fullName || validationErrors.organizationName || validationErrors.roleTitle)) {
        setErrors(validationErrors)
        return
      }
      if (step === 2 && (validationErrors.industry || validationErrors.employeeCount || validationErrors.estimatedBudgetRange)) {
        setErrors(validationErrors)
        return
      }
      setStep(prev => prev + 1)
    } else {
      setStep(prev => prev - 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const { success, errors: validationErrors } = validateEvaluationForm(formData)
    if (!success) {
      setErrors(validationErrors)
      return
    }

    setIsSubmitting(true)
    try {
      const response = await fetch('/api/evaluacion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      if (response.ok) {
        setIsCompleted(true)
      } else {
        setErrors({ global: "FALLO EN EL PROCESAMIENTO DEL REQUERIMIENTO" })
      }
    } catch (err) {
      setErrors({ global: "ERROR DE CONEXIÓN CON EL SERVIDOR DE INFRAESTRUCTURA" })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isCompleted) {
    return (
      <div className="bg-white border border-[#059669] p-6 font-mono text-center max-w-xl mx-auto rounded-none">
        <h3 className="text-[#0F172A] font-display text-lg uppercase tracking-wider mb-2">SISTEMA RECEPTOR: REQUERIMIENTO ASIGNADO</h3>
        <p className="text-sm text-[#334155] font-sans mb-4">La solicitud de evaluación técnica ha sido procesada de manera exitosa y registrada en el backlog central.</p>
        <span className="text-xs text-[#059669] block font-mono">REF_ID: {Math.random().toString(36).substring(2, 10).toUpperCase()} — ESTATUS: COLA_DE_ASIGNACIÓN</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-[#E2E8F0] p-6 max-w-xl mx-auto rounded-none flex flex-col gap-6">
      {/* INDICADOR DE PASOS DENSOS */}
      <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3 font-mono text-xs">
        <span className="text-[#64748B]">CONSOLA DE EVALUACIÓN</span>
        <span className="text-[#2563EB] font-bold">Fase {step} / 3</span>
      </div>

      {step === 1 && (
        <div className="flex flex-col gap-4">
          <InputCorporate label="Nombre Completo del Solicitante" name="fullName" value={formData.fullName} onChange={handleInputChange} error={errors.fullName} />
          <InputCorporate label="Organización / Empresa" name="organizationName" value={formData.organizationName} onChange={handleInputChange} error={errors.organizationName} />
          <InputCorporate label="Cargo Institucional" name="roleTitle" value={formData.roleTitle} onChange={handleInputChange} error={errors.roleTitle} />
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col gap-4 font-mono">
          <div className="flex flex-col gap-1 w-full">
            <label className="text-[10px] uppercase tracking-widest text-[#64748B]">Sector Industrial</label>
            <select name="industry" value={formData.industry || ''} onChange={handleInputChange} className="bg-[#F8FAFC] border border-[#E2E8F0] px-3 py-1.5 font-sans text-sm text-[#0F172A] rounded-none focus:outline-none focus:border-[#2563EB]">
              <option value="" disabled>Seleccione una vertical organizativa...</option>
              <option value="gobierno">Gobierno Digital / Municipios</option>
              <option value="educacion">Instituciones Educativas</option>
              <option value="hoteles">Infraestructura Hotelera</option>
              <option value="restaurantes">Servicios Gastronómicos</option>
              <option value="salud">Clínicas y Laboratorios Médicos</option>
              <option value="comercio">Cadenas de Comercio y Farmacias</option>
              <option value="asociaciones">Cámaras y Asociaciones Civiles</option>
            </select>
            {errors.industry && <span className="text-[10px] text-[#D97706]">ERROR: {errors.industry}</span>}
          </div>

          <InputCorporate label="Número de Colaboradores Activos" type="number" name="employeeCount" value={formData.employeeCount || ''} onChange={handleInputChange} error={errors.employeeCount} />

          <div className="flex flex-col gap-1 w-full">
            <label className="text-[10px] uppercase tracking-widest text-[#64748B]">Rango Presupuestario Anual Estimado</label>
            <select name="estimatedBudgetRange" value={formData.estimatedBudgetRange || ''} onChange={handleInputChange} className="bg-[#F8FAFC] border border-[#E2E8F0] px-3 py-1.5 font-sans text-sm text-[#0F172A] rounded-none focus:outline-none focus:border-[#2563EB]">
              <option value="" disabled>Asigne capacidad financiera...</option>
              <option value="tier_1">Planes POS Individual / Entrada</option>
              <option value="tier_2">Soluciones Sectoriales / Medianas</option>
              <option value="tier_3">Núcleo ERP Integrado Empresarial</option>
              <option value="tier_4">Infraestructura Crítica Multi-sucursal</option>
            </select>
            {errors.estimatedBudgetRange && <span className="text-[10px] text-[#D97706]">ERROR: {errors.estimatedBudgetRange}</span>}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="flex flex-col gap-4 font-mono">
          <div className="flex flex-col gap-1 w-full">
            <label className="text-[10px] uppercase tracking-widest text-[#64748B]">Necesidad Operativa Principal</label>
            <textarea name="primaryNeed" value={formData.primaryNeed} onChange={handleInputChange} rows={3} className="bg-[#F8FAFC] border border-[#E2E8F0] px-3 py-1.5 font-sans text-sm text-[#0F172A] rounded-none focus:outline-none focus:border-[#2563EB] resize-none" placeholder="Describa los cuellos de botella operativos..." />
            {errors.primaryNeed && <span className="text-[10px] text-[#D97706]">ERROR: {errors.primaryNeed}</span>}
          </div>

          <div className="flex flex-col gap-1 w-full">
            <label className="text-[10px] uppercase tracking-widest text-[#64748B]">Especificaciones Técnicas Adicionales (Opcional)</label>
            <textarea name="technicalMessage" value={formData.technicalMessage} rows={2} className="bg-[#F8FAFC] border border-[#E2E8F0] px-3 py-1.5 font-sans text-sm text-[#0F172A] rounded-none focus:outline-none focus:border-[#2563EB] resize-none" placeholder="Protocolos requeridos, migraciones de bases de datos antiguas..." />
          </div>
        </div>
      )}

      {errors.global && <div className="text-xs text-[#D97706] font-mono font-bold">{`ALERTA: ${errors.global}`}</div>}

      {/* BOTONES DE NAVEGACIÓN MECÁNICA */}
      <div className="flex items-center justify-end gap-3 border-t border-[#E2E8F0] pt-4">
        {step > 1 && (
          <ButtonCorporate type="button" variant="secondary" size="sm" onClick={() => navigateStep('prev')} disabled={isSubmitting}>
            Regresar
          </ButtonCorporate>
        )}
        {step < 3 ? (
          <ButtonCorporate type="button" variant="primary" size="sm" onClick={() => navigateStep('next')}>
            Siguiente Fase
          </ButtonCorporate>
        ) : (
          <ButtonCorporate type="submit" variant="primary" size="sm" disabled={isSubmitting}>
            {isSubmitting ? 'Procesando...' : 'Finalizar Evaluación'}
          </ButtonCorporate>
        )}
      </div>
    </form>
  )
}
