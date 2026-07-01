import * as React from 'react'

interface ButtonCorporateProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'sm' | 'md'
}

/**
 * @description Botón industrial plano con indexación de teclado nativa. Sin degradados ni bordes redondeados estándar.
 */
export const ButtonCorporate = React.forwardRef<HTMLButtonElement, ButtonCorporateProps>(
  ({ className = '', variant = 'primary', size = 'md', ...props }, ref) => {
    const baseStyle = "inline-flex items-center justify-center font-display font-semibold uppercase tracking-wider transition-colors duration-150 focus:outline-none focus:ring-1 focus:ring-[#2563EB] focus:ring-offset-1 focus:ring-offset-[#F8FAFC] disabled:opacity-50 disabled:pointer-events-none rounded-none border border-transparent cursor-pointer"
    
    const variants = {
      primary: "bg-[#2563EB] text-white hover:bg-[#1D4ED8] active:bg-[#1E40AF]",
      secondary: "bg-white text-[#334155] border-[#E2E8F0] hover:bg-[#F1F5F9] hover:text-[#0F172A]",
      danger: "bg-[#D97706] text-white hover:bg-[#B45309]"
    }

    const sizes = {
      sm: "px-3 py-1.5 text-xs font-mono",
      md: "px-5 py-2.5 text-sm"
    }

    return (
      <button
        ref={ref}
        className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      />
    )
  }
)
ButtonCorporate.displayName = 'ButtonCorporate'
