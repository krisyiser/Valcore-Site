import { EvaluationMultiStep } from '../../components/forms/EvaluationMultiStep'

/**
 * @description Ruta estática dedicada a la evaluación y filtrado de leads corporativos institucionales de Valcore.
 */
export default function SolicitarDemoPage() {
  return (
    <main className="w-full max-w-[1440px] mx-auto px-6 py-16 flex-grow flex flex-col justify-center bg-[#F8FAFC]">
      <div className="max-w-xl mx-auto w-full mb-8 border-l-2 border-[#2563EB] pl-4">
        <h1 className="font-display font-bold text-2xl text-[#0F172A] uppercase tracking-tight">
          Inicie una evaluación técnica corporativa
        </h1>
        <p className="font-sans text-sm text-[#64748B] mt-1">
          Nuestros ingenieros analizan la compatibilidad de procesos, la viabilidad de la migración de bases de datos existentes y determinan la arquitectura óptima.
        </p>
      </div>

      <EvaluationMultiStep />
    </main>
  )
}
