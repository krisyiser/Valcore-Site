import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SoftwareAppSchema, FAQSchema } from '../../../components/seo/StructuredData'
import { BreadcrumbsCorporate } from '../../../components/seo/BreadcrumbsCorporate'
import { ButtonCorporate } from '../../../components/ui/ButtonCorporate'
import Link from 'next/link'

interface VerticalData {
  title: string
  sysCode: string
  tagline: string
  description: string
  features: string[]
  metrics: string
  price: string
  faqs: { question: string; answer: string }[]
}

/**
 * @description Repositorio de datos estáticos estructurados por vertical de industria y solución de software.
 */
const VERTICALS_REGISTRY: Record<string, VerticalData> = {
  'pos-para-farmacias': {
    title: "Sistema POS Infraestructura Farmacéutica",
    sysCode: "SYS.POS.PHARMA",
    tagline: "Control sanitario de medicamentos, recetas electrónicas y trazabilidad de lotes regulados.",
    description: "Infraestructura local-first diseñada para el cumplimiento estricto de las normativas de salud en México. Monitorea caducidades, existencias en almacén y ventas de antibióticos sin depender de servidores remotos en la nube.",
    features: [
      "Manejo de inventario controlado y alertas automáticas de caducidad por lote.",
      "Registro automatizado de cédulas profesionales y validación estructural de recetas electrónicas.",
      "Corte de caja de alta densidad operativa compatible con múltiples terminales locales simultáneas."
    ],
    metrics: "CHURN_RATE < 2.1% | MÓDULOS_FISCALES_ACTIVOS",
    price: "1799.00",
    faqs: [
      { question: "¿Cómo almacena los datos de control sanitario?", answer: "Toda la información de medicamentos controlados y recetas se aloja en el motor de datos local en las instalaciones del cliente, eliminando riesgos de brechas de privacidad externa." },
      { question: "¿Soporta actualizaciones ante cambios normativos?", answer: "Las adaptaciones a regulaciones sanitarias vigentes en México se emiten de manera prioritaria y se despliegan automáticamente sin costo extra." }
    ]
  },
  'pos-para-restaurantes': {
    title: "Sistema POS Infraestructura Gastronómica",
    sysCode: "SYS.POS.RESTAURANT",
    tagline: "Gestión de comandas en tiempo real, mapeo de mesas y control analítico de inventario de insumos.",
    description: "Optimizado para la alta velocidad operativa de restaurantes, cafeterías, fondas y taquerías. Centraliza la comunicación entre el área de servicio y cocina mediante terminales locales resilientes a fallas de conectividad.",
    features: [
      "Mapeo de mesas interactivo y cola de comandas digital por hilos para múltiples pantallas de cocina.",
      "Desglose analítico de recetas e insumos con deducción automática de inventario por platillo vendido.",
      "Módulo de facturación electrónica directa al comensal mediante tickets con código de timbrado QR."
    ],
    metrics: "TIEMPO_DE_RESPUESTA_LAN < 15ms | MULTI_TERMINAL",
    price: "1999.00",
    faqs: [
      { question: "¿Qué sucede con las comandas si falla la conexión a internet?", answer: "El sistema opera mediante una red de área local (LAN). Las comandas e inventarios se procesan localmente sin interrupción alguna en el servicio." },
      { question: "¿Permite la integración de impresoras térmicas distribuidas?", answer: "Sí, cuenta con mapeo nativo de puertos de impresión para distribuir órdenes automáticamente a cocina, barra y caja central." }
    ]
  },
  'pos': {
    title: "Sistema POS Corporativo",
    sysCode: "SYS.POS",
    tagline: "Puntos de venta rápidos, seguros y distribuidos local-first.",
    description: "Infraestructura operativa de punto de venta optimizada para resiliencia total y alto volumen transaccional. Permite llevar el control milimétrico de inventarios, ventas multi-caja y facturación electrónica nativa.",
    features: [
      "Resiliencia offline total garantizada por arquitectura de base de datos local.",
      "Sincronización multi-sucursal activa y encolamiento inteligente de ventas.",
      "Facturación electrónica nativa directa ante el SAT sin intermediarios."
    ],
    metrics: "TIEMPO_TRANSACCION < 10ms | SAT_CFDI_4.0",
    price: "1499.00",
    faqs: [
      { question: "¿Cómo opera el sistema POS de Valcore sin internet?", answer: "Nuestros sistemas se instalan localmente en su infraestructura con una base de datos local aislada, garantizando continuidad operativa absoluta sin depender de la nube pública." },
      { question: "¿La implementación incluye la migración de catálogos antiguos?", answer: "Sí, a través de un proceso estructurado ETL extraemos, saneamos e importamos sus bases de datos existentes de inventarios, proveedores y clientes." }
    ]
  },
  'crm': {
    title: "Motor CRM Industrial",
    sysCode: "SYS.CRM",
    tagline: "Gestión unificada de relaciones comerciales y pipelines de ventas B2B.",
    description: "Infraestructura B2B avanzada para el control documental, automatización de embudos comerciales de alta velocidad y seguimiento institucional completo. Diseñado para cámaras empresariales y gremios que requieren resiliencia local y soberanía de datos.",
    features: [
      "Embudo comercial e histórico transaccional indexado por hilos de contacto.",
      "Seguimiento documental automatizado para control de contratos B2B.",
      "Integración de pipelines y tableros comerciales con resiliencia offline total."
    ],
    metrics: "TIEMPO_DE_CARGA < 50ms | SEGURIDAD_AES_256",
    price: "2499.00",
    faqs: [
      { question: "¿Cómo opera el almacenamiento de datos del CRM?", answer: "Todos los contactos, interacciones y pipelines se alojan localmente, garantizando absoluta privacidad y propiedad exclusiva de los datos de sus clientes." },
      { question: "¿Es posible exportar los registros del pipeline?", answer: "Sí, cuenta con herramientas de exportación relacional directa a múltiples formatos estructurados y bases de datos locales." }
    ]
  },
  'erp': {
    title: "Núcleo ERP Administrativo",
    sysCode: "SYS.ERP",
    tagline: "Módulo integrado de contabilidad fiscal, nóminas y compras estructuradas.",
    description: "Infraestructura centralizada de administración financiera y manufactura. Control de cuentas por pagar, inventarios de distribución regional y facturación integrada al SAT bajo esquemas de alta seguridad.",
    features: [
      "Contabilidad general integrada con generación automática de pólizas fiscales.",
      "Cálculo y dispersión de nómina local de alta densidad con sellado fiscal instantáneo.",
      "Control de inventarios masivos con redundancia local multi-almacén activa."
    ],
    metrics: "REDUNDANCIA_ACTIVA_99.999% | SAT_TIMBRADO_OK",
    price: "4999.00",
    faqs: [
      { question: "¿Soporta la facturación masiva directa al SAT?", answer: "Sí, se conecta de forma directa a través de la red de área local con el PAC autorizado para timbrado instantáneo de CFDI 4.0." },
      { question: "¿Cómo se coordinan las bases de datos de diferentes sucursales?", answer: "Utiliza un motor de sincronización asíncrona que consolida la información en el nodo central cuando hay conectividad, manteniendo la autonomía operativa en cada punto." }
    ]
  },
  'business-intelligence': {
    title: "Business Intelligence Alpha",
    sysCode: "SYS.BI",
    tagline: "Analítica predictiva ejecutada localmente y tableros directivos.",
    description: "Motor analítico de telemetría y productividad organizacional. Permite la visualización de indicadores clave de rendimiento financiero y operativo, procesando consultas complejas en milisegundos directamente en hardware local.",
    features: [
      "Tableros interactivos planos con visualización métrica sin dependencias externas.",
      "Generación de reportes predictivos de demanda basados en histórico local.",
      "Telemetría ligera cifrada para el monitoreo de recursos del sistema."
    ],
    metrics: "QUERIES_RESOLVED_IN < 8ms | CPU_ACCEL",
    price: "3499.00",
    faqs: [
      { question: "¿Requiere conexión a internet para renderizar tableros?", answer: "No, las consultas analíticas se realizan localmente sobre la base de datos de producción replicada en hardware local." },
      { question: "¿Cómo se garantiza el rendimiento ante volúmenes masivos de datos?", answer: "El motor de BI utiliza índices altamente optimizados y aceleración de consultas por hardware." }
    ]
  },
  'sistemas-especializados': {
    title: "Sistemas Especializados a la Medida",
    sysCode: "SYS.SPEC",
    tagline: "Automatización de flujos y control operativo a la medida de su organización.",
    description: "Soluciones de software personalizadas bajo rigurosos estándares industriales. Diseñamos módulos para control de proyectos específicos, digitalización documental y automatizaciones críticas integradas al ecosistema Valcore.",
    features: [
      "Mapeo de flujos operativos complejos y modelado de datos personalizado.",
      "Despliegue de microservicios locales para tareas de procesamiento pesado.",
      "Compatibilidad total con el ecosistema de base de datos relacional de Valcore."
    ],
    metrics: "DESPLIEGUE_MODULAR | INTEGRACIÓN_100%",
    price: "A convenir",
    faqs: [
      { question: "¿Cómo se inicia la evaluación de un desarrollo a la medida?", answer: "Iniciamos con una auditoría técnica completa para mapear sus flujos operativos y diseñar la arquitectura óptima antes de escribir código." },
      { question: "¿Los desarrollos personalizados cuentan con soporte a largo plazo?", answer: "Sí, todos nuestros despliegues a la medida incluyen un acuerdo de nivel de servicio (SLA) de soporte técnico prioritario." }
    ]
  }
}

