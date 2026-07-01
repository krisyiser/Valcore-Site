import Link from "next/link";

const sections = [
  {
    title: "SOLUCIONES",
    links: [
      { label: "CRM", href: "/soluciones/crm" },
      { label: "ERP", href: "/soluciones/erp" },
      { label: "POS", href: "/soluciones/pos" },
      { label: "Business Intelligence", href: "/soluciones/business-intelligence" },
      { label: "Sistemas Especializados", href: "/soluciones/sistemas-especializados" },
    ],
  },
  {
    title: "VERTICALES",
    links: [
      { label: "POS Farmacias", href: "/soluciones/pos-para-farmacias" },
      { label: "POS Restaurantes", href: "/soluciones/pos-para-restaurantes" },
    ],
  },
  {
    title: "INFRAESTRUCTURA",
    links: [
      { label: "Arquitectura Modular", href: "/tecnologia" },
      { label: "Seguridad y Encriptación", href: "/tecnologia" },
      { label: "Gobierno de Datos", href: "/tecnologia" },
    ],
  },
  {
    title: "COMPAÑÍA",
    links: [
      { label: "Casos de Éxito", href: "/implementaciones" },
      { label: "Solicitar Evaluación", href: "/solicitar-demo" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#E2E8F0] pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo & Technical Details */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#2563EB] flex items-center justify-center font-display font-bold text-white rounded-none">
                V
              </div>
              <span className="font-display font-bold text-lg tracking-wider text-[#0F172A]">
                VALCORE
              </span>
            </div>
            <p className="text-xs text-[#64748B] max-w-sm">
              Infraestructura de software crítico y sistemas operativos organizacionales. Diseñado para garantizar la continuidad y el control operativo de corporaciones y gobiernos.
            </p>
            <div className="border border-[#E2E8F0] rounded-none p-3 bg-[#F8FAFC] space-y-1.5 max-w-sm">
              <div className="flex justify-between items-center text-[10px] font-mono">
                <span className="text-[#64748B]">ESTADO SISTEMA:</span>
                <span className="text-[#059669] flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#059669] rounded-full mr-1.5 animate-pulse"></span>
                  OPERATIVO (99.99%)
                </span>
              </div>
              <div className="flex justify-between items-center text-[10px] font-mono border-t border-[#E2E8F0] pt-1.5">
                <span className="text-[#64748B]">NODO CENTRAL:</span>
                <span className="text-[#0F172A]">MX-EAST-01</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-mono font-bold tracking-wider text-[#9CA3AF] mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-[#334155] hover:text-[#2563EB] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#64748B] font-mono">
          <div>
            &copy; {new Date().getFullYear()} Valcore Technologies. Todos los derechos reservados.
          </div>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/" className="hover:text-[#2563EB]">Privacidad</Link>
            <Link href="/" className="hover:text-[#2563EB]">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
