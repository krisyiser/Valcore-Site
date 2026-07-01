import { generatePageMetadata } from "@/lib/seo";
import { BookOpen, FolderOpen, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = generatePageMetadata({
  title: "Recursos y Documentación Técnica",
  description: "Biblioteca de recursos, guías y documentación sobre CRM, ERP, POS, Automatización y Transformación Digital.",
  path: "/recursos",
});

const categories = [
  "CRM", "ERP", "POS", "Automatización", "Business Intelligence",
  "Transformación Digital", "Gobierno Digital", "Hotelería",
  "Restaurantes", "Salud", "Comercio"
];

const articles = [
  {
    category: "Gobierno Digital",
    title: "Estrategias de Recaudación y Armonización Contable Municipal",
    desc: "Cómo la integración presupuestaria y digitalización de trámites reduce la morosidad catastral e incrementa la liquidez local sin aumentar impuestos.",
    readTime: "8 min"
  },
  {
    category: "Hotelería",
    title: "Reducción de Mermas de A&B con Sistemas ERP Conectados al POS",
    desc: "Guía técnica para automatizar la explosión de recetas de inventario y optimizar la cadena de suministro en centros de consumo hoteleros.",
    readTime: "6 min"
  },
  {
    category: "CRM",
    title: "Optimización de Embudo de Conversión para Pacientes de Laboratorio",
    desc: "Uso de flujos automáticos de confirmación y entrega encriptada de resultados clínicos para incrementar la retención de pacientes.",
    readTime: "5 min"
  },
  {
    category: "Automatización",
    title: "Soberanía de Datos: Despliegues de Software On-Premise vs Nube Privada",
    desc: "Análisis de riesgos, costos y cumplimiento normativo para la instalación de sistemas transaccionales críticos en corporativos y gobierno.",
    readTime: "10 min"
  }
];

export default function RecursosPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="border-b border-[#374151] pb-8">
        <span className="text-xs font-mono text-[#2563EB] uppercase tracking-widest font-bold">
          CENTRO DE CONOCIMIENTO
        </span>
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#F9FAFB] mt-2">
          Recursos y Análisis Técnico
        </h1>
        <p className="text-sm text-[#F9FAFB]/70 mt-3 max-w-3xl leading-relaxed">
          Artículos estructurados, guías operativas e investigaciones sobre infraestructura tecnológica empresarial y digitalización.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Categories Sidebar */}
        <div className="space-y-4">
          <div className="bg-[#111827] border border-[#374151] p-4 rounded">
            <h3 className="text-xs font-mono font-bold text-[#F9FAFB]/50 uppercase tracking-widest mb-3 flex items-center">
              <FolderOpen className="w-4 h-4 mr-2 text-[#2563EB]" />
              Categorías
            </h3>
            <ul className="space-y-1.5">
              {categories.map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/recursos?categoria=${cat.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-xs text-[#F9FAFB]/70 hover:text-[#2563EB] hover:underline block py-1"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Resources / Articles List */}
        <div className="lg:col-span-3 space-y-6">
          <h2 className="text-lg font-display font-bold text-[#F9FAFB] border-l-2 border-[#2563EB] pl-3 mb-6">
            Publicaciones Recientes
          </h2>

          <div className="grid grid-cols-1 gap-6">
            {articles.map((art, idx) => (
              <div key={idx} className="bg-[#111827] border border-[#374151] p-6 rounded hover:border-[#2563EB]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#2563EB]">
                    <span className="uppercase tracking-widest font-bold">{art.category}</span>
                    <span className="text-[#F9FAFB]/40">Lectura: {art.readTime}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-display font-bold text-[#F9FAFB] mt-2 mb-3">
                    {art.title}
                  </h3>
                  <p className="text-xs text-[#F9FAFB]/60 leading-relaxed mb-4">
                    {art.desc}
                  </p>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center text-[10px] font-mono text-[#2563EB] hover:underline uppercase tracking-wider w-fit"
                >
                  Descargar Documento Técnico <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
