"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Shield, Cpu, Activity, LayoutGrid, Terminal } from "lucide-react";

const solutions = [
  { name: "CRM", href: "/soluciones/crm", icon: Shield, desc: "Gestión de clientes y procesos comerciales de alto volumen." },
  { name: "ERP", href: "/soluciones/erp", icon: Cpu, desc: "Planificación de recursos y control de operaciones críticas." },
  { name: "POS", href: "/soluciones/pos", icon: Activity, desc: "Puntos de venta rápidos, seguros y distribuidos." },
  { name: "Business Intelligence", href: "/soluciones/business-intelligence", icon: LayoutGrid, desc: "Analítica de datos y tableros operativos en tiempo real." },
  { name: "Sistemas Especializados", href: "/soluciones/sistemas-especializados", icon: Terminal, desc: "Automatización de flujos y control operativo a la medida." },
];

const industries = [
  { name: "Farmacias", href: "/soluciones/pos-para-farmacias" },
  { name: "Restaurantes", href: "/soluciones/pos-para-restaurantes" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"soluciones" | "industrias" | null>(null);

  const toggleDropdown = (type: "soluciones" | "industrias") => {
    if (activeDropdown === type) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(type);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/10 h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2" onClick={() => setActiveDropdown(null)}>
          <div className="w-8 h-8 bg-white flex items-center justify-center font-display font-extrabold text-black rounded-none">
            V
          </div>
          <span className="font-display font-bold text-lg tracking-wider text-white">
            VALCORE
          </span>
          <span className="text-[10px] font-mono text-zinc-300 bg-white/5 border border-white/10 px-1.5 py-0.5 rounded-none uppercase tracking-widest hidden sm:inline-block">
            Core Engine
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {/* Solutions Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown("soluciones")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center text-xs font-display font-bold tracking-widest text-zinc-200 hover:text-white transition-colors py-2 cursor-pointer">
              SOLUCIONES
              <ChevronDown className="ml-1 w-3.5 h-3.5" />
            </button>
            
            {activeDropdown === "soluciones" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-80 bg-zinc-950/95 border border-white/10 shadow-2xl p-4 grid grid-cols-1 gap-2 backdrop-blur-xl">
                {solutions.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-start p-2 rounded-none hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
                  >
                    <item.icon className="w-4 h-4 text-white mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-xs font-display font-bold text-white tracking-wide">{item.name}</div>
                      <p className="text-[10px] text-zinc-300 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown("industrias")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center text-xs font-display font-bold tracking-widest text-zinc-200 hover:text-white transition-colors py-2 cursor-pointer">
              VERTICALES
              <ChevronDown className="ml-1 w-3.5 h-3.5" />
            </button>

            {activeDropdown === "industrias" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-56 bg-zinc-950/95 border border-white/10 shadow-2xl p-2 backdrop-blur-xl">
                {industries.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-[11px] font-display font-bold text-zinc-200 hover:text-white hover:bg-white/5 rounded-none transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/tecnologia" className="text-xs font-display font-bold tracking-widest text-zinc-200 hover:text-white transition-colors">
            TECNOLOGÍA
          </Link>

          <Link href="/implementaciones" className="text-xs font-display font-bold tracking-widest text-zinc-200 hover:text-white transition-colors">
            IMPLEMENTACIONES
          </Link>
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link
            href="/solicitar-demo"
            className="bg-white hover:bg-zinc-200 text-black px-5 py-2.5 rounded-none text-[10px] font-mono font-bold tracking-widest transition-all uppercase border border-transparent"
          >
            SOLICITAR EVALUACIÓN
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:text-zinc-400 focus:outline-none cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bg-zinc-950/95 border-b border-white/10 max-h-[calc(100vh-4rem)] overflow-y-auto z-40 p-4 space-y-4 shadow-2xl backdrop-blur-xl">
          <div>
            <button
              onClick={() => toggleDropdown("soluciones")}
              className="flex items-center justify-between w-full text-left font-display font-bold text-xs tracking-widest text-white py-2 border-b border-white/5"
            >
              SOLUCIONES
              <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "soluciones" ? "rotate-180" : ""}`} />
            </button>
            {activeDropdown === "soluciones" && (
              <div className="pl-4 mt-2 space-y-2">
                {solutions.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-xs text-zinc-200 hover:text-white"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleDropdown("industrias")}
              className="flex items-center justify-between w-full text-left font-display font-bold text-xs tracking-widest text-white py-2 border-b border-white/5"
            >
              VERTICALES
              <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "industrias" ? "rotate-180" : ""}`} />
            </button>
            {activeDropdown === "industrias" && (
              <div className="pl-4 mt-2 space-y-2">
                {industries.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-xs text-zinc-200 hover:text-white"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/tecnologia"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-display font-bold text-xs tracking-widest text-white py-2 border-b border-white/5"
          >
            TECNOLOGÍA
          </Link>

          <Link
            href="/implementaciones"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-display font-bold text-xs tracking-widest text-white py-2 border-b border-white/5"
          >
            IMPLEMENTACIONES
          </Link>

          <Link
            href="/solicitar-demo"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center bg-white text-black py-2.5 rounded-none font-mono font-bold tracking-widest text-[10px]"
          >
            SOLICITAR EVALUACIÓN TÉCNICA
          </Link>
        </div>
      )}
    </nav>
  );
}
