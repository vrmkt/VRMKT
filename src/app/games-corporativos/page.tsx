import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Games Corporativos Para Eventos, RH, Feiras e Ativações de Marca",
  description:
    "A VRMKT cria e opera games corporativos, jogos interativos e experiências digitais para eventos corporativos, RH, SIPAT, feiras, estandes e ativações de marca.",
  alternates: {
    canonical: "/games-corporativos",
  },
  openGraph: {
    title: "Games Corporativos Para Eventos | VRMKT",
    description:
      "Jogos interativos, quizzes, rankings, games para RH, SIPAT, feiras, estandes e ativações de marca com operação técnica completa.",
    url: "/games-corporativos",
    type: "website",
  },
};

const whatsappMessage =
  "Olá, vi a página de Games Corporativos da VRMKT e gostaria de entender opções para uma ação da minha empresa.";

const whatsappUrl = `https://wa.me/5511972620886?text=${encodeURIComponent(
  whatsappMessage
)}`;

export default function GamesCorporativosPage() {
  const aplicacoes = [
    "Games para eventos corporativos e convenções",
    "Jogos para RH, SIPAT e ações internas",
    "Quizzes interativos com ranking",
    "Games para feiras, estandes e captação de público",
    "Ativações de marca com mecânica personalizada",
    "Experiências com telas touch, totens, tablets ou notebook",
  ];

  const entregas = [
    "Criação da mecânica do jogo",
    "Personalização visual com a identidade da marca",
    "Equipamentos e estrutura técnica",
    "Operação presencial em evento",
    "Suporte técnico durante a ação",
    "Adequação ao objetivo, público, cidade e duração do evento",
  ];

  return (
    <main className="min-h-screen bg-[#0050a8] text-white">
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-green-400">
          Games Corporativos
        </p>

        <h1 className="mt-8 max-w-6xl text-5xl font-black uppercase leading-[0.95] text-green-400 md:text-7xl lg:text-8xl">
          Jogos interativos para empresas, eventos e ativações de marca
        </h1>

        <p className="mt-8 max-w-4xl text-xl font-semibold leading-9 text-white md:text-2xl">
          A VRMKT cria e opera games corporativos para empresas, agências e marcas
          que buscam engajamento, interação, captação de público e percepção de
          valor em eventos.
        </p>

        <div className="mt-10 flex flex-col gap-4 text-lg font-bold sm:flex-row">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-green-400 px-8 py-4 text-center text-[#0050a8] transition hover:bg-green-300"
          >
            Falar com a VRMKT no WhatsApp
          </a>

          <Link
            href="/eventos-corporativos"
            className="rounded-full border border-white px-8 py-4 text-center text-white transition hover:bg-white hover:text-[#0050a8]"
          >
            Ver soluções para eventos
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-20 md:grid-cols-3">
        <div className="rounded-3xl border border-white/15 bg-white/5 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Para eventos
          </p>
          <h2 className="mt-4 text-3xl font-bold">
            Engajamento no fluxo do público
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/80">
            Games pensados para atrair pessoas, gerar interação no estande,
            criar competição saudável e ampliar a lembrança da marca.
          </p>
        </div>

        <div className="rounded-3xl border border-white/15 bg-white/5 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Para RH
          </p>
          <h2 className="mt-4 text-3xl font-bold">
            Dinâmicas digitais para equipes
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/80">
            Jogos para SIPAT, convenções, integração, treinamentos, campanhas
            internas e ações de endomarketing.
          </p>
        </div>

        <div className="rounded-3xl border border-white/15 bg-white/5 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Para marcas
          </p>
          <h2 className="mt-4 text-3xl font-bold">
            Mecânicas personalizadas
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/80">
            Quizzes, rankings, desafios, jogos promocionais e experiências
            adaptadas ao briefing, identidade visual e objetivo da ação.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 lg:grid-cols-2">
        <div className="rounded-3xl bg-white p-8 text-[#0050a8]">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-600">
            Aplicações
          </p>
          <h2 className="mt-4 text-4xl font-black">
            Onde usar games corporativos
          </h2>

          <div className="mt-8 grid gap-4">
            {aplicacoes.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#0050a8]/15 bg-[#0050a8]/5 p-5 text-lg font-semibold"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/15 bg-white/5 p-8">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-400">
            Entrega VRMKT
          </p>
          <h2 className="mt-4 text-4xl font-black">
            Não é só o jogo. É a operação completa.
          </h2>

          <div className="mt-8 grid gap-4">
            {entregas.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/15 bg-white/5 p-5 text-lg font-semibold text-white/85"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[2rem] border border-green-400/30 bg-green-400/10 p-8 md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-400">
            Orçamento
          </p>
          <h2 className="mt-4 max-w-4xl text-4xl font-black md:text-5xl">
            Tem um briefing de evento, feira, RH ou ativação de marca?
          </h2>
          <p className="mt-6 max-w-4xl text-xl leading-9 text-white/85">
            Envie objetivo, cidade, data, público estimado e formato da ação.
            A VRMKT indica opções de games corporativos e experiências
            interativas adequadas ao seu projeto.
          </p>

          <div className="mt-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-green-400 px-8 py-4 text-lg font-bold text-[#0050a8] transition hover:bg-green-300"
            >
              Solicitar opções para meu evento
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
