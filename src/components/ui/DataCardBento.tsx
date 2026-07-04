import * as React from 'react'

interface DataCardBentoProps {
  title: string
  code?: string
  children: React.ReactNode
  className?: string
}

/**
 * @description Módulo contenedor Bento premium con estética oscura y bordes nítidos translúcidos.
 */
export const DataCardBento: React.FC<DataCardBentoProps> = ({ title, code, children, className = '' }) => {
  return (
    <div className={`bg-zinc-900/40 backdrop-blur-md border border-white/10 p-5 flex flex-col justify-between rounded-none hover:border-white/30 transition-all duration-300 ${className}`}>
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
        <h3 className="font-display font-bold text-xs uppercase tracking-widest text-white">
          {title}
        </h3>
        {code && (
          <span className="font-mono text-[9px] text-zinc-400 bg-white/5 px-2 py-0.5 border border-white/10 tracking-widest">
            {code}
          </span>
        )}
      </div>
      <div className="flex-1 font-sans text-xs text-zinc-400 leading-relaxed">
        {children}
      </div>
    </div>
  )
}
