import * as React from 'react'
import Link from 'next/link'
import { ButtonCorporate } from '../components/ui/ButtonCorporate'
import { DataCardBento } from '../components/ui/DataCardBento'
import { HomeDiagram } from '../components/ui/HomeDiagram'

/**
 * @description Home de Valcore integrada con la capa analítica de telemetría asíncrona y diseño Bento premium claro.
 */
export default function HomePage() {
  return (
    <main className="w-full max-w-[1440px] mx-auto px-6 py-12 flex-1 flex flex-col justify-center bg-[#F8FAFC]">
      {/* HERO SECTION DE ALTA CRITICIDAD */}
      <section className="border-l-2 border-[#2563EB] pl-6 max-w-4xl my-12">
        <h1 className="font-display font-bold text-4xl sm:text-5xl text-[#0F172A] tracking-tight leading-none uppercase mb-4">
          Infraestructura de software empresarial para organizaciones modernas
        </h1>
        <p className="font-sans text-base text-[#334155] leading-relaxed max-w-2xl mb-6">
          Diseñamos sistemas CRM, ERP, POS, plataformas analíticas y soluciones operativas que permiten controlar, automatizar y escalar procesos críticos.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/solicitar-demo">
            <ButtonCorporate variant="primary" size="md" className="cursor-pointer">
              Solicitar evaluación técnica
            </ButtonCorporate>
          </Link>
          <Link href="/tecnologia">
            <ButtonCorporate variant="secondary" size="md" className="cursor-pointer">
              Explorar arquitectura
            </ButtonCorporate>
          </Link>
        </div>
      </section>

      {/* TRACKING ANALÍTICO DE INTERACCIÓN CON EL DIAGRAMA DE INFRAESTRUCTURA */}
      <section className="my-8 w-full">
        <HomeDiagram />
      </section>

      {/* SECCIÓN BENTO: CAPACIDADES CRÍTICAS */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
        <Link href="/soluciones/pos" className="block h-full group">
          <DataCardBento title="Módulo POS Avanzado" code="SYS.POS.v2.0" className="h-full group-hover:border-[#2563EB] transition-colors">
            <p className="mb-4">Puntos de venta local-first optimizados para resiliencia offline total, control de inventarios masivos y automatización fiscal bajo normativa del SAT.</p>
          </DataCardBento>
        </Link>

        <Link href="/soluciones/crm" className="block h-full group">
          <DataCardBento title="Motor CRM Industrial" code="SYS.CRM.v1.2" className="h-full group-hover:border-[#2563EB] transition-colors">
            <p className="mb-4">Gestión unificada de relaciones comerciales, pipelines de ventas B2B y control documental institucional para cámaras empresariales y gremios.</p>
          </DataCardBento>
        </Link>

        <Link href="/soluciones/erp" className="block h-full group">
          <DataCardBento title="Núcleo ERP Administrativo" code="SYS.ERP.v1.0" className="h-full group-hover:border-[#2563EB] transition-colors">
            <p className="mb-4">Módulo integrado de contabilidad fiscal, nóminas, compras estructuradas y administración de recursos de manufactura y distribución regional.</p>
          </DataCardBento>
        </Link>

        <Link href="/soluciones/business-intelligence" className="block h-full group">
          <DataCardBento title="Business Intelligence" code="SYS.BI.ALPHA" className="h-full group-hover:border-[#2563EB] transition-colors">
            <p className="mb-4">Analítica predictiva ejecutada localmente en SQLite. Tableros integrales con indicadores de productividad y consumo de recursos organizacionales.</p>
          </DataCardBento>
        </Link>
      </section>
    </main>
  )
}
