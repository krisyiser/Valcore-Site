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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F8FAFC]/90 backdrop-blur-md border-b border-[#E2E8F0] h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2" onClick={() => setActiveDropdown(null)}>
          <div className="w-8 h-8 bg-[#2563EB] flex items-center justify-center font-display font-bold text-white rounded-none">
            V
          </div>
          <span className="font-display font-bold text-lg tracking-wider text-[#0F172A]">
            VALCORE
          </span>
          <span className="text-[10px] font-mono text-[#2563EB] bg-[#2563EB]/10 border border-[#2563EB]/30 px-1.5 py-0.5 rounded-none uppercase tracking-widest hidden sm:inline-block">
            Core Engine
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          {/* Solutions Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown("soluciones")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center text-sm font-display font-semibold text-[#334155] hover:text-[#2563EB] transition-colors py-2 cursor-pointer">
              SOLUCIONES
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            
            {activeDropdown === "soluciones" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-80 bg-white border border-[#E2E8F0] rounded-none shadow-xl p-4 grid grid-cols-1 gap-4">
                {solutions.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-start p-2 rounded-none hover:bg-[#F1F5F9] transition-colors"
                  >
                    <item.icon className="w-5 h-5 text-[#2563EB] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-display font-semibold text-[#0F172A]">{item.name}</div>
                      <p className="text-[11px] text-[#64748B] mt-0.5">{item.desc}</p>
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
            <button className="flex items-center text-sm font-display font-semibold text-[#334155] hover:text-[#2563EB] transition-colors py-2 cursor-pointer">
              VERTICALES
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>

            {activeDropdown === "industrias" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-56 bg-white border border-[#E2E8F0] rounded-none shadow-xl p-2">
                {industries.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-xs font-display font-semibold text-[#334155] hover:text-[#2563EB] hover:bg-[#F1F5F9] rounded-none transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/tecnologia" className="text-sm font-display font-semibold text-[#334155] hover:text-[#2563EB] transition-colors">
            TECNOLOGÍA
          </Link>

          <Link href="/implementaciones" className="text-sm font-display font-semibold text-[#334155] hover:text-[#2563EB] transition-colors">
            IMPLEMENTACIONES
          </Link>
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link
            href="/solicitar-demo"
            className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-5 py-2.5 rounded-none text-xs font-mono font-bold tracking-wider transition-all uppercase border border-transparent"
          >
            SOLICITAR EVALUACIÓN
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#0F172A] hover:text-[#2563EB] focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bg-[#F8FAFC] border-b border-[#E2E8F0] max-h-[calc(100vh-4rem)] overflow-y-auto z-40 p-4 space-y-4 shadow-lg">
          <div>
            <button
              onClick={() => toggleDropdown("soluciones")}
              className="flex items-center justify-between w-full text-left font-display font-bold text-sm tracking-wide text-[#0F172A] py-2 border-b border-[#E2E8F0]"
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
                    className="block py-1 text-xs text-[#334155] hover:text-[#2563EB]"
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
              className="flex items-center justify-between w-full text-left font-display font-bold text-sm tracking-wide text-[#0F172A] py-2 border-b border-[#E2E8F0]"
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
                    className="block py-1 text-xs text-[#334155] hover:text-[#2563EB]"
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
            className="block font-display font-bold text-sm tracking-wide text-[#0F172A] py-2 border-b border-[#E2E8F0]"
          >
            TECNOLOGÍA
          </Link>

          <Link
            href="/implementaciones"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-display font-bold text-sm tracking-wide text-[#0F172A] py-2 border-b border-[#E2E8F0]"
          >
            IMPLEMENTACIONES
          </Link>

          <Link
            href="/solicitar-demo"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center bg-[#2563EB] text-white py-2.5 rounded-none font-mono font-bold tracking-wide text-xs"
          >
            SOLICITAR EVALUACIÓN TÉCNICA
          </Link>
        </div>
      )}
    </nav>
  );
}
