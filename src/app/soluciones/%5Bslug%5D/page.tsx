import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldAlert } from "lucide-react";
import { generatePageMetadata, getSoftwareSchema, getFAQSchema } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const solutionsData: Record<string, {
  title: string;
  category: string;
  description: string;
  overview: string;
  subsolutions: { name: string; href: string; desc: string }[];
  features: string[];
  specs: { name: string; value: string }[];
  faqs: { q: string; a: string }[];
}> = {
  "crm": {
    title: "CRM Empresarial",
    category: "Customer Relationship Management",
    description: "Infraestructura de control de relaciones comerciales y gestión de prospectos a gran escala.",
    overview: "Nuestro motor CRM está diseñado para centralizar embudos comerciales de alto volumen, automatizando alertas de seguimiento e integrando telefonía, mensajería y flujos transaccionales sin fricciones.",
    subsolutions: [
      { name: "CRM para Hoteles", href: "/crm-para-hoteles", desc: "Gestión de huéspedes y flujos de reserva integrados." },
      { name: "CRM para Laboratorios", href: "/crm-para-laboratorios", desc: "Seguimiento médico y control de entrega de resultados." },
      { name: "CRM para Asociaciones", href: "/crm-para-asociaciones", desc: "Control de agremiados, cobranza de membresías y eventos." },
      { name: "CRM para Educación", href: "/crm-para-educacion", desc: "Seguimiento de aspirantes y retención de alumnos matriculados." },
      { name: "CRM Personalizado", href: "/crm-personalizado", desc: "Modelado a la medida para operaciones industriales complejas." },
    ],
    features: [
      "Pipeline multinivel con estados personalizables.",
      "Motor de asignación automatizada de leads (Round Robin).",
      "Historial de auditoría completo por cliente y agente.",
      "API Gateway para integración con plataformas legacy.",
    ],
    specs: [
      { name: "Capacidad de Carga", value: "Soporte para 1M+ prospectos activos" },
      { name: "Seguridad de Datos", value: "Encriptación AES-256 en reposo" },
      { name: "Latencia de Sincronización", value: "<1.2 segundos entre nodos" },
    ],
    faqs: [
      { q: "¿El CRM se integra con ERPs existentes?", a: "Sí, cuenta con un API REST robusto y webhooks bidireccionales configurables para conectarse con cualquier ERP legacy." },
      { q: "¿Es posible aislar los datos por sucursal?", a: "Sí, el CRM cuenta con control de acceso basado en roles (RBAC) y visibilidad de datos estructurada jerárquicamente por unidades de negocio." }
    ]
  },
  "erp": {
    title: "ERP de Operación Organizacional",
    category: "Enterprise Resource Planning",
    description: "Sistemas de planificación de recursos empresariales para el control financiero e inventarios.",
    overview: "El ERP de Valcore controla compras, facturación, cuentas por pagar, inventarios distribuidos e información contable desde un núcleo central de alta consistencia.",
    subsolutions: [
      { name: "ERP para Hoteles", href: "/erp-para-hoteles", desc: "Manejo contable y operativo para cadenas de hospitalidad." },
      { name: "ERP para Educación", href: "/erp-para-educacion", desc: "Control escolar, facturación de colegiaturas y egresos." },
      { name: "ERP para Gobierno", href: "/erp-para-gobierno", desc: "Contabilidad gubernamental y control presupuestal estricto." },
      { name: "ERP Personalizado", href: "/erp-personalizado", desc: "Modelado específico de flujos industriales." },
    ],
    features: [
      "Facturación electrónica nativa automatizada.",
      "Control de almacén con valuación en tiempo real (PEPS/Promedio).",
      "Conciliación bancaria semiautomática.",
      "Auditoría integrada en todos los movimientos de inventario.",
    ],
    specs: [
      { name: "Consistencia de BD", value: "Transacciones ACID estrictas" },
      { name: "Manejo Fiscal", value: "Adaptación completa a regulaciones locales" },
      { name: "Capacidad de Concurrencia", value: "10,000+ usuarios concurrentes" },
    ],
    faqs: [
      { q: "¿El ERP cuenta con respaldo automático?", a: "Sí, realizamos copias de seguridad incrementales horarias y respaldos completos diarios con redundancia geográfica multi-región." },
      { q: "¿Soporta facturación masiva?", a: "Sí, posee un motor de cola de procesamiento para emitir y timbrar miles de facturas en lote de forma asíncrona." }
    ]
  },
  "pos": {
    title: "POS Terminal Punto de Venta",
    category: "Point of Sale",
    description: "Puntos de venta de alta disponibilidad y tolerancia a fallos para retail y hospitality.",
    overview: "Nuestro sistema de punto de venta garantiza operaciones de caja continuas incluso durante desconexiones a internet, sincronizándose automáticamente al restablecer el enlace.",
    subsolutions: [
      { name: "POS para Tiendas de Abarrotes", href: "/pos-para-tiendas-de-abarrotes", desc: "Búsqueda rápida, básculas y venta por volumen." },
      { name: "POS para Farmacias", href: "/pos-para-farmacias", desc: "Control de caducidades, lote y receta médica requerida." },
      { name: "POS para Restaurantes", href: "/pos-para-restaurantes", desc: "Comandero digital, control de mesas y recetas." },
      { name: "POS para Hoteles", href: "/pos-para-hoteles", desc: "Cargos a habitación e integración con PMS corporativo." },
      { name: "POS para Cafeterías", href: "/pos-para-cafeterias", desc: "Modificadores de platillos, aditivos y combos dinámicos." },
    ],
    features: [
      "Operación offline híbrida con sincronización en segundo plano.",
      "Integración nativa con terminales bancarias y básculas.",
      "Cierres de caja blindados con bitácora de arqueo.",
      "Monitoreo de inventario en tiempo real por sucursal.",
    ],
    specs: [
      { name: "Tolerancia a Desconexión", value: "Operación 100% offline para venta" },
      { name: "Hardware Compatible", value: "Impresoras térmicas, básculas, cajones y lectores" },
      { name: "Seguridad de Caja", value: "Permisos granulares por cajero" },
    ],
    faqs: [
      { q: "¿Cómo funciona el modo offline?", a: "El POS almacena localmente encriptadas todas las ventas del turno. Al detectar conectividad, realiza un handshake seguro y sincroniza la base de datos central." },
      { q: "¿Se pueden controlar existencias de múltiples sucursales?", a: "Sí, el módulo POS muestra existencias globales e interactúa con el ERP para sugerir transferencias entre bodegas." }
    ]
  },
  "business-intelligence": {
    title: "Business Intelligence y Analytics",
    category: "Business Intelligence",
    description: "Consolidación analítica e indicadores clave de rendimiento (KPIs) en tiempo real.",
    overview: "Transforme millones de registros transaccionales en decisiones de negocio informadas. Nuestro sistema extrae datos de CRM, ERP y POS y los unifica en tableros interactivos rápidos.",
    subsolutions: [
      { name: "Dashboard para Asociaciones", href: "/dashboard-para-asociaciones", desc: "Métricas de retención, ingresos y participación." },
      { name: "Dashboard para Cámaras Empresariales", href: "/dashboard-para-camaras-empresariales", desc: "Actividad industrial y reportes macroeconómicos." },
      { name: "Dashboard Ejecutivo", href: "/dashboard-ejecutivo", desc: "Métricas de rentabilidad y liquidez financiera para directores." },
      { name: "Dashboard Operativo", href: "/dashboard-operativo", desc: "Indicadores de productividad y cuellos de botella en almacén." },
    ],
    features: [
      "Consultas analíticas ultrarrápidas sobre almacenes de datos.",
      "Alertas operativas automatizadas vía correo o mensajería.",
      "Roles ejecutivos y tableros limitados por departamento.",
      "Exportación avanzada en formatos estructurados (CSV, Excel, JSON).",
    ],
    specs: [
      { name: "Motor de Consultas", value: "Vistas indexadas optimizadas" },
      { name: "Frecuencia de Actualización", value: "En tiempo real o programada (ej. cada hora)" },
      { name: "Visualizaciones", value: "Gráficos de dispersión, embudos, histogramas" },
    ],
    faqs: [
      { q: "¿El BI afecta el rendimiento de la operación diaria?", a: "No, las consultas analíticas se ejecutan sobre una réplica de lectura o un almacén de datos aislado para no impactar las transacciones activas." },
      { q: "¿Puedo programar reportes automáticos?", a: "Sí, configure alertas para enviar PDFs o informes detallados de forma diaria, semanal o mensual." }
    ]
  },
  "sistemas-especializados": {
    title: "Sistemas Especializados",
    category: "Enterprise Application Integration",
    description: "Soluciones a la medida para automatización de flujos de trabajo organizacionales.",
    overview: "Resolvemos requerimientos de software de alta especialización que no entran dentro de un CRM o ERP comercial tradicional.",
    subsolutions: [
      { name: "Gestión Documental", href: "/gestion-documental", desc: "Resguardo digital indexado y firmas electrónicas seguras." },
      { name: "Sistema de Ticketing", href: "/sistema-de-ticketing", desc: "Mesa de ayuda corporativa con SLAs automatizados." },
      { name: "Sistema de Solicitudes", href: "/sistema-de-solicitudes", desc: "Flujos de aprobación interna de gastos y requisiciones." },
      { name: "Control de Proyectos", href: "/control-de-proyectos", desc: "Hitos, asignación de tareas de ingeniería y seguimiento de horas." },
      { name: "Control Operativo", href: "/control-operativo", desc: "Telemetría y registro de incidentes en plantas industriales." },
    ],
    features: [
      "Modelado flexible de flujos de aprobación jerárquica.",
      "Indexación rápida de metadatos y búsqueda de texto completo.",
      "Registros inmutables de auditoría de procesos.",
      "Notificaciones automáticas ante desviaciones operativas.",
    ],
    specs: [
      { name: "Modularidad", value: "Independencia de bases de datos por subsistema" },
      { name: "Integrabilidad", value: "APIs RESTful integrales y webhooks de eventos" },
      { name: "Trazabilidad", value: "Registro criptográfico de firmas y aprobaciones" },
    ],
    faqs: [
      { q: "¿Cuánto tiempo toma implementar un sistema especializado?", a: "Varía dependiendo de la complejidad, pero gracias a nuestra base modular preconstruida, los tiempos de implementación se reducen en un 60% comparado con desarrollos tradicionales." },
      { q: "¿Se puede hospedar localmente (On-Premise)?", a: "Sí, nuestras soluciones soportan despliegues tanto en nubes públicas/privadas como servidores locales bajo estrictas normativas corporativas." }
    ]
  }
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const solution = solutionsData[slug];
  if (!solution) return {};

  return generatePageMetadata({
    title: solution.title,
    description: solution.description,
    path: `/soluciones/${slug}`,
  });
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = solutionsData[slug];

  if (!solution) {
    notFound();
  }

  const softwareSchema = getSoftwareSchema(solution.title, solution.description, solution.category);
  const faqSchema = getFAQSchema(solution.faqs);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header */}
      <div className="border-b border-[#374151] pb-8">
        <span className="text-xs font-mono text-[#2563EB] uppercase tracking-widest font-bold">
          FICHA TÉCNICA DE SOLUCIÓN
        </span>
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#F9FAFB] mt-2">
          {solution.title}
        </h1>
        <p className="text-sm text-[#F9FAFB]/70 mt-3 max-w-3xl leading-relaxed">
          {solution.overview}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Features list */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-lg font-display font-bold text-[#F9FAFB] border-l-2 border-[#2563EB] pl-3">
            Capacidades del Sistema
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {solution.features.map((feature, idx) => (
              <li key={idx} className="bg-[#111827] border border-[#374151] p-4 rounded flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-xs text-[#F9FAFB]/80 leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>

          {/* Subsolutions Map */}
          <div className="space-y-4 pt-4">
            <h2 className="text-lg font-display font-bold text-[#F9FAFB] border-l-2 border-[#2563EB] pl-3">
              Módulos Verticales Preconfigurados
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {solution.subsolutions.map((sub, idx) => (
                <div key={idx} className="border border-[#374151] bg-[#0A0F14] p-4 rounded hover:border-[#2563EB]/40 transition-colors">
                  <h3 className="text-xs font-mono font-bold text-[#2563EB]">
                    {sub.name}
                  </h3>
                  <p className="text-[11px] text-[#F9FAFB]/60 mt-1 leading-relaxed">
                    {sub.desc}
                  </p>
                  <span className="text-[9px] font-mono text-[#F9FAFB]/40 mt-3 block">
                    PATH: {sub.href}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Specs & Sidebar */}
        <div className="space-y-6">
          <div className="bg-[#111827] border border-[#374151] p-6 rounded space-y-4">
            <h3 className="text-xs font-mono font-bold tracking-widest text-[#F9FAFB]/50 uppercase">
              Métricas e Infraestructura
            </h3>
            <ul className="space-y-3">
              {solution.specs.map((spec, idx) => (
                <li key={idx} className="border-b border-[#374151]/50 pb-2 last:border-0 last:pb-0">
                  <span className="text-[10px] font-mono text-[#F9FAFB]/40 block uppercase">{spec.name}</span>
                  <span className="text-xs font-mono text-[#2563EB] font-bold mt-0.5 block">{spec.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#2563EB]/5 border border-[#2563EB]/40 p-6 rounded space-y-4">
            <h4 className="text-sm font-display font-bold text-[#F9FAFB]">
              ¿Requiere una evaluación técnica?
            </h4>
            <p className="text-xs text-[#F9FAFB]/70 leading-relaxed">
              Consulte con nuestro equipo de ingeniería la viabilidad técnica de implementar {solution.title} en su infraestructura actual.
            </p>
            <Link
              href="/demo"
              className="inline-flex items-center w-full justify-center bg-[#2563EB] hover:bg-[#2563EB]/90 text-white font-mono font-bold text-[10px] uppercase tracking-wider py-2.5 rounded transition-all"
            >
              Iniciar Evaluación <ArrowRight className="w-3.5 h-3.5 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="border-t border-[#374151] pt-12 space-y-6">
        <h2 className="text-xl font-display font-bold text-[#F9FAFB]">
          Preguntas Frecuentes sobre la Implementación
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solution.faqs.map((faq, idx) => (
            <div key={idx} className="bg-[#111827] border border-[#374151] p-5 rounded space-y-2">
              <h3 className="text-sm font-display font-bold text-[#F9FAFB] flex items-start">
                <span className="text-[#2563EB] font-mono mr-2">Q:</span>
                {faq.q}
              </h3>
              <p className="text-xs text-[#F9FAFB]/75 leading-relaxed pl-5">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
