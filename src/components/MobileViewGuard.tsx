"use client";

import React, { useState, useEffect } from 'react';
import { Monitor, Laptop, ArrowRight } from 'lucide-react';
import { ButtonCorporate } from './ui/ButtonCorporate';

/**
 * @description Pantalla de protección/invitación para usuarios de dispositivos móviles y tablets.
 * Muestra un aviso recomendando la navegación en escritorio debido a que la plataforma está diseñada para compras y descargas de software.
 */
export default function MobileViewGuard() {
  const [isMobile, setIsMobile] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      // Consideramos pantallas menores de 1024px o dispositivos táctiles con ancho menor a 1180px (tablets)
      setIsMobile(width < 1024 || (hasTouch && width < 1180));
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  if (!isMobile || dismissed) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-zinc-950 flex flex-col justify-between p-8 font-sans overflow-y-auto">
      {/* Background glow and details */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/40 via-zinc-950 to-zinc-950 pointer-events-none z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[500px] h-[300px] bg-white/[0.01] blur-[80px] rounded-full pointer-events-none z-0" />

      {/* Decorative top bar */}
      <div className="relative z-10 flex justify-between items-center border-b border-white/5 pb-4">
        <span className="text-[10px] font-mono text-zinc-400 font-semibold tracking-widest">VALCORE SYSTEM DISPATCH</span>
        <span className="text-[9px] font-mono text-amber-500 bg-amber-950/30 border border-amber-900/30 px-2.5 py-0.5 uppercase">Escritorio Recomendado</span>
      </div>

      {/* Main warning info */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center max-w-md mx-auto text-center py-10">
        <div className="border border-white/10 p-5 bg-zinc-900/30 backdrop-blur-md mb-8 flex items-center justify-center">
          <Monitor className="w-8 h-8 text-white animate-pulse" />
        </div>

        <h1 className="font-display font-extrabold text-2xl uppercase tracking-tight text-white leading-tight mb-4 text-glow">
          Acceso Optimizado para Computadoras
        </h1>

        <p className="text-zinc-300 text-sm leading-relaxed mb-6">
          Nuestra suite de infraestructura corporativa (ERP, CRM y Punto de Venta LAN) está diseñada para ejecutarse directamente en sistemas de escritorio.
        </p>

        <p className="text-zinc-400 text-xs leading-relaxed mb-8 border-l-2 border-white/20 pl-4 text-left font-mono">
          Para realizar cotizaciones, adquirir licencias y descargar los instaladores profesionales, te sugerimos visitar este sitio web desde una computadora de escritorio o portátil.
        </p>

        <div className="w-full">
          <ButtonCorporate
            variant="secondary"
            size="md"
            className="w-full cursor-pointer group flex justify-center items-center !border-white/20"
            onClick={() => setDismissed(true)}
          >
            <span>Ver de todos modos en móvil</span>
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </ButtonCorporate>
        </div>
      </div>

      {/* Footer details */}
      <div className="relative z-10 border-t border-white/5 pt-6 text-center">
        <p className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">
          VALCORE WEB GUARD • SYSTEM DESKTOP LICENSE REQUIREMENT
        </p>
      </div>
    </div>
  );
}
