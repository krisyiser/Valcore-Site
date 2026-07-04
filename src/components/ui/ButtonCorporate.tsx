import * as React from 'react'

interface ButtonCorporateProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'sm' | 'md'
}

/**
 * @description Botón premium con estética minimalista de alto contraste y transición suave.
 */
export const ButtonCorporate = React.forwardRef<HTMLButtonElement, ButtonCorporateProps>(
  ({ className = '', variant = 'primary', size = 'md', ...props }, ref) => {
    const baseStyle = "inline-flex items-center justify-center font-display font-semibold uppercase tracking-wider transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 focus:ring-offset-black disabled:opacity-40 disabled:pointer-events-none rounded-none border cursor-pointer"
    
    const variants = {
      primary: "bg-white text-black border-transparent hover:bg-zinc-200 active:bg-zinc-300",
      secondary: "bg-transparent text-white border-white/20 hover:bg-white/10 hover:border-white/40",
      danger: "bg-red-950 text-red-200 border-red-800 hover:bg-red-900 active:bg-red-850"
    }

    const sizes = {
      sm: "px-4 py-2 text-xs font-mono",
      md: "px-6 py-3 text-sm"
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
