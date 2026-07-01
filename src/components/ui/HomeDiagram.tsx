'use client'

import * as React from 'react'
import dynamic from 'next/dynamic'
import { TelemetryTracker } from '../analytics/TelemetryTracker'

const DynamicDataFlowDiagram = dynamic(
  () => import('./DataFlowDiagram').then((mod) => mod.DataFlowDiagram),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-[300px] bg-[#111827] border border-[#374151] animate-pulse flex items-center justify-center font-mono text-[10px] text-[#9CA3AF]">
        // CARGANDO SUBSISTEMA ANÁLITICO DE TELEMETRÍA...
      </div>
    )
  }
)

/**
 * @description Contenedor cliente para el diagrama de flujo analítico interactivo con telemetría integrada.
 * Permite la carga dinámica local-first sin comprometer el SSR de la página raíz.
 */
export const HomeDiagram: React.FC = () => {
  return (
    <TelemetryTracker componentId="CORE_DATA_FLOW_DIAGRAM">
      <DynamicDataFlowDiagram />
    </TelemetryTracker>
  )
}
