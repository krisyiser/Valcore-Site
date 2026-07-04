"use client";

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Shield,
  Cpu,
  Activity,
  LayoutGrid,
  Terminal,
  ArrowRight,
  Check,
  X,
  Database,
  Zap,
  Globe,
  CheckCircle,
  AlertTriangle,
  HelpCircle,
  Clock,
  Sparkles,
  ChevronRight,
  MessageSquare,
  Users,
  Wrench,
  Hotel,
  Store,
  FolderLock
} from 'lucide-react'
import { ButtonCorporate } from '../components/ui/ButtonCorporate'

// React Bits Animations
import SplitText from '../components/animations/SplitText'
import BlurText from '../components/animations/BlurText'
import ScrollFloat from '../components/animations/ScrollFloat'
import RotatingText from '../components/animations/RotatingText'
import CountUp from '../components/animations/CountUp'

import dynamic from 'next/dynamic'

// Three.js-based React Bits Animations loaded dynamically on client-side only
const MagicRings = dynamic(() => import('../components/animations/MagicRings'), { ssr: false })
const GhostCursor = dynamic(() => import('../components/animations/GhostCursor'), { ssr: false })
const LiquidEther = dynamic(() => import('../components/animations/LiquidEther'), { ssr: false })

export default function HomePage() {
  const [selectedSector, setSelectedSector] = useState<string | null>(null);

  const sectorSolutions = [
    {
      id: 'abarrotes',
      title: 'POS Abarrotes / Miscelánea',
      icon: Store,
      desc: 'Diseñado para tiendas y pequeños comercios que buscan un control riguroso de entradas, salidas y existencias.',
      features: ['Control de inventario masivo', 'Ventas rápidas por código de barras', 'Reporte de merma y ganancias instantáneo']
    },
    {
      id: 'farmacia',
      title: 'POS Farmacia',
      icon: Shield,
      desc: 'Incluye módulos especializados para control sanitario, registro de receta electrónica y manejo de inventario regulado.',
      features: ['Validación de recetas', 'Control de lotes y caducidades', 'Cumplimiento normativo COFEPRIS/SAT']
    },
    {
      id: 'restaurante',
      title: 'POS Restaurante',
      icon: Activity,
      desc: 'Optimizado para la gestión de comandas, distribución de mesas, control de cocina, inventario de insumos e integración con delivery.',
      features: ['Mapeo de mesas digital', 'Impresión y pantallas de cocina LAN', 'Recetas desglosadas por insumo']
    },
    {
      id: 'super',
      title: 'POS Mini-Súper',
      icon: LayoutGrid,
      desc: 'Herramientas avanzadas para manejo de múltiples cajas simultáneas, control de mayoreo/menudeo e inventarios masivos.',
      features: ['Conexión multicaja de alta velocidad', 'Promociones y precios por escala', 'Sincronización asíncrona robusta']
    },
    {
      id: 'talleres',
      title: 'Sistema para Talleres Mecánicos',
      icon: Wrench,
      desc: 'Control total de órdenes de servicio, estatus de reparaciones, inventario de refacciones y productividad de mecánicos.',
      features: ['Historial vehicular por placas', 'Estatus de reparaciones vía WhatsApp', 'Asignación y destajos de mecánicos']
    },
    {
      id: 'hotelero',
      title: 'Sistema Hotelero Básico',
      icon: Hotel,
      desc: 'Administración de reservaciones, control de huéspedes, asignación de habitaciones y auditoría de prendas.',
      features: ['Calendario interactivo de ocupación', 'Check-in y Check-out express', 'Control de consumos por habitación']
    }
  ];

  return (
    <main className="w-full bg-zinc-950 text-zinc-100 flex-1 flex flex-col relative overflow-hidden">
      {/* GhostCursor covering page */}
      <GhostCursor
        color="#a1a1aa"
        brightness={0.8}
        edgeIntensity={0.2}
        trailLength={40}
        inertia={0.5}
        grainIntensity={0.02}
        bloomStrength={0.08}
        bloomRadius={0.8}
        bloomThreshold={0.05}
        zIndex={5}
      />

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-white/[0.02] blur-[150px] rounded-full pointer-events-none" />


      {/* HERO WRAPPER WITH LIQUID ETHER BACKGROUND */}
      <div className="relative w-full overflow-hidden border-b border-white/10 bg-zinc-950">
        <div className="absolute inset-0 z-0 opacity-40">
          <LiquidEther
            colors={['#000000', '#18181b', '#27272a', '#52525b', '#71717a', '#a1a1aa', '#ffffff']}
            mouseForce={20}
            cursorSize={80}
            isViscous={false}
            viscous={30}
            iterationsViscous={8}
            iterationsPoisson={16}
            resolution={0.25}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.4}
            autoIntensity={2.0}
          />
        </div>

        {/* 1. SECCIÓN HERO (Primer Scroll - Captación Inmediata) */}
        <section className="relative w-full max-w-7xl mx-auto px-6 pt-20 pb-20 flex flex-col lg:flex-row items-center justify-between gap-12 z-10">
          <div className="flex-1 flex flex-col items-start text-left max-w-2xl">

            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.25] uppercase mb-6 text-glow flex flex-wrap items-center gap-x-2 gap-y-2">
              <SplitText
                text="El software administrativo más completo para tu"
                className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.05] uppercase inline text-glow"
                delay={20}
                duration={0.6}
                textAlign="left"
                tag="span"
              />
              <span className="inline-flex">
                <RotatingText
                  texts={['negocio.', 'abarrotes.', 'farmacia.', 'restaurante.', 'taller.', 'hotel.']}
                  mainClassName="px-3 py-1 text-white bg-zinc-800 border border-zinc-700 font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] uppercase inline-block text-glow"
                  elementLevelClassName="text-white"
                  splitLevelClassName="overflow-hidden"
                  staggerFrom="last"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-120%", opacity: 0 }}
                  staggerDuration={0.02}
                  rotationInterval={2500}
                  animatePresenceMode="popLayout"
                />
              </span>
              <span className="text-zinc-300 inline-block">Sin pagar de más.</span>
            </h1>

            {/* BlurText on subtitle */}
            <BlurText
              text="Toma el control total de tus ventas, inventarios y finanzas con una herramienta robusta, estable y diseñada para la realidad de las PyMEs mexicanas. Mejor que los caros, más completo que los baratos."
              delay={10}
              animateBy="words"
              direction="bottom"
              className="font-sans text-sm sm:text-base text-white leading-relaxed mb-6"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="border border-white/10 p-4 bg-zinc-900/40 backdrop-blur-md mb-8 w-full font-mono flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
            >
              <div>
                <div className="text-[10px] text-zinc-100 uppercase tracking-widest font-semibold">Planes de Entrada</div>
                <div className="text-xl font-bold text-white mt-1">
                  Desde $<CountUp to={799} from={500} duration={0.5} separator="," /> <span className="text-xs text-zinc-100 font-normal font-semibold">/ mes</span>
                </div>
              </div>
              <div className="text-[11px] text-white leading-relaxed border-t sm:border-t-0 sm:border-l border-white/10 pt-3 sm:pt-0 sm:pl-4">
                Implementación profesional, migración de datos y capacitación incluidas en tu suscripción, sin cargos sorpresa.
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Link href="/solicitar-demo">
                <ButtonCorporate variant="primary" size="md" className="w-full sm:w-auto cursor-pointer group">
                  <span>Agendar demo gratuita</span>
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </ButtonCorporate>
              </Link>
              <a href="#soluciones">
                <ButtonCorporate variant="secondary" size="md" className="w-full sm:w-auto cursor-pointer">
                  Ver soluciones sectoriales
                </ButtonCorporate>
              </a>
            </motion.div>
          </div>

          {/* MOCKUP VISUAL INTERFACE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex-1 w-full max-w-lg lg:max-w-xl border border-white/10 bg-zinc-950 p-3 relative overflow-hidden group"
          >
            {/* MagicRings behind the mockup */}
            <div className="absolute -inset-12 z-0 opacity-40 pointer-events-none">
              <MagicRings
                color="#52525b"
                colorTwo="#ffffff"
                ringCount={5}
                speed={0.8}
                attenuation={16}
                lineThickness={1}
                baseRadius={0.25}
                radiusStep={0.08}
                scaleRate={0.05}
                opacity={0.6}
                blur={0.5}
                noiseAmount={0.01}
                rotation={20}
                ringGap={1.3}
                fadeIn={0.4}
                fadeOut={0.8}
                followMouse={true}
                mouseInfluence={0.12}
                hoverScale={1.15}
                parallax={0.03}
                clickBurst={true}
              />
            </div>

            <div className="relative z-10">
              {/* Decorative browser controls */}
              <div className="flex items-center gap-1.5 border-b border-white/10 pb-3 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-800"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-800"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-800"></span>
                <span className="text-[10px] font-mono text-zinc-400 ml-4 font-semibold">VALCORE POS / TERMINAL LAN</span>
              </div>

              <div className="aspect-[4/3] bg-zinc-900/60 flex flex-col justify-between p-4 font-mono">
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-[10px] text-zinc-300 font-semibold">TICKET #28931</span>
                  <span className="text-[10px] text-emerald-400">ESTADO: CONECTADO [LAN]</span>
                </div>

                <div className="flex-1 my-4 flex flex-col justify-center gap-2">
                  <div className="flex justify-between text-xs border-b border-white/5 py-1">
                    <span className="text-zinc-300">2x Harina de Trigo 1Kg</span>
                    <span className="text-white">$38.00</span>
                  </div>
                  <div className="flex justify-between text-xs border-b border-white/5 py-1">
                    <span className="text-zinc-300">1x Aceite Vegetal 1L</span>
                    <span className="text-white">$45.00</span>
                  </div>
                  <div className="flex justify-between text-xs border-b border-white/5 py-1">
                    <span className="text-zinc-300">5x Refresco Cola 600ml</span>
                    <span className="text-white">$95.00</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold border-t border-white/15 pt-2 mt-2">
                    <span className="text-white">TOTAL VENTA</span>
                    <span className="text-white">$178.00 MXN</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 border-t border-white/5 pt-3">
                  <div className="border border-white/10 bg-white/5 p-2 text-center">
                    <div className="text-[8px] text-zinc-300 font-semibold">CORTE DIARIO</div>
                    <div className="text-xs font-bold text-white mt-0.5">
                      $<CountUp to={14230} from={10000} duration={0.5} separator="," />
                    </div>
                  </div>
                  <div className="border border-white/10 bg-white/5 p-2 text-center">
                    <div className="text-[8px] text-zinc-300 font-semibold">OPERACIONES</div>
                    <div className="text-xs font-bold text-white mt-0.5">
                      <CountUp to={84} from={10} duration={0.5} />
                    </div>
                  </div>
                  <div className="border border-white/10 bg-white/5 p-2 text-center">
                    <div className="text-[8px] text-zinc-300 font-semibold">SOPORTE SLA</div>
                    <div className="text-xs font-bold text-emerald-400 mt-0.5">
                      <CountUp to={100} from={0} duration={0.5} />% OK
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>

      {/* METRICS SHOWCASE BAR */}
      <section className="border-y border-white/10 bg-black/40 backdrop-blur-md py-8 z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: "Tiempo de Respuesta LAN", value: 15, suffix: "ms", prefix: "< ", desc: "Consultas de base de datos ultrarrápidas" },
            { label: "Redundancia Activa", value: 99.999, suffix: "%", prefix: "", desc: "Cero dependencias de nube pública" },
            { label: "Sincronización Inteligente", value: 100, suffix: "%", prefix: "", desc: "Consolidación de datos asíncrona" },
            { label: "Cumplimiento Fiscal", value: 4, prefix: "CFDI ", suffix: ".0", desc: "Conexión directa homologada SAT" }
          ].map((metric, idx) => (
            <div key={idx} className="flex flex-col border-l border-white/10 pl-6 first:border-none">
              <span className="text-[10px] font-mono uppercase tracking-widest text-white font-semibold">{metric.label}</span>
              <span className="text-2xl sm:text-3xl font-display font-extrabold text-white my-1">
                {metric.prefix}
                <CountUp to={metric.value} from={0} duration={0.5} separator="," />
                {metric.suffix}
              </span>
              <span className="text-[11px] text-zinc-100">{metric.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 2. SECCIÓN DE DOLORES Y SOLUCIÓN (Activación de la Necesidad) */}
      <section className="border-t border-white/10 bg-zinc-950 py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-display font-bold uppercase tracking-tight text-white leading-none">
              ¿Cansado de pagar de más por software inestable?
            </h2>
            <p className="text-white text-sm leading-relaxed">
              Los dueños de negocios en México se enfrentan a un dilema constante. Por un lado, existen soluciones potentes con precios elevados que superan los $3,500 mensuales y procesos de configuración agotadores. Por el otro, opciones económicas pero extremadamente limitadas, sin soporte técnico y sin adaptación al contexto de nuestro país.
            </p>
          </div>

          <div className="border border-white/10 p-8 bg-white/[0.01] backdrop-blur-md space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-none bg-white flex items-center justify-center text-black font-extrabold font-mono">✓</div>
              <h3 className="font-display font-bold text-sm uppercase tracking-wider text-white">La Solución Valcore</h3>
            </div>
            <p className="text-white text-sm leading-relaxed">
              Democratizamos el acceso a software profesional. Te entregamos una solución completa: tecnología estable y de alto rendimiento, precio justo, puesta en marcha guiada por expertos y respaldo técnico humano continuo.
            </p>
          </div>
        </div>
      </section>

      {/* 3. BLOQUE DE SEGURIDAD ABSOLUTA (Derribando la Mayor Objeción) */}
      <section className="border-t border-white/10 bg-zinc-900/30 py-20 z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 flex flex-col justify-center space-y-4">

            {/* ScrollFloat text effect for security block title */}
            <ScrollFloat
              animationDuration={0.8}
              ease="back.out(1.5)"
              stagger={0.02}
              textClassName="text-3xl font-display font-bold uppercase tracking-tight text-white leading-tight font-extrabold text-left block"
            >
              TUS DATOS SE QUEDAN EN TU NEGOCIO
            </ScrollFloat>

            <p className="text-white text-xs leading-relaxed mt-2">
              Nuestra arquitectura desktop-first consiste en aplicaciones de escritorio con base de datos local. Esto significa que los datos sensibles de tus ventas, clientes e inventarios permanecen exclusivamente en tus instalaciones.
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-white/10 p-6 bg-zinc-950 flex flex-col justify-between">
              <FolderLock className="w-6 h-6 text-white mb-6" />
              <div>
                <h3 className="font-display font-bold text-xs uppercase tracking-widest text-white mb-2">Privacidad Absoluta</h3>
                <p className="text-[11px] text-white leading-relaxed">
                  Reduce drásticamente los riesgos de filtraciones de datos externos. Tu contabilidad y tus flujos de inventario se quedan bajo tu custodia física directa.
                </p>
              </div>
            </div>

            <div className="border border-white/10 p-6 bg-zinc-950 flex flex-col justify-between">
              <Zap className="w-6 h-6 text-white mb-6" />
              <div>
                <h3 className="font-display font-bold text-xs uppercase tracking-widest text-white mb-2">Funcionamiento 100% Offline</h3>
                <p className="text-[11px] text-white leading-relaxed">
                  Elimina por completo la dependencia de una conexión permanente a internet. Si el internet de la tienda falla, tu negocio sigue cobrando y operando sin interrupción alguna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CUADRÍCULA DE SOLUCIONES SECTORIALES (Segmentación y Relevancia) */}
      <section id="soluciones" className="border-t border-white/10 bg-zinc-950 py-24 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold uppercase tracking-tight text-white mt-2">
              Soluciones Diseñadas para tu Giro Comercial
            </h2>
            <p className="text-white text-xs mt-2 font-semibold">
              Haz clic en tu giro comercial para conocer las capacidades específicas desarrolladas para ti.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sectorSolutions.map((sector) => {
              const IconComp = sector.icon;
              return (
                <div
                  key={sector.id}
                  onClick={() => setSelectedSector(selectedSector === sector.id ? null : sector.id)}
                  className={`border p-6 rounded-none cursor-pointer transition-all duration-300 flex flex-col justify-between min-h-[220px] ${selectedSector === sector.id
                    ? 'bg-white text-black border-white'
                    : 'bg-zinc-900/20 text-white border-white/10 hover:border-white/30'
                    }`}
                >
                  <div>
                    <div className="flex items-center justify-between border-b pb-4 mb-4 border-current/15">
                      <h3 className={`font-display font-bold text-xs uppercase tracking-widest ${selectedSector === sector.id ? 'text-black' : 'text-white'
                        }`}>
                        {sector.title}
                      </h3>
                      <IconComp className="w-4 h-4 flex-shrink-0" />
                    </div>
                    <p className={`text-xs leading-relaxed ${selectedSector === sector.id ? 'text-zinc-800' : 'text-white'
                      }`}>
                      {sector.desc}
                    </p>
                  </div>

                  {selectedSector === sector.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 pt-4 border-t border-black/10"
                    >
                      <h4 className="text-[9px] font-mono font-bold uppercase tracking-widest text-black mb-2">Capacidades Críticas:</h4>
                      <ul className="text-[10px] space-y-1 text-zinc-800 font-mono">
                        {sector.features.map((feat, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <span className="w-1 h-1 bg-black rounded-full"></span>
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {selectedSector !== sector.id && (
                    <span className="text-[9px] font-mono uppercase tracking-widest text-white mt-6 inline-flex items-center gap-1">
                      Ver características <ChevronRight className="w-3 h-3" />
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. EL ACOMPAÑAMIENTO POST-VENTA (Garantía de Adopción Real) */}
      <section className="border-t border-white/10 bg-zinc-900/20 py-20 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mb-12">
            <h2 className="text-3xl font-display font-bold uppercase tracking-tight text-white mt-2">
              No te dejamos solo con una licencia
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-10 h-10 border border-white/10 bg-zinc-950 flex items-center justify-center text-white font-mono text-xs">01</div>
              <h3 className="font-display font-bold text-xs uppercase tracking-widest text-white">Implementación por Expertos</h3>
              <p className="text-xs text-white leading-relaxed">
                Nuestro equipo o un partner local certificado te acompaña en la instalación presencial o remota, configura el sistema a la perfección y migra la información de tu sistema anterior (Excel o papel) sin errores.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-10 h-10 border border-white/10 bg-zinc-950 flex items-center justify-center text-white font-mono text-xs">02</div>
              <h3 className="font-display font-bold text-xs uppercase tracking-widest text-white">Soporte Humano 365 Días</h3>
              <p className="text-xs text-white leading-relaxed">
                Atención técnica real y cercana a través de WhatsApp, teléfono y acceso remoto. Tiempos de respuesta menores a 1 hora ante cualquier problema crítico que detenga tu operation.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-10 h-10 border border-white/10 bg-zinc-950 flex items-center justify-center text-white font-mono text-xs">03</div>
              <h3 className="font-display font-bold text-xs uppercase tracking-widest text-white">Evolución Sin Costo</h3>
              <p className="text-xs text-white leading-relaxed">
                El software evoluciona constantemente basándose en las necesidades del mercado mexicano. Todas las mejoras, actualizaciones de leyes fiscales y correcciones se liberan gratuitamente para los clientes activos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TABLA DE PRECIOS TRANSPARENTE Y MODELOS DE CONTRATACIÓN */}
      <section className="border-t border-white/10 bg-zinc-950 py-24 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold uppercase tracking-tight text-white mt-2">
              Modelos de Precios Claros y Sin Sorpresas
            </h2>
            <p className="text-white text-xs mt-2 font-semibold">
              Todos los planes incluyen actualizaciones continuas, soporte 365 días e implementación estructurada. Sin letras chiquitas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch max-w-6xl mx-auto">
            {/* Mensual */}
            <div className="border border-white/10 p-8 flex flex-col justify-between bg-zinc-950/40 backdrop-blur-md">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-xs uppercase tracking-widest text-white">Suscripción Mensual</h3>
                  <span className="text-[9px] font-mono bg-white/5 text-zinc-300 px-2 py-0.5 border border-white/10 uppercase font-semibold">Full Features</span>
                </div>
                <p className="text-[11px] text-zinc-200 mt-4 leading-relaxed">
                  Incluye soporte completo, actualizaciones continuas, nube opcional y todos los módulos.
                </p>

                <div className="border border-white/10 rounded-none overflow-hidden mt-6 bg-zinc-950/60">
                  <table className="w-full text-left border-collapse text-xs font-mono">
                    <thead>
                      <tr className="border-b border-white/10 bg-white/5">
                        <th className="p-3 text-zinc-300 font-bold uppercase tracking-wider">Tipo</th>
                        <th className="p-3 text-zinc-300 font-bold uppercase tracking-wider text-right">Mensual</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="p-3 text-zinc-200">Mono Caja</td>
                        <td className="p-3 text-white text-right font-bold">$<CountUp to={799} from={500} duration={0.5} />/mes</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-zinc-200">Multi Caja</td>
                        <td className="p-3 text-white text-right font-bold">$<CountUp to={1299} from={800} duration={0.5} separator="," />/mes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/solicitar-demo" className="w-full">
                  <ButtonCorporate variant="secondary" size="sm" className="w-full cursor-pointer">Contratar Mensual</ButtonCorporate>
                </Link>
              </div>
            </div>

            {/* Anual (La opción inteligente) */}
            <div className="border-2 border-white p-8 flex flex-col justify-between bg-zinc-900/30 backdrop-blur-md relative">
              <span className="absolute -top-3.5 right-6 bg-white text-black text-[9px] font-mono font-extrabold tracking-widest px-3 py-1 uppercase border border-white">Opción más Inteligente</span>
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-xs uppercase tracking-widest text-white">Suscripción Anual</h3>
                  <span className="text-[9px] font-mono bg-white/10 text-white px-2 py-0.5 border border-white/20 uppercase font-semibold">Full Features</span>
                </div>
                <p className="text-[11px] text-zinc-200 mt-4 leading-relaxed">
                  Incluye todo lo mensual + descuento significativo al realizar el pago por adelantado.
                </p>

                <div className="border border-white/10 rounded-none overflow-hidden mt-6 bg-zinc-950/60">
                  <table className="w-full text-left border-collapse text-xs font-mono">
                    <thead>
                      <tr className="border-b border-white/10 bg-white/5">
                        <th className="p-3 text-zinc-300 font-bold uppercase tracking-wider">Tipo</th>
                        <th className="p-3 text-zinc-300 font-bold uppercase tracking-wider">Anual</th>
                        <th className="p-3 text-zinc-300 font-bold uppercase tracking-wider text-right">Eq. Mes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="p-3 text-zinc-200">Mono Caja</td>
                        <td className="p-3 text-white font-bold">$<CountUp to={7500} from={5000} duration={0.5} separator="," />/año</td>
                        <td className="p-3 text-emerald-400 text-right font-bold">$<CountUp to={625} from={400} duration={0.5} />/mes</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-zinc-200">Multi Caja</td>
                        <td className="p-3 text-white font-bold">$<CountUp to={12500} from={8000} duration={0.5} separator="," />/año</td>
                        <td className="p-3 text-emerald-400 text-right font-bold">$<CountUp to={1042} from={700} duration={0.5} separator="," />/mes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/solicitar-demo" className="w-full">
                  <ButtonCorporate variant="primary" size="sm" className="w-full cursor-pointer">Contratar Plan Anual</ButtonCorporate>
                </Link>
              </div>
            </div>

            {/* Vitalicia */}
            <div className="border border-white/10 p-8 flex flex-col justify-between bg-zinc-950/40 backdrop-blur-md">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-xs uppercase tracking-widest text-white">Licencia Vitalicia</h3>
                  <span className="text-[9px] font-mono bg-red-950/40 text-red-400 px-2 py-0.5 border border-red-900/30 uppercase font-semibold">Limitada</span>
                </div>
                <p className="text-[11px] text-zinc-200 mt-4 leading-relaxed">
                  Pago único. Solo 1 caja, sin soporte posterior, sin actualizaciones, sin nube.
                </p>

                <div className="border border-white/10 rounded-none overflow-hidden mt-6 bg-zinc-950/60">
                  <table className="w-full text-left border-collapse text-xs font-mono">
                    <thead>
                      <tr className="border-b border-white/10 bg-white/5">
                        <th className="p-3 text-zinc-300 font-bold uppercase tracking-wider">Tipo</th>
                        <th className="p-3 text-zinc-300 font-bold uppercase tracking-wider text-right">Pago Único</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="p-3 text-zinc-200">Vitalicia Mono Caja</td>
                        <td className="p-3 text-white text-right font-bold">$<CountUp to={2499} from={1500} duration={0.5} separator="," /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/solicitar-demo" className="w-full">
                  <ButtonCorporate variant="secondary" size="sm" className="w-full cursor-pointer">Adquirir Vitalicia</ButtonCorporate>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECCIÓN DE CIERRE (Misión de la Empresa y CTA Final) */}
      <section className="relative border-t border-white/10 bg-zinc-950 py-24 overflow-hidden z-10">
        <div className="absolute inset-0 bg-white/[0.01] blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-8">
          <h2 className="text-3xl sm:text-4xl font-display font-bold uppercase tracking-tight text-white max-w-2xl mx-auto leading-tight">
            No pretendemos ser el software más barato, ni el más caro; aspiramos a ser el más inteligente.
          </h2>
          <p className="text-white text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Aquel que realmente reduce tu carga administrativa y te permite enfocarte en lo que más importa: hacer crecer tu negocio.
          </p>
          <div className="pt-6">
            <Link href="/solicitar-demo">
              <ButtonCorporate variant="primary" size="md" className="cursor-pointer">
                Solicitar una demostración personalizada con un asesor en mi región
              </ButtonCorporate>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
