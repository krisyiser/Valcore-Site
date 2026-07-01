import * as React from 'react'

interface DataCardBentoProps {
  title: string
  code?: string
  children: React.ReactNode
  className?: string
}

/**
 * @description Módulo contenedor Bento con geometría rígida de 1px. Evita elevaciones y sombras.
 */
export const DataCardBento: React.FC<DataCardBentoProps> = ({ title, code, children, className = '' }) => {
  return (
    <div className={`bg-white border border-[#E2E8F0] p-4 flex flex-col justify-between rounded-none hover:border-[#2563EB]/50 transition-colors duration-200 ${className}`}>
      <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-2 mb-3">
        <h3 className="font-display font-bold text-xs uppercase tracking-widest text-[#0F172A]">
          {title}
        </h3>
        {code && (
          <span className="font-mono text-[10px] text-[#64748B] bg-[#F8FAFC] px-1.5 py-0.5 border border-[#E2E8F0]">
            {code}
          </span>
        )}
      </div>
      <div className="flex-1 font-sans text-sm text-[#334155]">
        {children}
      </div>
    </div>
  )
}
