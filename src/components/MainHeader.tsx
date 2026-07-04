"use client";

import CardNav from './animations/CardNav';

export default function MainHeader() {
  const productItems = [
    {
      label: "Punto de Venta (POS)",
      bgColor: "#09090b",
      textColor: "#fff",
      links: [
        { label: "POS Abarrotes", href: "/soluciones/pos", ariaLabel: "POS Abarrotes" },
        { label: "POS Farmacias", href: "/soluciones/pos-para-farmacias", ariaLabel: "POS Farmacias" },
        { label: "POS Restaurantes", href: "/soluciones/pos-para-restaurantes", ariaLabel: "POS Restaurantes" }
      ]
    },
    {
      label: "Planificación (ERP)",
      bgColor: "#18181b",
      textColor: "#fff",
      links: [
        { label: "Gestión de Inventarios", href: "/soluciones/erp", ariaLabel: "Inventarios" },
        { label: "Módulo de Compras", href: "/soluciones/erp", ariaLabel: "Compras" },
        { label: "Facturación CFDI 4.0", href: "/soluciones/erp", ariaLabel: "Facturación SAT" }
      ]
    },
    {
      label: "Relaciones (CRM)",
      bgColor: "#18181b",
      textColor: "#fff",
      links: [
        { label: "Seguimiento de Clientes", href: "/soluciones/crm", ariaLabel: "Clientes" },
        { label: "Control de Cuentas", href: "/soluciones/crm", ariaLabel: "Cobranza" },
        { label: "Embudo de Ventas", href: "/soluciones/crm", ariaLabel: "Embudos" }
      ]
    }
  ];

  const businessItems = [
    {
      label: "Salud & Farmacia",
      bgColor: "#09090b",
      textColor: "#fff",
      links: [
        { label: "Control de Lotes", href: "/soluciones/pos-para-farmacias", ariaLabel: "Lotes" },
        { label: "Control de Caducidades", href: "/soluciones/pos-para-farmacias", ariaLabel: "Caducidades" },
        { label: "Receta Digital", href: "/soluciones/pos-para-farmacias", ariaLabel: "Recetas" }
      ]
    },
    {
      label: "Gastronomía",
      bgColor: "#18181b",
      textColor: "#fff",
      links: [
        { label: "Comandas Digitales", href: "/soluciones/pos-para-restaurantes", ariaLabel: "Comandas" },
        { label: "Control de Mesas", href: "/soluciones/pos-para-restaurantes", ariaLabel: "Mesas" },
        { label: "Impresión en Cocina", href: "/soluciones/pos-para-restaurantes", ariaLabel: "Impresiones" }
      ]
    },
    {
      label: "Comercio General",
      bgColor: "#18181b",
      textColor: "#fff",
      links: [
        { label: "Caja Chica", href: "/soluciones/pos", ariaLabel: "Cajas" },
        { label: "Multi-sucursales", href: "/soluciones/pos", ariaLabel: "Sucursales" },
        { label: "Reportes de Ventas", href: "/soluciones/pos", ariaLabel: "Ventas" }
      ]
    }
  ];

  return (
    <CardNav
      productItems={productItems}
      businessItems={businessItems}
      ease="power3.out"
      baseColor="rgba(9, 9, 11, 0.75)"
      menuColor="#fff"
      buttonBgColor="#fff"
      buttonTextColor="#000"
    />
  );
}
