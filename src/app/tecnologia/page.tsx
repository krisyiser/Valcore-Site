import { Metadata } from 'next'
import { BreadcrumbsCorporate } from '../../components/seo/BreadcrumbsCorporate'

export const metadata: Metadata = {
  title: 'Arquitectura Local-First y Gobierno de Datos Cifrados | VALCORE',
  description: 'Conozca la ingeniería detrás de nuestros sistemas autónomos de escritorio: bases de datos aisladas, telemetría ligera e inmunidad a caídas de red.',
  alternates: { canonical: 'https://valcore.mx/tecnologia' }
}

export default function TechnologyPage() {
  return (
    <main className="w-full max-w-7xl mx-auto px-6 py-20 bg-zinc-950 flex-grow flex flex-col justify-center text-white space-y-12">
      <div className="pt-8">
        <BreadcrumbsCorporate items={[{ label: 'TECNOLOGÍA', url: '/tecnologia' }]} />
      </div>

      <section className="max-w-4xl border-l-2 border-white pl-6">
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-white uppercase tracking-tight mb-4">
          Ingeniería de datos soberana e inmunidad operativa
        </h1>
        <p className="font-sans text-sm text-zinc-200 leading-relaxed">
          Nuestros productos se ejecutan de manera aislada en el hardware nativo de la organización. La información crítica jamás se almacena en la nube de proveedores externos indeterminados, garantizando el cumplimiento regulatorio de privacidad y operabilidad perpetua.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono">
        <div className="bg-zinc-900/30 border border-white/10 p-6 backdrop-blur-md">
          <div className="text-xs text-white mb-3 font-bold">[01] ALMACENAMIENTO_AISLADO</div>
          <p className="font-sans text-xs text-zinc-200 leading-relaxed">Motores de base de datos relacionales integrados directamente en el ejecutable binario. Rendimiento transaccional de milisegundos sin latencia de red.</p>
        </div>
        <div className="bg-zinc-900/30 border border-white/10 p-6 backdrop-blur-md">
          <div className="text-xs text-white mb-3 font-bold">[02] TELEMETRÍA_CIFRADA</div>
          <p className="font-sans text-xs text-zinc-200 leading-relaxed">Envío exclusivo de metadatos de salud operativa y firmas de error técnico en paquetes cifrados asíncronos. Integridad total de la información empresarial.</p>
        </div>
        <div className="bg-zinc-900/30 border border-white/10 p-6 backdrop-blur-md">
          <div className="text-xs text-white mb-3 font-bold">[03] DESPLIEGUE_MODULAR</div>
          <p className="font-sans text-xs text-zinc-200 leading-relaxed">Actualizaciones empaquetadas liberadas en oleadas jerárquicas controladas, impidiendo colisiones de versión o bloqueos de la base de datos operativa.</p>
        </div>
      </div>
    </main>
  )
}
