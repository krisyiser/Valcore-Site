'use client'

import * as React from 'react'
import { motion } from 'framer-motion'

interface NodeProps {
  label: string
}

const DiagramNode: React.FC<NodeProps> = ({ label }) => (
  <motion.div 
    className="relative bg-white/60 backdrop-blur-md border-t-2 border-l-2 border-white/80 border-r border-b border-slate-300/60 p-5 font-sans text-center w-full sm:w-[220px] rounded-2xl shadow-[4px_4px_10px_rgba(0,0,0,0.05),-2px_-2px_6px_rgba(255,255,255,0.8)] transition-all duration-300 hover:shadow-[0_10px_25px_rgba(37,99,235,0.15)] hover:border-[#2563EB]/40 group overflow-hidden cursor-pointer"
    whileHover={{ y: -6, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300, damping: 15 }}
  >
    {/* Hoverlight backlighting glow effect */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    <div className="relative text-sm text-[#0F172A] font-bold tracking-wide uppercase font-display">{label}</div>
  </motion.div>
)

/**
 * @description Renderiza el pipeline de procesamiento mediante una vista 3D premium con glassmorphism y retroiluminación hover.
 */
export const DataFlowDiagram: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-[#F8FAFC]/80 to-[#E2E8F0]/40 backdrop-blur-lg border border-[#E2E8F0] p-10 w-full rounded-3xl flex flex-col items-center gap-6 select-none shadow-[inset_0_2px_4px_rgba(255,255,255,0.8)]">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 w-full max-w-5xl relative">
        <DiagramNode label="Datos Locales" />
        
        {/* LÍNEA CONECTOR VECTORIAL CON GLOW Y ANIMACIÓN EN GPU */}
        <div className="h-8 w-1.5 sm:h-1.5 sm:w-16 bg-slate-300/50 rounded-full relative overflow-hidden shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)]">
          <motion.div 
            className="absolute top-0 left-0 bottom-0 bg-[#2563EB] w-6 shadow-[0_0_8px_#2563EB]"
            animate={{ x: ['-100%', '350%'] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            style={{ willChange: 'transform' }}
          />
        </div>

        <DiagramNode label="Entorno Aislado" />

        <div className="h-8 w-1.5 sm:h-1.5 sm:w-16 bg-slate-300/50 rounded-full relative overflow-hidden shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)]">
          <motion.div 
            className="absolute top-0 left-0 bottom-0 bg-[#2563EB] w-6 shadow-[0_0_8px_#2563EB]"
            animate={{ x: ['-100%', '350%'] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: 0.4 }}
            style={{ willChange: 'transform' }}
          />
        </div>

        <DiagramNode label="Automatización" />

        <div className="h-8 w-1.5 sm:h-1.5 sm:w-16 bg-slate-300/50 rounded-full relative overflow-hidden shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)]">
          <motion.div 
            className="absolute top-0 left-0 bottom-0 bg-[#2563EB] w-6 shadow-[0_0_8px_#2563EB]"
            animate={{ x: ['-100%', '350%'] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: 0.8 }}
            style={{ willChange: 'transform' }}
          />
        </div>

        <DiagramNode label="Predicción BI" />
      </div>
    </div>
  )
}
