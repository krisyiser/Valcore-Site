import { Metadata } from 'next'
import { BreadcrumbsCorporate } from '../../components/seo/BreadcrumbsCorporate'

export const metadata: Metadata = {
  title: 'Arquitectura Local-First y Gobierno de Datos Cifrados | VALCORE',
  description: 'Conozca la ingeniería detrás de nuestros sistemas autónomos de escritorio: bases de datos aisladas, telemetría ligera e inmunidad a caídas de red.',
  alternates: { canonical: 'https://valcore.mx/tecnologia' }
}

/**
 * @description Detalla los pilares de ingeniería e infraestructura crítica en modo claro.
 */
export default function TechnologyPage() {
  return (
    <main className="w-full max-w-[1440px] mx-auto px-6 py-16 bg-[#F8FAFC] flex-grow flex flex-col justify-center">
      <BreadcrumbsCorporate items={[{ label: 'TECNOLOGÍA', url: '/tecnologia' }]} />

      <section className="max-w-4xl border-l-2 border-[#2563EB] pl-6 mb-12">
        <h1 className="font-display font-bold text-3xl text-[#0F172A] uppercase tracking-tight mb-4">
          Ingeniería de datos soberana e inmunidad operativa
        </h1>
        <p className="font-sans text-sm text-[#334155] leading-relaxed">
          Nuestros productos se ejecutan de manera aislada en el hardware nativo de la organización. La información crítica jamás se almacena en la nube de proveedores externos indeterminados, garantizando el cumplimiento regulatorio de privacidad y operabilidad perpetua.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono">
        <div className="bg-white border border-[#E2E8F0] p-4">
          <div className="text-xs text-[#2563EB] mb-2">[01] ALMACENAMIENTO_AISLADO</div>
          <p className="font-sans text-xs text-[#334155] leading-normal">Motores de base de datos relacionales integrados directamente en el ejecutable binario. Rendimiento transaccional de milisegundos sin latencia de red.</p>
        </div>
        <div className="bg-white border border-[#E2E8F0] p-4">
          <div className="text-xs text-[#2563EB] mb-2">[02] TELEMETRÍA_CIFRADA</div>
          <p className="font-sans text-xs text-[#334155] leading-normal">Envío exclusivo de metadatos de salud operativa y firmas de error técnico en paquetes cifrados asíncronos. Integridad total de la información empresarial.</p>
        </div>
        <div className="bg-white border border-[#E2E8F0] p-4">
          <div className="text-xs text-[#2563EB] mb-2">[03] DESPLIEGUE_MODULAR</div>
          <p className="font-sans text-xs text-[#334155] leading-normal">Actualizaciones empaquetadas liberadas en oleadas jerárquicas controladas, impidiendo colisiones de versión o bloqueos de la base de datos operativa.</p>
        </div>
      </div>
    </main>
  )
}
