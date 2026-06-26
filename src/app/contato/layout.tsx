import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Fale com a VRMKT para projetos de realidade virtual, games, locação de tecnologia e experiências imersivas para eventos.',
  alternates: {
    canonical: '/contato',
  },
  openGraph: {
    title: 'Contato | VRMKT',
    description:
      'Entre em contato com a VRMKT para projetos de experiências imersivas e tecnologia para eventos.',
    url: '/contato',
  },
}

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
