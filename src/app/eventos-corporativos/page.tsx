import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Eventos Corporativos com Realidade Virtual e Games Corporativos",
  description:
    "Experiências imersivas, realidade virtual, games corporativos, totens interativos e soluções tecnológicas para eventos corporativos, feiras, RH, agências e ativações de marca.",
  alternates: {
    canonical: "/eventos-corporativos",
  },
  openGraph: {
    title:
      "Eventos Corporativos com Realidade Virtual e Games Corporativos | VRMKT",
    description:
      "A VRMKT cria, adapta e opera experiências interativas para eventos corporativos, feiras, RH, agências e ativações de marca.",
    url: "/eventos-corporativos",
    type: "website",
  },
};

const whatsappUrl =
  "https://wa.me/5511972620886?text=Ol%C3%A1%2C%20vi%20as%20solu%C3%A7%C3%B5es%20da%20VRMKT%20para%20eventos%20corporativos%20e%20gostaria%20de%20entender%20op%C3%A7%C3%B5es%20para%20uma%20a%C3%A7%C3%A3o%20da%20minha%20empresa.";

const eventTypes = [
  "Convenções corporativas",
  "Feiras e estandes",
  "SIPAT e segurança do trabalho",
  "Ações internas de RH",
  "Treinamentos e onboarding",
  "Ativações de marca",
  "Lançamentos de produtos",
  "Campanhas promocionais",
];

const solutions = [
  "Realidade Virtual",
  "Realidade Aumentada",
  "Games Corporativos",
  "Totens Interativos",
  "Quizzes com pontuação",
  "Rankings em tempo real",
  "Conteúdos 360º",
  "Simuladores sob medida",
];

const steps = [
  {
    title: "Briefing",
    text: "Entendemos empresa, cidade, data, público, objetivo da ação, espaço disponível e prazo.",
  },
  {
    title: "Formato",
    text: "Indicamos experiências prontas, adaptações ou desenvolvimento personalizado conforme a necessidade.",
  },
  {
    title: "Produção",
    text: "Organizamos conteúdo, equipamentos, interfaces, identidade visual e requisitos técnicos.",
  },
  {
    title: "Operação",
    text: "Apoiamos montagem, testes, operação técnica e suporte durante o evento.",
  },
];

