import * as React from 'react'
import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  url: string
}

interface BreadcrumbsCorporateProps {
  items: BreadcrumbItem[]
}

/**
 * @description Componente de rastreo semántico para motores de búsqueda e indexación lógica de clusters.
 */
export const BreadcrumbsCorporate: React.FC<BreadcrumbsCorporateProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="font-mono text-[10px] text-[#64748B] uppercase tracking-wider mb-6">
      <ol className="inline-flex items-center space-x-2">
        <li>
          <Link href="/" className="hover:text-[#2563EB] transition-colors duration-150">
            VALCORE_ROOT
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={item.url} className="inline-flex items-center space-x-2">
              <span className="text-[#E2E8F0] font-bold">/</span>
              {isLast ? (
                <span className="text-[#0F172A] font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.url} className="hover:text-[#2563EB] transition-colors duration-150">
                  {item.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
