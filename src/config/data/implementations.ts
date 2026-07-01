/**
 * @file implementations.ts
 * @description Repositorio inmutable de auditorías de implementación y casos de éxito de infraestructura digital.
 * @see STUDIO KUALI PROTOCOL v3.0 (Regla 6: Políticas de Autenticidad)
 */

export interface ImplementationCase {
  id: string
  organizationName: string
  industry: string
  initialSituation: string
  engineeringDeployment: string
  deployedModules: string[]
  metrics: {
    label: string
    value: string
    code: string
  }[]
}

export const IMPLEMENTATIONS_REGISTRY: ImplementationCase[] = [
  {
    id: "imp-0102-pza",
    organizationName: "Consorcio Farmacéutico de la Región Norte",
    industry: "Infraestructura de Salud / Comercio",
    initialSituation: "La organización operaba con sistemas basados en la nube heredados que generaban caídas de sistema recurrentes por fluctuaciones de red local, retrasando la facturación fiscal de medicamentos regulados y perdiendo trazabilidad de lotes sanitarios.",
    engineeringDeployment: "Despliegue masivo del binario autónomo de Valcore con base de datos local aislada en cada terminal de caja. Sincronización asíncrona de telemetría y encolamiento nativo de timbrado CFDI para procesamiento diferido ante contingencias de red.",
    deployedModules: ["Módulo POS Farmacia v2.0", "Motor de Trazabilidad Sanitaria", "Módulo de Facturación Electrónica SAT"],
    metrics: [
      { label: "Tasa de Implementación Exitosa", value: "100%", code: "METRIC.SYS.SUCCESS_RATE" },
      { label: "Continuidad de Operación LAN", value: "365 días", code: "METRIC.SYS.UPTIME" },
      { label: "Reducción de Tiempo en Caja", value: "-34%", code: "METRIC.OPERATIONAL.EFFICIENCY" }
    ]
  }
]
