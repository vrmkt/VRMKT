import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Empresa de Experiências Imersivas, Realidade Virtual, Realidade Aumentada e Games',
  description:
    'Conheça a VRMKT, empresa brasileira especializada em realidade virtual, realidade aumentada, games e experiências tecnológicas para eventos, empresas, marcas e agências.',
  alternates: {
    canonical: '/empresa-de-experiencias-imersivas',
  },
  openGraph: {
    title: 'Empresa de Experiências Imersivas, Realidade Virtual, Realidade Aumentada e Games',
    description:
      'Conheça a VRMKT, empresa brasileira especializada em realidade virtual, realidade aumentada, games e experiências tecnológicas para eventos, empresas, marcas e agências.',
    url: '/empresa-de-experiencias-imersivas',
  },
}

const faq = [
  {
    question: 'A VRMKT atende todo o Brasil?',
    answer:
      'Sim. A VRMKT estrutura projetos, equipamentos, logística e operação para eventos e ações em diferentes cidades do Brasil.',
  },
  {
    question: 'A VRMKT trabalha com agências?',
    answer:
      'Sim. A equipe atua em parceria com agências, marcas e empresas para viabilizar experiências imersivas, ativações e projetos especiais.',
  },
  {
    question: 'É possível personalizar soluções prontas?',
    answer:
      'Sim. Soluções existentes podem receber ajustes de marca, conteúdo, dinâmica e operação conforme o briefing, prazo e objetivo do projeto.',
  },
]

export default function EmpresaDeExperienciasImersivas() {
  return (
    <main className="mt-14 bg-[#004BA1] text-white md:mt-20">
      <section className="mx-auto flex min-h-[70vh] w-full max-w-7xl flex-col justify-center gap-8 px-5 py-20 md:px-10">
        <div className="max-w-4xl">
          <p className="owners-narrow text-xl font-bold uppercase text-[#00BC00]">
            VRMKT
          </p>
          <h1 className="owners-xnarrow mt-3 text-5xl font-bold leading-none text-[#00BC00] md:text-7xl">
            Empresa de experiências imersivas, Realidade Virtual, Realidade Aumentada e games
          </h1>
          <p className="mt-6 max-w-3xl text-lg font-medium leading-8 md:text-xl">
            Fundada em 2016, a VRMKT cria e opera experiências em realidade
            virtual, realidade aumentada, realidade mista, games e conteúdos
            360º para eventos, empresas, marcas e agências.
          </p>
        </div>
        <Link
          href="/contato"
          className="owners-xnarrow w-fit rounded-full border border-[#00BC00] px-8 py-3 text-2xl font-bold text-[#00BC00] transition-colors hover:bg-[#00BC00] hover:text-[#004BA1]"
        >
          Falar com a VRMKT
        </Link>
      </section>

      <section className="bg-white px-5 py-20 text-[#021847] md:px-10">
        <div className="mx-auto grid w-full max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <h2 className="owners-xnarrow text-4xl font-bold text-[#004BA1] md:text-6xl">
            Estratégia, tecnologia e operação no mesmo projeto
          </h2>
          <div className="flex flex-col gap-5 text-base leading-7 md:text-lg">
            <p>
              A VRMKT atua do briefing à operação, conectando estratégia,
              roteiro, desenvolvimento, equipamentos, logística e equipe técnica
              para que cada experiência funcione no contexto real do evento.
            </p>
            <p>
              Os projetos atendem ações de marca, RH, feiras, treinamentos,
              cultura, lançamentos, ativações promocionais e demandas especiais
              que pedem interação, presença e tecnologia.
            </p>
            <p>
              O atendimento é realizado em todo o Brasil, com soluções
              planejadas para o objetivo, o espaço, o público e o fluxo de cada
              ação.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#00BC00] px-5 py-20 text-[#004BA1] md:px-10">
        <div className="mx-auto grid w-full max-w-7xl gap-5 md:grid-cols-3">
          {[
            'Realidade virtual, aumentada e mista',
            'Games corporativos, quizzes, rankings e interações',
            'Conteúdos 360º e experiências para eventos',
          ].map((item) => (
            <div key={item} className="rounded-lg border border-[#004BA1] p-6">
              <h3 className="owners-xnarrow text-3xl font-bold">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-20 md:px-10">
        <h2 className="owners-xnarrow text-4xl font-bold text-[#00BC00] md:text-5xl">
          Perguntas frequentes
        </h2>
        <div className="mt-8 grid gap-5">
          {faq.map((item) => (
            <div key={item.question} className="rounded-lg border p-6">
              <h3 className="text-xl font-bold text-[#00BC00]">
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
