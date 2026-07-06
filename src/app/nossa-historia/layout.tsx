import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nossa História',
  description:
    'Conheça a trajetória da VRMKT, empresa que desde 2016 cria experiências imersivas, realidade virtual, games corporativos e tecnologia para eventos.',
  alternates: {
    canonical: '/nossa-historia',
  },
  openGraph: {
    title: 'Nossa História | VRMKT',
    description:
      'Conheça a trajetória da VRMKT em experiências imersivas, realidade virtual, games corporativos e tecnologia para eventos.',
    url: '/nossa-historia',
  },
}

export default function NossaHistoriaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
