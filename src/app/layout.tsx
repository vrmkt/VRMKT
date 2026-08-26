import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import WppVerde from '@/assets/wpp verde.png'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'

const figtree = Figtree({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const defaultDescription =
  'A VRMKT cria e opera experiências em realidade virtual, realidade aumentada, games, conteúdos 360º e tecnologia para eventos, marcas, empresas e agências em todo o Brasil.'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.vrmarkt.com.br'),
  verification: {
    google: "Ztg4GaqzYatg5sYicwZ-X4en6e_mT5PDjcciPemontg",
  },
  title: {
    default: 'VRMKT | Realidade Virtual, Games e Experiências Imersivas',
    template: '%s | VRMKT',
  },
  description: defaultDescription,
  icons: ['/favicon.svg'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'VRMKT | Realidade Virtual, Games e Experiências Imersivas',
    description: defaultDescription,
    url: 'https://www.vrmarkt.com.br',
    siteName: 'VRMKT',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VRMKT | Realidade Virtual, Games e Experiências Imersivas',
    description: defaultDescription,
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'VRMKT — Experiências Imersivas',
  url: 'https://www.vrmarkt.com.br',
  foundingDate: '2016',
  email: 'reginaldo@vrmkt.com.br',
  telephone: '+55 11 97262-0886',
  areaServed: {
    '@type': 'Country',
    name: 'Brasil',
  },
  serviceType: [
    'Realidade virtual',
    'Realidade aumentada',
    'Realidade mista',
    'Games',
    'Conteúdos 360º',
    'Experiências imersivas',
    'Tecnologia para eventos',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${figtree.variable} relative antialiased`}>
        <GoogleTagManager gtmId="GTM-MGW2X2TS" />
          <Script
            id="organization-json-ld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(organizationJsonLd),
            }}
          />
          <Header />
          {children}
          <Link
            href="https://api.whatsapp.com/send/?phone=5511972620886"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 z-50 rounded-full shadow-2xl md:bottom-10 md:right-10"
          >
            <Image
              src={WppVerde}
              alt=""
              className="aspect-square w-10 md:w-14"
            />
          </Link>
          <Footer />
      </body>
    </html>
  )
}
