import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Locação de Games e Realidade Virtual para Eventos',
  description:
    'Locação de games corporativos, realidade virtual, totens e experiências interativas para eventos corporativos, feiras, RH, agências e ações promocionais.',
  alternates: {
    canonical: '/locacao-de-games-para-eventos',
  },
  openGraph: {
    title: 'Locação de Games e Realidade Virtual para Eventos',
    description:
      'Locação de games corporativos, realidade virtual, totens e experiências interativas para eventos corporativos, feiras, RH, agências e ações promocionais.',
    url: '/locacao-de-games-para-eventos',
  },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Locação de Games e Realidade Virtual para Eventos',
  serviceType:
    'Locação de games corporativos, realidade virtual, totens, quizzes e experiências interativas',
  provider: {
    '@type': 'Organization',
    name: 'VRMKT — Experiências Imersivas',
    url: 'https://www.vrmarkt.com.br',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Brasil',
  },
  url: 'https://www.vrmarkt.com.br/locacao-de-games-para-eventos',
}

const faq = [
  {
    question: 'A locação inclui equipamentos e operação?',
    answer:
      'Sim. A estrutura pode incluir equipamentos, montagem, testes e equipe de operação, conforme o escopo definido no briefing.',
  },
  {
    question: 'É possível contratar uma diária?',
    answer:
      'Sim. A disponibilidade depende da cidade, data, duração, tipo de equipamento e complexidade da operação.',
  },
  {
    question: 'Os games podem ser personalizados?',
    answer:
      'Sim. Alguns formatos permitem personalização de marca, telas, regras, pontuação, rankings e dinâmica de participação.',
  },
  {
    question: 'A VRMKT atende festas particulares?',
    answer:
      'O foco principal da VRMKT são eventos corporativos, feiras, RH, agências e ativações promocionais.',
  },
]

export default function LocacaoDeGamesParaEventos() {
  return (
    <main className="mt-14 bg-white text-[#021847] md:mt-20">
      <Script
        id="service-games-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <section className="bg-[#004BA1] px-5 py-20 text-white md:px-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
          <p className="owners-narrow text-xl font-bold uppercase text-[#00BC00]">
            Locação para eventos
          </p>
          <h1 className="owners-xnarrow max-w-5xl text-5xl font-bold leading-none text-[#00BC00] md:text-7xl">
            Games, VR, totens e experiências interativas para eventos
          </h1>
          <p className="max-w-3xl text-lg leading-8 md:text-xl">
            Locação e operação de games corporativos, realidade virtual, quizzes, rankings e
            totens interativos para eventos corporativos, feiras, RH, agências e
            ações promocionais.
          </p>
          <Link
            href="/contato"
            className="owners-xnarrow w-fit rounded-full border border-[#00BC00] px-8 py-3 text-2xl font-bold text-[#00BC00] transition-colors hover:bg-[#00BC00] hover:text-[#004BA1]"
          >
            Consultar disponibilidade
          </Link>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-20 md:grid-cols-[0.9fr_1.1fr] md:px-10">
        <h2 className="owners-xnarrow text-4xl font-bold text-[#004BA1] md:text-6xl">
          Uma operação pensada para público, espaço e objetivo
        </h2>
        <div className="grid gap-5 text-base leading-7 md:text-lg">
          <p>
            A VRMKT estrutura experiências para atrair, entreter e organizar a
            participação do público em eventos com diferentes formatos e
            tamanhos.
          </p>
          <p>
            O escopo pode incluir games corporativos corporativos corporativos em realidade virtual, quizzes com pontuação, rankings,
            totens interativos, personalização opcional, equipamentos, montagem
            e operação.
          </p>
          <p>
            Para consultar disponibilidade, o briefing deve informar cidade,
            data, duração, público estimado, espaço disponível e objetivo da
            ação.
          </p>
        </div>
      </section>

      <section className="bg-[#00BC00] px-5 py-20 text-[#004BA1] md:px-10">
        <div className="mx-auto grid w-full max-w-7xl gap-5 md:grid-cols-3">
          {[
            'Games corporativos em realidade virtual e experiências interativas',
            'Quizzes, rankings e totens',
            'Montagem, operação e personalização',
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
