"use client";

import { useState } from "react";
import { Database, Cpu, Cog, BarChart2, Eye } from "lucide-react";

const nodes = [
  {
    id: "datos",
    label: "01. CAPA DE DATOS",
    title: "Ingesta y Almacenamiento",
    icon: Database,
    desc: "Bases de datos redundantes de alta consistencia, replicación activa-activa y gobierno estricto de información sensible.",
    metrics: "Disponibilidad: 99.999% | Latencia de lectura: <5ms | Transacciones/seg: 50,000+",
  },
  {
    id: "procesamiento",
    label: "02. PROCESAMIENTO",
    title: "Motor de Reglas y Backend",
    icon: Cpu,
    desc: "Procesamiento distribuido con aislamiento en memoria, orquestación de colas críticas y manejo de transacciones complejas sin latencia.",
    metrics: "Ejecución distribuida | Tiempos de ciclo: <12ms | Replicación: Activo-Pasivo",
  },
  {
    id: "automatizacion",
    label: "03. AUTOMATIZACIÓN",
    title: "Flujos de Trabajo Críticos",
    icon: Cog,
    desc: "Motores asíncronos para ejecución de procesos recurrentes, integraciones API seguras y conciliación de inventario/pagos en tiempo real.",
    metrics: "Colas de prioridad | Redundancia automática | Reintento automático",
  },
  {
    id: "inteligencia",
    label: "04. INTELIGENCIA",
    title: "Análisis y Modelado",
    icon: BarChart2,
    desc: "Consolidación de indicadores de productividad, almacenamiento analítico y agregación en tiempo real para tableros ejecutivos.",
    metrics: "Consultas optimizadas | Vistas materializadas | Agrupación de datos histórica",
  },
  {
    id: "decision",
    label: "05. DECISIÓN",
    title: "Consola de Control Directiva",
    icon: Eye,
    desc: "Dashboards unificados con actualizaciones en tiempo real que permiten a los directores tomar decisiones operativas sustentadas en datos duros.",
    metrics: "Actualizaciones Websocket | Reportes automatizados | Exportación estructurada",
  },
];

export default function ArchitectureDiagram() {
  const [activeNode, setActiveNode] = useState(nodes[0]);

  return (
    <div className="bg-[#111827] border border-[#374151] rounded p-6 sm:p-8">
      <div className="text-center mb-8">
        <span className="text-[10px] font-mono text-[#2563EB] tracking-widest uppercase">
          Flujo Crítico de Operación
        </span>
        <h3 className="text-xl sm:text-2xl font-display font-bold text-[#F9FAFB] mt-1">
          Arquitectura Valcore Core Engine
        </h3>
        <p className="text-xs text-[#F9FAFB]/60 max-w-lg mx-auto mt-2">
          Haga clic en cualquiera de los bloques para visualizar la telemetría, latencia, métricas y especificaciones técnicas de la capa.
        </p>
      </div>

      {/* SVG Pipeline Diagram */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Diagram Flow */}
        <div className="flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-4 w-full lg:w-1/2">
          {nodes.map((node, idx) => {
            const Icon = node.icon;
            const isSelected = activeNode.id === node.id;
            return (
              <div key={node.id} className="flex flex-col sm:flex-row lg:flex-col items-center w-full">
                {/* Node Box */}
                <button
                  onClick={() => setActiveNode(node)}
                  className={`w-full text-left p-4 border rounded transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#2563EB]/10 border-[#2563EB] shadow-md shadow-[#2563EB]/10"
                      : "bg-[#0A0F14] border-[#374151] hover:border-[#F9FAFB]/30"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded ${isSelected ? "bg-[#2563EB] text-white" : "bg-[#111827] text-[#F9FAFB]/60"}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-[#2563EB] block">{node.label}</span>
                      <span className="text-xs font-display font-semibold text-[#F9FAFB]">{node.title}</span>
                    </div>
                  </div>
                </button>

                {/* Arrow Connector (Only show if not last item) */}
                {idx < nodes.length - 1 && (
                  <div className="flex justify-center items-center h-6 w-full sm:h-auto sm:w-8 lg:h-6 lg:w-full">
                    {/* Vertical for lg, horizontal for sm */}
                    <div className="h-6 w-[1px] bg-[#374151] sm:hidden lg:block"></div>
                    <div className="w-8 h-[1px] bg-[#374151] hidden sm:block lg:hidden"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Telemetry Display */}
        <div className="w-full lg:w-1/2 bg-[#0A0F14] border border-[#374151] p-6 rounded flex flex-col justify-between min-h-[280px]">
          <div>
            <div className="flex items-center justify-between border-b border-[#374151] pb-3 mb-4">
              <span className="text-xs font-mono text-[#2563EB] uppercase tracking-wider">
                {activeNode.label}
              </span>
              <span className="text-[10px] font-mono bg-[#111827] text-[#F9FAFB]/60 border border-[#374151] px-2 py-0.5 rounded">
                TELEMETRÍA ACTIVA
              </span>
            </div>
            <h4 className="text-lg font-display font-bold text-[#F9FAFB]">
              {activeNode.title}
            </h4>
            <p className="text-sm text-[#F9FAFB]/75 mt-3 leading-relaxed">
              {activeNode.desc}
            </p>
          </div>

          <div className="mt-8 border-t border-[#374151]/50 pt-4">
            <span className="text-[10px] font-mono text-[#F9FAFB]/40 uppercase tracking-widest block mb-1">
              Indicadores Técnicos
            </span>
            <div className="text-xs font-mono text-[#2563EB] bg-[#2563EB]/5 border border-[#2563EB]/25 p-2 rounded">
              {activeNode.metrics}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
