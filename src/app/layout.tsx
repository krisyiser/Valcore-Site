import type { Metadata } from 'next'
import { Inter, Montserrat, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const fontDisplay = Montserrat({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const fontMono = IBM_Plex_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'VALCORE — Infraestructura de Software Empresarial Organizacional',
  description: 'Sistemas CRM, ERP y POS de misión crítica para la operación y automatización de procesos organizacionales en México.',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${fontSans.variable} ${fontDisplay.variable} ${fontMono.variable} bg-[#F8FAFC] text-[#334155] antialiased`}>
      <body className="min-h-screen flex flex-col selection:bg-[#2563EB] selection:text-[#FFFFFF] pt-16">
        <Navbar />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
