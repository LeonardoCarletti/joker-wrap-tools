import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Joker Wrap Tools | Ferramentas para Envelopamento Premium',
  description: 'Ferramentas criadas para quem leva o envelopamento a outro nível. Performance, precisão e personalidade em cada detalhe.',
  keywords: 'envelopamento automotivo, wrap tools, PPF, window film, ferramentas envelopamento',
  openGraph: {
    title: 'Joker Wrap Tools',
    description: 'Performance, precisão e personalidade em cada detalhe.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
