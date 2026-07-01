/**
 * @file evaluation.ts
 * @description Esquema de validación estricta para el formulario de evaluación técnica de Valcore.
 * @see STUDIO KUALI PROTOCOL v3.0 (Regla 5: Inyección Segura y Validación)
 */

export interface EvaluationFormData {
  fullName: string
  organizationName: string
  roleTitle: string
  industry: 'gobierno' | 'educacion' | 'hoteles' | 'restaurantes' | 'salud' | 'comercio' | 'asociaciones'
  employeeCount: number
  primaryNeed: string
  estimatedBudgetRange: 'tier_1' | 'tier_2' | 'tier_3' | 'tier_4'
  technicalMessage: string
}

/**
 * @description Valida los datos del lead corporativo antes del envío al endpoint seguro.
 */
export function validateEvaluationForm(data: Partial<EvaluationFormData>): { success: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {}

  if (!data.fullName || data.fullName.trim().length < 3) {
    errors.fullName = "REQUERIDO: MÍNIMO 3 CARACTERES"
  }
  if (!data.organizationName || data.organizationName.trim().length < 2) {
    errors.organizationName = "REQUERIDO: IDENTIFICACIÓN DE ORGANIZACIÓN VÁLIDA"
  }
  if (!data.roleTitle || data.roleTitle.trim().length < 2) {
    errors.roleTitle = "REQUERIDO: CARGO INSTITUCIONAL EXPLÍCITO"
  }
  if (!data.industry) {
    errors.industry = "REQUERIDO: SELECCIÓN DE SECTOR INDUSTRIAL"
  }
  if (!data.employeeCount || data.employeeCount <= 0) {
    errors.employeeCount = "REQUERIDO: MÉTRICA DE COLABORADORES REAL"
  }
  if (!data.primaryNeed || data.primaryNeed.trim().length < 10) {
    errors.primaryNeed = "REQUERIDO: DESCRIPCIÓN OPERATIVA MÍNIMA DE 10 CARACTERES"
  }
  if (!data.estimatedBudgetRange) {
    errors.estimatedBudgetRange = "REQUERIDO: ASIGNACIÓN DE RANGO PRESUPUESTARIO"
  }

  return {
    success: Object.keys(errors).length === 0,
    errors
  }
}
