import { generatePageMetadata } from "@/lib/seo";
import { ShieldAlert, Terminal, Eye, HeartHandshake } from "lucide-react";

export const metadata = generatePageMetadata({
  title: "Sobre Valcore",
  description: "Filosofía institucional, misión, visión y principios de ingeniería de software e infraestructura crítica.",
  path: "/nosotros",
});

export default function NosotrosPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="border-b border-[#374151] pb-8">
        <span className="text-xs font-mono text-[#2563EB] uppercase tracking-widest font-bold">
          PERFIL INSTITUCIONAL
        </span>
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#F9FAFB] mt-2">
          Socio Tecnológico Crítico
        </h1>
        <p className="text-sm text-[#F9FAFB]/70 mt-3 max-w-3xl leading-relaxed">
          No somos una agencia de desarrollo ni una startup en fase experimental. Somos una firma de ingeniería dedicada a crear, implementar y resguardar la infraestructura digital operativa de corporativos e instituciones públicas.
        </p>
      </div>

      {/* Mision / Vision / Filosofia */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#111827] border border-[#374151] p-6 rounded space-y-3">
          <div className="flex items-center space-x-2 text-[#2563EB]">
            <Terminal className="w-5 h-5" />
            <h3 className="font-display font-bold text-sm text-[#F9FAFB]">MISIÓN</h3>
          </div>
          <p className="text-xs text-[#F9FAFB]/60 leading-relaxed">
            Asegurar la continuidad operativa de nuestros clientes mediante el desarrollo e implementación de sistemas informáticos de alta disponibilidad y consistencia.
          </p>
        </div>

        <div className="bg-[#111827] border border-[#374151] p-6 rounded space-y-3">
          <div className="flex items-center space-x-2 text-[#2563EB]">
            <Eye className="w-5 h-5" />
            <h3 className="font-display font-bold text-sm text-[#F9FAFB]">VISIÓN</h3>
          </div>
          <p className="text-xs text-[#F9FAFB]/60 leading-relaxed">
            Consolidarnos como el principal proveedor de sistemas transaccionales y de gestión crítica para organizaciones de alto nivel en Latinoamérica.
          </p>
        </div>

        <div className="bg-[#111827] border border-[#374151] p-6 rounded space-y-3">
          <div className="flex items-center space-x-2 text-[#2563EB]">
            <HeartHandshake className="w-5 h-5" />
            <h3 className="font-display font-bold text-sm text-[#F9FAFB]">FILOSOFÍA</h3>
          </div>
          <p className="text-xs text-[#F9FAFB]/60 leading-relaxed">
            La estabilidad y la seguridad del sistema son innegociables. Si un sistema operativo organizacional falla, la operación de la organización se detiene.
          </p>
        </div>
      </div>

      {/* Principios de Ingenieria */}
      <div className="space-y-6">
        <h2 className="text-lg font-display font-bold text-[#F9FAFB] border-l-2 border-[#2563EB] pl-3">
          Principios de Ingeniería Valcore
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              num: "01",
              title: "Tolerancia Cero a Fallos",
              desc: "Diseñamos para el peor escenario. Cada base de datos, API y servidor cuenta con replicación y sistemas automáticos de failover ante incidentes."
            },
            {
              num: "02",
              title: "Modularidad Estricta",
              desc: "Aislamos lógica de negocio de la capa de datos. Evitamos el acoplamiento rígido, permitiendo despliegues modulares controlados sin suspender la operación."
            },
            {
              num: "03",
              title: "Soberanía Tecnológica",
              desc: "Garantizamos el resguardo local e independiente de la información. Cada cliente posee el control total sobre la base de datos de sus sucursales u oficinas."
            },
            {
              num: "04",
              title: "Monitoreo y Telemetría Proactiva",
              desc: "No esperamos a recibir un reporte. Monitoreamos en tiempo real el performance, la latencia y la consistencia de cada nodo de producción."
            }
          ].map((princ) => (
            <div key={princ.num} className="bg-[#111827] border border-[#374151] p-5 rounded flex space-x-4">
              <span className="font-mono text-lg font-bold text-[#2563EB]">{princ.num}</span>
              <div>
                <h4 className="text-sm font-display font-bold text-[#F9FAFB]">{princ.title}</h4>
                <p className="text-xs text-[#F9FAFB]/60 leading-relaxed mt-1">{princ.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enfoque Organizacional */}
      <div className="bg-[#111827] border border-[#374151] p-6 sm:p-8 rounded space-y-4">
        <div className="flex items-center space-x-2 text-amber-500">
          <ShieldAlert className="w-5 h-5" />
          <h3 className="font-mono text-xs font-bold uppercase tracking-wider">Compromiso Operativo</h3>
        </div>
        <p className="text-xs text-[#F9FAFB]/75 leading-relaxed">
          Nuestra estructura corporativa está orientada al mantenimiento preventivo y soporte de ingeniería directo de nivel 2 y 3. No subcontratamos el soporte ni operamos a través de call centers genéricos. Cada cuenta corporativa cuenta con un ingeniero asignado directo para auditorías periódicas de rendimiento.
        </p>
      </div>
    </div>
  );
}
