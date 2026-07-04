import type { Metadata } from 'next'
import { Inter, Montserrat, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import MainHeader from '../components/MainHeader'
import Footer from '../components/Footer'
import MobileViewGuard from '../components/MobileViewGuard'

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
    <html lang="es" className={`${fontSans.variable} ${fontDisplay.variable} ${fontMono.variable} bg-zinc-950 text-zinc-100 antialiased`}>
      <body className="min-h-screen flex flex-col selection:bg-white selection:text-black pt-16 bg-zinc-950">
        <MobileViewGuard />
        <MainHeader />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
