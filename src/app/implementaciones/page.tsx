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

export default function ImplementationsPage() {
  return (
    <main className="w-full max-w-7xl mx-auto px-6 py-20 bg-zinc-950 flex-grow flex flex-col justify-center text-white space-y-12">
      <div className="pt-8">
        <BreadcrumbsCorporate items={[{ label: 'IMPLEMENTACIONES', url: '/implementaciones' }]} />
      </div>

      <section className="max-w-4xl border-l-2 border-white pl-6">
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-white uppercase tracking-tight mb-4">
          Auditorías de infraestructura digital y resultados
        </h1>
        <p className="font-sans text-sm text-zinc-200 leading-relaxed">
          Analice los reportes técnicos de puestas en marcha ejecutadas. Evaluamos las métricas de mitigación de churn, optimización transaccional y la tasa de éxito estructural superior al 92% exigido por nuestros principios de ingeniería.
        </p>
      </section>

      {/* ITERACIÓN DE EXPEDIENTES DE INGENIERÍA */}
      <div className="flex flex-col gap-8 w-full">
        {IMPLEMENTATIONS_REGISTRY.map((report) => (
          <div key={report.id} className="bg-zinc-900/20 border border-white/10 p-6 backdrop-blur-md flex flex-col gap-6">
            <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-3 font-mono text-xs">
              <div className="flex items-center gap-4">
                <span className="text-white font-bold">{`[ID: ${report.id.toUpperCase()}]`}</span>
                <h2 className="text-white font-display font-bold uppercase tracking-wider">{report.organizationName}</h2>
              </div>
              <span className="text-white bg-white/5 px-2 py-0.5 border border-white/10">{report.industry}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 font-sans text-xs leading-relaxed text-zinc-200">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] text-amber-400 uppercase tracking-widest">01. SITUACIÓN INICIAL</span>
                <p className="bg-zinc-950 border border-white/5 p-4 h-full text-zinc-200">{report.initialSituation}</p>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest">02. INGENIERÍA DE DESPLIEGUE</span>
                <p className="bg-zinc-950 border border-white/5 p-4 h-full text-zinc-200">{report.engineeringDeployment}</p>
              </div>

              {/* MÓDULOS ACTIVADOS */}
              <div className="flex flex-col gap-2 font-mono">
                <span className="text-[10px] text-white uppercase tracking-widest">03. MÓDULOS DESPLEGADOS</span>
                <div className="bg-zinc-950 border border-white/5 p-4 flex flex-col gap-1.5 h-full text-zinc-200">
                  {report.deployedModules.map((mod, idx) => (
                    <div key={idx} className="text-white text-[11px] flex items-center gap-2">
                      <span className="text-emerald-400">✔</span> {mod}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* MATRIZ DE MÉTRICAS QUANTITATIVAS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10 pt-4 font-mono">
              {report.metrics.map((metric, idx) => (
                <div key={idx} className="bg-zinc-950 border border-white/5 p-3 flex flex-col">
                  <span className="text-[9px] text-zinc-400 mb-1">{metric.code}</span>
                  <span className="text-xl font-bold text-white tracking-tight">{metric.value}</span>
                  <span className="text-[10px] text-zinc-200 font-sans mt-0.5">{metric.label}</span>
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
