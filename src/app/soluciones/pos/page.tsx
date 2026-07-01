import { Metadata } from 'next'
import { SoftwareAppSchema, FAQSchema } from '../../../components/seo/StructuredData'
import { BreadcrumbsCorporate } from '../../../components/seo/BreadcrumbsCorporate'
import { ButtonCorporate } from '../../../components/ui/ButtonCorporate'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Punto de Venta POS Local-First para PyMEs en México | VALCORE',
  description: 'Sistema punto de venta empresarial e infraestructura de software comercial local-first con resiliencia offline total y facturación SAT integrada.',
  alternates: {
    canonical: 'https://valcore.mx/soluciones/pos',
  },
}

/**
 * @description Página pilar del Topic Cluster de POS. Implementa metadatos, datos estructurados y alta densidad de información en modo claro.
 */
export default function POSSolutionPage() {
  const faqItems = [
    {
      question: "¿Cómo opera el sistema POS de Valcore sin internet?",
      answer: "Nuestros sistemas se instalan localmente en su infraestructura con una base de datos local aislada, garantizando continuidad operativa absoluta sin depender de la nube pública."
    },
    {
      question: "¿La implementación incluye la migración de catálogos antiguos?",
      answer: "Sí, a través de un proceso estructurado ETL extraemos, saneamos e importamos sus bases de datos existentes de inventarios, proveedores y clientes al entorno consolidado de Valcore."
    }
  ]

  return (
    <main className="w-full max-w-[1440px] mx-auto px-6 py-16 bg-[#F8FAFC] flex-1 flex flex-col justify-center">
      {/* INYECCIÓN DE SCHEMAS DE METADATOS EN EL HEAD */}
      <SoftwareAppSchema 
        name="VALCORE POS" 
        description="Software administrativo y operativo punto de venta local-first para comercios en México."
        operatingSystem="Windows 10, Windows 11, Windows Server"
        applicationCategory="BusinessApplication"
        price="1499.00"
      />
      <FAQSchema questions={faqItems} />

      {/* RASTREO SEMÁNTICO */}
      <BreadcrumbsCorporate items={[{ label: 'SOLUCIONES', url: '/soluciones' }, { label: 'POINT_OF_SALE', url: '/soluciones/pos' }]} />

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-6">
        <div className="lg:col-span-2 border-l-2 border-[#2563EB] pl-6 flex flex-col gap-6">
          <div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-[#0F172A] uppercase tracking-tight leading-none mb-4">
              Sistema Punto de Venta Corporativo e Infraestructura Comercial
            </h1>
            <p className="font-sans text-sm text-[#334155] leading-relaxed mb-6">
              Lleve el control milimétrico de inventarios globales, ventas multi-caja, turnos operativos y facturación electrónica nativa directa ante el SAT sin comprometer los datos de su organización en servidores externos de terceros.
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/solicitar-demo">
              <ButtonCorporate variant="primary" size="sm" className="cursor-pointer">Iniciar Auditoría Técnica</ButtonCorporate>
            </Link>
          </div>
        </div>

        {/* COMPONENTE INTERNO DE PREGUNTAS FRECUENTES (FAQ UI DENSIDAD ERP) */}
        <div className="bg-white border border-[#E2E8F0] p-4 font-mono">
          <h2 className="text-xs uppercase tracking-widest text-[#0F172A] border-b border-[#E2E8F0] pb-2 mb-4">PREGUNTAS FRECUENTES</h2>
          <div className="flex flex-col gap-4 font-sans text-xs">
            {faqItems.map((item, index) => (
              <div key={index} className="flex flex-col gap-1.5">
                <span className="font-mono text-[10px] text-[#2563EB] uppercase tracking-wider">{`PREGUNTA ${index + 1}: ${item.question}`}</span>
                <p className="text-[#334155] leading-normal pl-2 border-l border-[#E2E8F0]">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
