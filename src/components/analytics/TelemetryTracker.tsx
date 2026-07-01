'use client'

import * as React from 'react'

interface TelemetryTrackerProps {
  componentId: string
  children: React.ReactNode
}

/**
 * @description Wrapper analítico de alta densidad. Captura la interacción con secciones críticas (ej. diagramas interactivos)
 * enviando exclusivamente metadatos de flujo. Excluye cualquier recolección de datos sensibles o cookies invasivas.
 */
export const TelemetryTracker: React.FC<TelemetryTrackerProps> = ({ componentId, children }) => {
  const handleInteractionTrack = () => {
    const payload = {
      event: 'COMPONENT_INTERACTION_ENGAGED',
      component: componentId,
      timestamp: new Date().toISOString()
    }
    
    // Ejecución asíncrona no bloqueante para el hilo principal de renderizado (Core Web Vitals)
    if (typeof window !== 'undefined' && navigator.sendBeacon) {
      const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' })
      navigator.sendBeacon('/api/telemetria/sitio', blob)
    }
  }

  return (
    <div onClick={handleInteractionTrack} className="w-full">
      {children}
    </div>
  )
}
