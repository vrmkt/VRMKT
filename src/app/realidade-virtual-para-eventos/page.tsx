import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Realidade Virtual para Eventos: Criação, Equipamentos e Operação',
  description:
    'Experiências em realidade virtual para eventos corporativos, feiras, treinamentos e ativações de marca, com equipamentos, personalização e operação técnica.',
  alternates: {
    canonical: '/realidade-virtual-para-eventos',
  },
  openGraph: {
    title: 'Realidade Virtual para Eventos: Criação, Equipamentos e Operação',
    description:
      'Experiências em realidade virtual para eventos corporativos, feiras, treinamentos e ativações de marca, com equipamentos, personalização e operação técnica.',
    url: '/realidade-virtual-para-eventos',
  },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Realidade Virtual para Eventos',
  serviceType: 'Realidade virtual para eventos corporativos, feiras e ativações',
  provider: {
    '@type': 'Organization',
    name: 'VRMKT — Experiências Imersivas',
    url: 'https://www.vrmarkt.com.br',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Brasil',
  },
  url: 'https://www.vrmarkt.com.br/realidade-virtual-para-eventos',
}

const faq = [
  {
    question: 'É possível usar Realidade Virtual em eventos com grande circulação?',
    answer:
      'Sim. O projeto precisa considerar fluxo, tempo médio de experiência, espaço disponível, equipe de apoio e operação técnica para manter a ação organizada.',
  },
  {
    question: 'O conteúdo pode ser personalizado?',
    answer:
      'Sim. A experiência pode receber marca, narrativa, elementos visuais, dinâmica e conteúdo conforme o objetivo da ação.',
  },
  {
    question: 'A VRMKT fornece operadores e equipamentos?',
    answer:
      'Sim. A VRMKT pode estruturar equipamentos, montagem, testes e operadores técnicos para a execução da experiência.',
  },
]

export default function RealidadeVirtualParaEventos() {
  return (
    <main className="mt-14 bg-white text-[#021847] md:mt-20">
      <Script
        id="service-vr-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <section className="bg-[#004BA1] px-5 py-20 text-white md:px-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
          <p className="owners-narrow text-xl font-bold uppercase text-[#00BC00]">
            Realidade virtual para eventos
          </p>
          <h1 className="owners-xnarrow max-w-5xl text-5xl font-bold leading-none text-[#00BC00] md:text-7xl">
            Criação, equipamentos e operação de Realidade Virtual para eventos
          </h1>
          <p className="max-w-3xl text-lg leading-8 md:text-xl">
            Experiências em realidade virtual para eventos corporativos,
            feiras, treinamentos e ativações de marca, com planejamento,
            personalização, equipamentos e operação técnica.
          </p>
          <Link
            href="/contato"
            className="owners-xnarrow w-fit rounded-full border border-[#00BC00] px-8 py-3 text-2xl font-bold text-[#00BC00] transition-colors hover:bg-[#00BC00] hover:text-[#004BA1]"
          >
            Solicitar uma proposta
          </Link>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-20 md:grid-cols-[0.9fr_1.1fr] md:px-10">
        <h2 className="owners-xnarrow text-4xl font-bold text-[#004BA1] md:text-6xl">
          Realidade Virtual planejada para funcionar no ambiente do evento
        </h2>
        <div className="grid gap-5 text-base leading-7 md:text-lg">
          <p>
            A VRMKT cria experiências prontas ou personalizadas para aproximar o
            público de uma marca, produto, treinamento ou narrativa.
          </p>
          <p>
            O planejamento considera headsets, computadores, espaço físico,
            montagem, testes, higienização, operação e fluxo para públicos de
            diferentes tamanhos.
          </p>
          <p>
            A personalização de marca pode aparecer na interface, cenário,
            conteúdo, jornada, materiais de apoio e dinâmica de participação.
          </p>
        </div>
      </section>

      <section className="bg-[#00BC00] px-5 py-20 text-[#004BA1] md:px-10">
        <div className="mx-auto grid w-full max-w-7xl gap-5 md:grid-cols-3">
          {[
            'Eventos corporativos e feiras',
            'Treinamentos e ativações de marca',
            'Equipamentos, montagem e operação',
          ].map((item) => (
            <div key={item} className="rounded-lg border border-[#004BA1] p-6">
              <h3 className="owners-xnarrow text-3xl font-bold">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-20 md:px-10">
        <h2 className="owners-xnarrow text-4xl font-bold text-[#004BA1] md:text-5xl">
          Perguntas frequentes
        </h2>
        <div className="mt-8 grid gap-5">
          {faq.map((item) => (
            <div key={item.question} className="rounded-lg border p-6">
              <h3 className="text-xl font-bold text-[#004BA1]">
                {item.question}
              </h3>
              <p className="mt-3 leading-7">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
