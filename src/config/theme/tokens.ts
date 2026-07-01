/**
 * @file tokens.ts
 * @description Define la paleta de colores inmutable bajo la regla 60-30-10 y tipografías industriales de Valcore en MODO CLARO.
 * @see STUDIO KUALI PROTOCOL v3.0 (Regla 4.A)
 */

export const VALCORE_TOKENS = {
  colors: {
    background: '#F8FAFC', // 60%: Fondo absoluto claro (Slate 50) para un diseño sobrio y moderno.
    surface: '#FFFFFF',    // 30%: Estructura de componentes, paneles intermedios y contenedores.
    border: '#E2E8F0',     // 30%: Divisores planos geométricos de 1px. Sin sombras difusas.
    accent: {
      primary: '#2563EB',  // 10%: Foco funcional y llamadas a la acción críticas (Azul Valcore).
      success: '#059669',  // 10%: Indicadores de estado Go-Live, transacciones y éxito.
      warning: '#D97706',  // 10%: Alertas de morosidad, caída de servicio o logs críticos.
    },
    text: {
      heading: '#0F172A',  // Contraste máximo para títulos de ingeniería.
      body: '#334155',     // Legibilidad optimizada para flujos de datos densos.
      mono: '#64748B',     // Datos numéricos, telemetría y tablas.
    }
  },
  typography: {
    fontSans: 'var(--font-inter)',
    fontDisplay: 'var(--font-montserrat)',
    fontMono: 'var(--font-ibm-plex-mono)',
  }
} as const;