export default function EventosCorporativosPage() {
  return (
    <main className="bg-white text-[#004BA1]">
      <section className="bg-[#004BA1] px-5 pb-24 pt-36 text-white md:pt-44">
        <div className="mx-auto max-w-7xl">
          <p className="owners-xnarrow mb-6 text-2xl font-bold uppercase text-[#00BC00]">
            Eventos corporativos
          </p>

          <h1 className="owners-xnarrow max-w-6xl text-5xl font-bold uppercase leading-[1.02] text-[#00BC00] md:text-7xl lg:text-8xl">
            Realidade Virtual, Games Corporativos e experiências interativas para eventos empresariais
          </h1>

          <p className="mt-8 max-w-3xl text-xl font-semibold leading-relaxed md:text-2xl">
            A VRMKT cria e opera ativações tecnológicas para feiras, convenções, RH, SIPAT, lançamentos e eventos corporativos em todo o Brasil.
          </p>

          <div className="mt-8 grid max-w-4xl gap-3 text-base font-semibold text-white/90 md:grid-cols-3">
            <div className="rounded-3xl border border-white/15 bg-white/5 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
                Sob medida
              </p>
              <h3 className="mt-4 text-2xl font-bold text-white">
                Projetos corporativos
              </h3>
              <p className="mt-3 text-base leading-7 text-white/75">
                Experiências criadas para empresas, agências e marcas que buscam
                engajamento, impacto e percepção de valor em eventos.
              </p>
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/5 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
                Tecnologia
              </p>
              <h3 className="mt-4 text-2xl font-bold text-white">
                Games e Realidade Virtual
              </h3>
              <p className="mt-3 text-base leading-7 text-white/75">
                Realidade Virtual, Games Corporativos, totens e experiências
                interativas aplicadas ao objetivo da ação.
              </p>
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/5 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
                Entrega completa
              </p>
              <h3 className="mt-4 text-2xl font-bold text-white">
                Operação técnica
              </h3>
              <p className="mt-3 text-base leading-7 text-white/75">
                Equipamentos, conteúdo, suporte, montagem e operação técnica
                conforme cidade, duração e formato do evento.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 text-lg font-bold sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#00BC00] bg-[#00BC00] px-8 py-4 text-center text-[#004BA1] transition hover:bg-white hover:text-[#004BA1]"
            >
              Falar com a VRMKT no WhatsApp
            </a>

            <Link
              href="/produtos-e-servicos"
              className="rounded-full border border-white px-8 py-4 text-center text-white transition hover:bg-white hover:text-[#004BA1]"
            >
              Conhecer soluções
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="owners-xnarrow text-2xl font-bold uppercase text-[#00BC00]">
              Para empresas, agências e marcas
            </p>
            <h2 className="owners-xnarrow mt-4 text-5xl font-bold uppercase leading-tight md:text-6xl">
              Tecnologia com objetivo de comunicação
            </h2>
          </div>

          <div className="space-y-6 text-xl leading-relaxed text-[#00336f]">
            <p>
              Mais do que disponibilizar equipamentos, a VRMKT estrutura
              experiências para atrair público, organizar a participação e gerar
              interação com uma mensagem clara para cada evento.
            </p>
            <p>
              O projeto pode ser simples e pronto para operação rápida, ou
              personalizado com identidade visual, roteiro, conteúdo, mecânica de
              pontuação, ranking, narrativa, captação de leads e suporte técnico.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F8FF] px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="owners-xnarrow text-5xl font-bold uppercase leading-tight md:text-6xl">
            Formatos de eventos atendidos
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {eventTypes.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-[#004BA1]/15 bg-white p-6 text-lg font-bold"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="owners-xnarrow text-5xl font-bold uppercase leading-tight md:text-6xl">
            Soluções que podem entrar no seu briefing
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((item) => (
              <div
                key={item}
                className="rounded-3xl bg-[#004BA1] p-6 text-lg font-bold text-white"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#004BA1] px-5 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="owners-xnarrow max-w-4xl text-5xl font-bold uppercase leading-tight text-[#00BC00] md:text-6xl">
            Como a VRMKT transforma briefing em experiência
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-3xl border border-white/20 p-6"
              >
                <p className="owners-xnarrow text-4xl font-bold text-[#00BC00]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 text-2xl font-bold">{step.title}</h3>
                <p className="mt-4 leading-relaxed text-white/85">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="owners-xnarrow text-5xl font-bold uppercase leading-tight md:text-6xl">
              Por que escolher a VRMKT
            </h2>
          </div>

          <div className="space-y-5 text-xl leading-relaxed text-[#00336f]">
            <p>
              A VRMKT atua desde 2016 com experiências imersivas, realidade
              virtual, realidade aumentada, games corporativos e tecnologias
              interativas para eventos e marcas.
            </p>
            <p>
              Atendemos empresas, agências e instituições que precisam de uma
              solução com planejamento, operação, suporte e clareza comercial.
            </p>
            <p>
              Podemos atuar com experiências prontas, adaptações, white label
              para agências ou desenvolvimento sob medida.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#00BC00] px-5 py-20 text-[#004BA1]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="owners-xnarrow text-2xl font-bold uppercase">
              Próximo passo
            </p>
            <h2 className="owners-xnarrow mt-3 max-w-4xl text-5xl font-bold uppercase leading-tight md:text-6xl">
              Envie cidade, data, público e objetivo do evento
            </h2>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#004BA1] px-8 py-4 text-center text-lg font-bold transition hover:bg-[#004BA1] hover:text-white"
          >
            Falar com a VRMKT
          </a>
        </div>
      </section>
    </main>
  );
}
