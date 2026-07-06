import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Clientes',
  description:
    'Confira marcas e empresas atendidas pela VRMKT em projetos de realidade virtual, games, tecnologia e experiências imersivas para eventos.',
  alternates: {
    canonical: '/clientes',
  },
  openGraph: {
    title: 'Clientes | VRMKT',
    description:
      'Marcas e empresas atendidas pela VRMKT em experiências imersivas e tecnologia para eventos.',
    url: '/clientes',
  },
}

export default function ClientesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
