import { Metadata } from 'next'
import { IMPLEMENTATIONS_REGISTRY } from '../../config/data/implementations'
import { BreadcrumbsCorporate } from '../../components/seo/BreadcrumbsCorporate'
import { ButtonCorporate } from '../../components/ui/ButtonCorporate'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Auditorías de Implementación e Indicadores de Rendimiento | VALCORE',
  description: 'Casos de estudio técnicos de Valcore: Evaluación de arquitectura, despliegues modulares e indicadores cuantitativos de eficiencia operacional.',
  alternates: { canonical: 'https://valcore.mx/implementaciones' }
}

/**
 * @description Módulo de despliegue de casos de éxito bajo un riguroso esquema de bitácora de ingeniería en modo claro.
 */
export default function ImplementationsPage() {
  return (
    <main className="w-full max-w-[1440px] mx-auto px-6 py-16 bg-[#F8FAFC] flex-grow flex flex-col justify-center">
      <BreadcrumbsCorporate items={[{ label: 'IMPLEMENTACIONES', url: '/implementaciones' }]} />

      <section className="max-w-4xl border-l-2 border-[#2563EB] pl-6 mb-12">
        <h1 className="font-display font-bold text-3xl text-[#0F172A] uppercase tracking-tight mb-4">
          Auditorías de infraestructura digital y resultados
        </h1>
        <p className="font-sans text-sm text-[#334155] leading-relaxed">
          Analice los reportes técnicos de puestas en marcha ejecutadas. Evaluamos las métricas de mitigación de churn, optimización transaccional y la tasa de éxito estructural superior al 92% exigido por nuestros principios de ingeniería.
        </p>
      </section>

      {/* ITERACIÓN DE EXPEDIENTES DE INGENIERÍA */}
      <div className="flex flex-col gap-8 w-full">
        {IMPLEMENTATIONS_REGISTRY.map((report) => (
          <div key={report.id} className="bg-white border border-[#E2E8F0] p-6 rounded-none flex flex-col gap-6">
            <div className="flex flex-wrap items-center justify-between border-b border-[#E2E8F0] pb-3 font-mono text-xs">
              <div className="flex items-center gap-4">
                <span className="text-[#2563EB] font-bold">{`[ID: ${report.id.toUpperCase()}]`}</span>
                <h2 className="text-[#0F172A] font-display font-bold uppercase tracking-wider">{report.organizationName}</h2>
              </div>
              <span className="text-[#64748B] bg-[#F8FAFC] px-2 py-0.5 border border-[#E2E8F0]">{report.industry}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 font-sans text-xs leading-relaxed text-[#334155]">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] text-[#D97706] uppercase tracking-widest">01. SITUACIÓN INICIAL</span>
                <p className="bg-[#F8FAFC] p-3 border border-[#E2E8F0] h-full">{report.initialSituation}</p>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] text-[#2563EB] uppercase tracking-widest">02. INGENIERÍA DE DESPLIEGUE</span>
                <p className="bg-[#F8FAFC] p-3 border border-[#E2E8F0] h-full">{report.engineeringDeployment}</p>
              </div>

              {/* MÓDULOS ACTIVADOS */}
              <div className="flex flex-col gap-2 font-mono">
                <span className="text-[10px] text-[#059669] uppercase tracking-widest">03. MÓDULOS DESPLEGADOS</span>
                <div className="bg-[#F8FAFC] p-3 border border-[#E2E8F0] flex flex-col gap-1.5 h-full">
                  {report.deployedModules.map((mod, idx) => (
                    <div key={idx} className="text-[#0F172A] text-[11px] flex items-center gap-2">
                      <span className="text-[#059669]">✔</span> {mod}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* MATRIZ DE MÉTRICAS QUANTITATIVAS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-[#E2E8F0] pt-4 font-mono">
              {report.metrics.map((metric, idx) => (
                <div key={idx} className="bg-[#F8FAFC] border border-[#E2E8F0] p-3 flex flex-col">
                  <span className="text-[9px] text-[#64748B] mb-1">{metric.code}</span>
                  <span className="text-xl font-bold text-[#0F172A] tracking-tight">{metric.value}</span>
                  <span className="text-[10px] text-[#334155] font-sans mt-0.5">{metric.label}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-end pt-2">
              <Link href="/solicitar-demo">
                <ButtonCorporate variant="secondary" size="sm" className="cursor-pointer">
                  Solicitar réplica de infraestructura para su organización
                </ButtonCorporate>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
