import * as React from 'react'

interface InputCorporateProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

/**
 * @description Input de alta densidad informativa con tabbing index estructurado y feedback inmediato de error.
 */
export const InputCorporate = React.forwardRef<HTMLInputElement, InputCorporateProps>(
  ({ className = '', label, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1 w-full font-mono">
        <label className="text-[10px] uppercase tracking-widest text-[#64748B]">
          {label}
        </label>
        <input
          ref={ref}
          className={`bg-[#F8FAFC] border ${error ? 'border-[#D97706]' : 'border-[#E2E8F0]'} px-3 py-1.5 font-sans text-sm text-[#0F172A] rounded-none focus:outline-none focus:border-[#2563EB] transition-colors duration-150 disabled:opacity-50`}
          {...props}
        />
        {error && (
          <span className="text-[10px] text-[#D97706] tracking-wider uppercase">
            {`ERROR: ${error}`}
          </span>
        )}
      </div>
    )
  }
)
InputCorporate.displayName = 'InputCorporate'
