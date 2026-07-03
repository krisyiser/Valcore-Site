import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false, // Oculta huella de tecnología para mitigar ataques dirigidos al servidor.
  output: "standalone",
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },
  experimental: {
    optimizePackageImports: ['framer-motion'], // Optimiza automáticamente la importación de submódulos de UI.
  },
}

export default nextConfig;
