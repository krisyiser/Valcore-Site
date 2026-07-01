import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { routesData } from "@/lib/routesData";
import { generatePageMetadata, getSoftwareSchema, getFAQSchema } from "@/lib/seo";

interface PageProps {
  params: Promise<{ rootSlug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { rootSlug } = await params;
  const data = routesData[rootSlug];
  if (!data) return {};

  return generatePageMetadata({
    title: data.title,
    description: data.description,
    path: `/${rootSlug}`,
  });
}

export async function generateStaticParams() {
  return Object.keys(routesData).map((slug) => ({
    rootSlug: slug,
  }));
}

export default async function DynamicRootPage({ params }: PageProps) {
  const { rootSlug } = await params;
  const data = routesData[rootSlug];

  if (!data) {
    notFound();
  }

  const softwareSchema = getSoftwareSchema(data.title, data.description, data.category);
  const faqSchema = getFAQSchema(data.faqs);

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

      {/* Header / Intro */}
      <div className="border-b border-[#374151] pb-8">
        <div className="flex items-center space-x-2 text-[#2563EB]">
          <span className="text-[10px] font-mono uppercase tracking-widest font-bold">
            ESPECIFICACIÓN / {data.category}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#F9FAFB] mt-2">
          {data.title}
        </h1>
        <p className="text-sm text-[#F9FAFB]/70 mt-3 max-w-3xl leading-relaxed">
          {data.content}
        </p>
      </div>

      {/* Body Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Core Capabilities */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-lg font-display font-bold text-[#F9FAFB] border-l-2 border-[#2563EB] pl-3">
            Características de la Infraestructura
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.features.map((feature, idx) => (
              <li key={idx} className="bg-[#111827] border border-[#374151] p-4 rounded flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-xs text-[#F9FAFB]/80 leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>

          {/* Keywords / Topic Clusters SEO */}
          <div className="bg-[#111827] border border-[#374151] p-4 rounded mt-4">
            <span className="text-[10px] font-mono text-[#F9FAFB]/40 uppercase block mb-2">Topic Cluster Keywords:</span>
            <div className="flex flex-wrap gap-2">
              {data.keywords.map((kw, idx) => (
                <span key={idx} className="text-[9px] font-mono bg-[#0A0F14] border border-[#374151] px-2 py-0.5 rounded text-[#2563EB]">
                  #{kw.replace(/\s+/g, "-")}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Specs & Evaluation Sidebar */}
        <div className="space-y-6">
          <div className="bg-[#111827] border border-[#374151] p-6 rounded space-y-4">
            <h3 className="text-xs font-mono font-bold tracking-widest text-[#F9FAFB]/50 uppercase">
              Parámetros Técnicos
            </h3>
            <ul className="space-y-3">
              {data.specs.map((spec, idx) => (
                <li key={idx} className="border-b border-[#374151]/50 pb-2 last:border-0 last:pb-0">
                  <span className="text-[10px] font-mono text-[#F9FAFB]/40 block uppercase">{spec.label}</span>
                  <span className="text-xs font-mono text-[#2563EB] font-bold mt-0.5 block">{spec.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#2563EB]/5 border border-[#2563EB]/40 p-6 rounded space-y-4">
            <h4 className="text-sm font-display font-bold text-[#F9FAFB]">
              Iniciar Evaluación Técnica
            </h4>
            <p className="text-xs text-[#F9FAFB]/70 leading-relaxed">
              Descubra la viabilidad del sistema {data.title} de acuerdo a los requerimientos y dimensionamiento de su organización.
            </p>
            <Link
              href="/demo"
              className="inline-flex items-center w-full justify-center bg-[#2563EB] hover:bg-[#2563EB]/90 text-white font-mono font-bold text-[10px] uppercase tracking-wider py-2.5 rounded transition-all"
            >
              Solicitar Evaluación <ArrowRight className="w-3.5 h-3.5 ml-2" />
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
          {data.faqs.map((faq, idx) => (
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
