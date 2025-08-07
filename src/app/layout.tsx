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

export const metadata: Metadata = {
  title: 'VRMKT',
  description: 'Design de experiências',
  icons: ['/favicon.svg'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <GoogleTagManager gtmId="GTM-TT4C7FLQQ" />
      <html lang="pt">
        <head>
          {/* Google Tag Manager */}
          <Script id="gtm-script" strategy="afterInteractive">
            {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MGW2X2TS');
          `}
          </Script>
        </head>
        <body className={`${figtree.variable} relative antialiased`}>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MGW2X2TS"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>
      `,
            }}
          />
          <Header />
          {children}
          <Link
            href="https://api.whatsapp.com/send/?phone=5511972620886"
            target="_blank"
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
    </>
  )
}