interface PageProps {
  params: Promise<{ slug: string }>
}

/**
 * @description Generador dinámico de metadatos optimizado para SEO B2B por vertical de negocio.
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const data = VERTICALS_REGISTRY[slug]
  if (!data) return {}

  return {
    title: `${data.title} Local-First en México | VALCORE`,
    description: `${data.tagline} ${data.description.substring(0, 100)}...`,
    alternates: { canonical: `https://valcore.mx/soluciones/${slug}` }
  }
}

/**
 * @description Ruta dinámica pilar del Topic Cluster industrial de Valcore.
 */
export default async function VerticalSolutionPage({ params }: PageProps) {
  const { slug } = await params
  const data = VERTICALS_REGISTRY[slug]

  if (!data) {
    notFound()
  }

  return (
    <main className="w-full max-w-[1440px] mx-auto px-6 py-16 bg-[#F8FAFC] flex-grow flex flex-col justify-center">
      <SoftwareAppSchema 
        name={data.title}
        description={data.tagline}
        operatingSystem="Windows 10, Windows 11, Windows Server"
        applicationCategory="BusinessApplication"
        price={data.price}
      />
      <FAQSchema questions={data.faqs} />

      <BreadcrumbsCorporate items={[{ label: 'SOLUCIONES', url: '/soluciones' }, { label: data.sysCode, url: `/soluciones/${slug}` }]} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* PANEL PRINCIPAL DE INFORMACIÓN DE INGENIERÍA */}
        <div className="lg:col-span-2 border-l-2 border-[#2563EB] pl-6 flex flex-col gap-6">
          <div>
            <h1 className="font-display font-bold text-3xl text-[#0F172A] uppercase tracking-tight">{data.title}</h1>
            <p className="font-sans text-sm text-[#64748B] mt-1 italic">{data.tagline}</p>
          </div>

          <p className="font-sans text-sm text-[#334155] leading-relaxed bg-white border border-[#E2E8F0] p-4 rounded-none">
            {data.description}
          </p>

          <div className="flex flex-col gap-3">
            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-[#0F172A]">ESPECIFICACIONES DE LA INFRAESTRUCTURA DE DATOS</h3>
            <ul className="flex flex-col gap-2 font-sans text-xs text-[#334155]">
              {data.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#2563EB] font-mono font-bold">[{idx + 1}]</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SIDEBAR OPERATIVO DE ALTA DENSIDAD */}
        <div className="flex flex-col gap-4 w-full">
          <div className="bg-white border border-[#E2E8F0] p-4 font-mono">
            <h2 className="text-xs uppercase tracking-widest text-[#0F172A] border-b border-[#E2E8F0] pb-2 mb-3">TELEMETRÍA Y MÉTRICAS DE CONTROL</h2>
            <div className="text-[11px] text-[#64748B] bg-[#F8FAFC] p-2 border border-[#E2E8F0] mb-4">
              {data.metrics}
            </div>
            <Link href="/solicitar-demo" className="block w-full">
              <ButtonCorporate variant="primary" size="sm" className="w-full cursor-pointer">
                Iniciar Auditoría Técnica
              </ButtonCorporate>
            </Link>
          </div>

          <div className="bg-white border border-[#E2E8F0] p-4 font-mono">
            <h2 className="text-xs uppercase tracking-widest text-[#0F172A] border-b border-[#E2E8F0] pb-2 mb-3">PREGUNTAS FRECUENTES</h2>
            <div className="flex flex-col gap-3 font-sans text-xs">
              {data.faqs.map((faq, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] text-[#2563EB] uppercase tracking-wider">{`PREGUNTA ${idx + 1}: ${faq.question}`}</span>
                  <p className="text-[#64748B] pl-2 border-l border-[#E2E8F0]">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
