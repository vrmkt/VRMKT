import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Produtos e Serviços',
  description:
    'Veja as soluções da VRMKT para eventos: realidade virtual, realidade aumentada, realidade mista, games, conteúdos 360º e experiências interativas.',
  alternates: {
    canonical: '/produtos-e-servicos',
  },
  openGraph: {
    title: 'Produtos e Serviços | VRMKT',
    description:
      'Soluções da VRMKT para eventos, marcas e empresas com realidade virtual, games e experiências imersivas.',
    url: '/produtos-e-servicos',
  },
}

export default function ProdutosEServicosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
