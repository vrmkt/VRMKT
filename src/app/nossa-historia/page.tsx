'use client'
import Logo from '@/assets/Logo.svg'
import Image from 'next/image'
import Logo1 from '@/assets/linha-do-tempo/Ativo 1.svg'
import ImgItem2 from '@/assets/linha-do-tempo/Ativo 3.png'
import ImgItem3 from '@/assets/linha-do-tempo/Ativo 12.png'
import ImgItem4 from '@/assets/linha-do-tempo/Ativo 11.png'
import ImgItem5 from '@/assets/linha-do-tempo/Ativo 10.png'
import ImgItem6 from '@/assets/linha-do-tempo/Ativo 9.png'
import ImgItem7 from '@/assets/linha-do-tempo/Ativo 8.png'
import ImgItem8 from '@/assets/linha-do-tempo/Ativo 7.png'
import ImgItem9 from '@/assets/linha-do-tempo/Ativo 6.png'
import ImgItem10 from '@/assets/linha-do-tempo/Ativo 5.png'
import Mouse from '@/assets/linha-do-tempo/Ativo 2.svg'
import { useRef } from 'react'

export default function NossaHistoria() {
  const containerRef = useRef<HTMLDivElement>(null)

  const handleWheel = (e: React.WheelEvent) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += e.deltaY
    }
  }
  return (
    <main className="mt-[56px] flex items-center justify-start overflow-hidden bg-white md:mt-[80px] md:h-[calc(100vh-200px)] md:pr-40">
      <section
        ref={containerRef}
        onWheel={handleWheel}
        className="hideScrollbar relative flex h-full w-full items-center overflow-x-scroll bg-white py-10"
      >
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-5 md:hidden">
          <Mouse className="h-8 w-auto -rotate-90" />
          <p className="w-[190px] text-sm text-[#0690CC] md:hidden">
            Deslize para o lado e descruba
          </p>
        </div>
        <div className="ml-10 flex w-[470px] shrink-0 flex-col items-start justify-center gap-2 md:ml-40">
          <h1 className="owners-xnarrow text-5xl font-bold text-[#084ca4] md:text-6xl">
            Linha do tempo
          </h1>
          <Logo className="h-10 w-auto md:h-12" />
          <div className="mt-10 flex w-[300px] shrink-0 flex-col gap-2 text-base font-medium leading-6 text-[#081444] md:w-[470px] md:text-lg">
            <p>
              Uma coisa a gente aprendeu nesses quase 10 anos de história da
              VRMKT: autoridade leva tempo. Já são mais de 3.200 dias de
              inovação, organização, criação e muita pesquisa. Tudo para criar
              experiências imersivas com um objetivo: encantar.
            </p>
            <p>
              Na nossa linha do tempo, sempre que olhamos pra trás, a gente
              encontra um projeto que nos orgulha e que fez a gente chegar até
              aqui.
            </p>
            <p className="font-semibold">
              Quando olhamos pra trás, a gente vê o futuro.
            </p>
          </div>
        </div>
        <div className="relative flex">
          <div className="gradientLinhaDoTempo absolute left-0 top-1/2 h-1 w-52 -translate-x-full md:hidden" />
          <div className="absolute left-0 top-1/2 w-[360rem] border-b-4 border-b-[#08c4e4] md:ml-[144px] md:w-[420rem]" />
          <div className="absolute left-0 top-1/2 ml-[360rem] w-[10rem] border-b-4 border-dashed border-b-[#08c4e4] md:ml-[420rem] md:ml-[calc(144px+420rem)]" />
        </div>
        <div className="relative my-auto flex h-full w-[80rem] flex-col text-[#084ca4] md:pl-36">
          {/* Lista de cima */}
          <div className="flex h-1/2 items-end [&>div]:w-[600px] [&>div]:shrink-0 md:[&>div]:w-[700px]">
            {/* Item 1 */}
            <div className="flex border-l-4 border-l-transparent pb-6">
              <Logo1 className="h-10 w-auto" />
            </div>
            {/* Item 2 */}
            <div className="relative flex shrink-0 flex-col border-l-4 border-l-[#08bc04] pb-6 pl-4">
              <h3 className="owners-xnarrow text-4xl font-bold text-[#084ca4] md:text-5xl">
                2017
              </h3>
              <h4 className="owners-xnarrow text-3xl font-bold text-[#0690CC] md:text-4xl">
                Chegamos ao Rio
              </h4>
              <p className="mt-2 max-w-72 text-sm font-medium text-neutral-600 md:max-w-[320px] md:text-base">
                · Expansão para o Rio de Janeiro. <br className="mb-1" />·
                Experiência em Realidade Virtual para Magneti Marelli
                (lançamento do Fiat Argo).
              </p>
            </div>
            {/* Item 3 */}
            <div className="flex border-l-4 border-l-transparent pb-6">
              <Image
                alt=""
                src={ImgItem3}
                className="h-40 w-auto md:h-48"
                quality={100}
              />
            </div>
            {/* Item 4 */}
            <div className="relative flex shrink-0 flex-col border-l-4 border-l-[#08bc04] pb-6 pl-4">
              <h3 className="owners-xnarrow text-4xl font-bold text-[#084ca4] md:text-5xl">
                2019
              </h3>
              <h4 className="owners-xnarrow max-w-72 text-3xl font-bold text-[#0690CC] md:max-w-none md:text-4xl">
                QUANDO A INOVAÇÃO ENCONTRA A EXPERIÊNCIA
              </h4>
              <p className="mt-2 w-full max-w-72 text-sm font-medium text-neutral-600 md:max-w-[400px] md:text-base">
                .Ação em Realidade Virtual para Heineken (promoção UEFA
                Champions League).
                <br className="mb-1" />
                · Desenvolvimento de aplicativo em Realidade Aumentada para
                lançamento do Toyota Corolla.
                <br className="mb-1" />· Início da parceria com Veronica Marques
                para aplicar Design de Experiências aos projetos.
              </p>
            </div>
            {/* Item 5 */}
            <div className="flex border-l-4 border-l-transparent pb-6">
              <Image
                alt=""
                src={ImgItem5}
                className="h-40 w-auto md:h-48"
                quality={100}
              />
            </div>
            {/* Item 6 */}
            <div className="relative flex shrink-0 flex-col border-l-4 border-l-[#08bc04] pb-6 pl-4">
              <h3 className="owners-xnarrow text-4xl font-bold text-[#084ca4] md:text-5xl">
                2021
              </h3>
              <h4 className="owners-xnarrow text-3xl font-bold text-[#0690CC] md:text-4xl">
                CONFIANÇA E RELACIONAMENTO COM A SICREDI
              </h4>
              <p className="mt-2 max-w-72 text-sm font-medium text-neutral-600 md:max-w-[400px] md:text-base">
                · Implantação da Estação pela Sicredi Ouro Verde MT.
              </p>
            </div>
            {/* Item 7 */}
            <div className="flex border-l-4 border-l-transparent pb-6">
              <Image
                alt=""
                src={ImgItem7}
                className="h-40 w-auto md:h-48"
                quality={100}
              />
            </div>
            {/* Item 8 */}
            <div className="relative flex shrink-0 flex-col border-l-4 border-l-[#08bc04] pb-6 pl-4">
              <h3 className="owners-xnarrow text-4xl font-bold text-[#084ca4] md:text-5xl">
                2023
              </h3>
              <h4 className="owners-xnarrow text-3xl font-bold text-[#0690CC] md:text-4xl">
                ROCK IN RIO: A VRMKT ESTAVA LÁ.
              </h4>
              <p className="mt-2 max-w-72 text-sm font-medium text-neutral-600 md:max-w-[380px] md:text-base">
                · Projeto especial de vending machines Heineken.{' '}
                <br className="mb-1" />· Ativação promocional para Rock in Rio
                com experiências sensoriais.
              </p>
            </div>
            {/* Item 9 */}
            <div className="flex border-l-4 border-l-transparent pb-6">
              <Image
                alt=""
                src={ImgItem9}
                className="h-40 w-auto md:h-48"
                quality={100}
              />
            </div>
            {/* Item 10 */}
            <div className="relative flex shrink-0 flex-col border-l-4 border-l-[#08bc04] pb-6 pl-4">
              <h3 className="owners-xnarrow text-4xl font-bold text-[#084ca4] md:text-5xl">
                2025
              </h3>
              <h4 className="owners-xnarrow text-3xl font-bold text-[#0690CC] md:text-4xl">
                A GENTE NÃO PARA DE CRIAR
              </h4>
              <p className="mt-2 max-w-72 text-sm font-medium text-neutral-600 md:max-w-[428px] md:text-base">
                · Desenvolvimento de ferramenta em Realidade Aumentada para o
                catálogo de vendas Masterpiece Figures. <br className="mb-1" />·
                Novos projetos com cooperativas Sicredi, expandindo experiências
                gamificadas e imersivas.
              </p>
            </div>
          </div>
          {/* Lista de baixo */}
          <div className="flex h-1/2 items-start [&>div]:w-[600px] [&>div]:shrink-0 md:[&>div]:w-[700px]">
            {/* Item 1 */}
            <div className="relative flex shrink-0 flex-col border-l-4 border-l-[#08bc04] pl-4 pt-6">
              <div className="absolute -left-[2px] top-[2px] aspect-square w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0874c4]" />
              <h3 className="owners-xnarrow text-4xl font-bold text-[#084ca4] md:text-5xl">
                2016
              </h3>
              <h4 className="owners-xnarrow text-3xl font-bold text-[#0690CC] md:text-4xl">
                Como tudo começou
              </h4>
              <p className="mt-2 max-w-72 text-sm font-medium text-neutral-600 md:max-w-[300px] md:text-base">
                . Fundação da VRMKT (01/11), com foco em soluções de Realidade
                Virtual e Realidade Aumentada.
              </p>
            </div>
            {/* Item 2 */}
            <div className="relative flex shrink-0 border-l-4 border-l-transparent pt-8">
              <div className="absolute -left-[2px] top-[2px] aspect-square w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0874c4]" />
              <Image
                alt=""
                src={ImgItem2}
                className="h-40 w-auto md:h-48"
                quality={100}
              />
            </div>
            {/* Item 3 */}
            <div className="relative flex shrink-0 flex-col border-l-4 border-l-[#08bc04] pl-4 pt-6">
              <div className="absolute -left-[2px] top-[2px] aspect-square w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0874c4]" />
              <h3 className="owners-xnarrow text-4xl font-bold text-[#084ca4] md:text-5xl">
                2018 {'->'} 2021
              </h3>
              <h4 className="owners-xnarrow text-3xl font-bold text-[#0690CC] md:text-4xl">
                EXPERIÊNCIAS IMERSIVAS
              </h4>
              <p className="mt-2 max-w-72 text-sm font-medium text-neutral-600 md:max-w-[350px] md:text-base">
                · Experiências imersivas para o evento Green Nation (simulação
                de asa delta, subaquática e sobrevoo urbano).
              </p>
            </div>
            {/* Item 4 */}
            <div className="relative flex shrink-0 border-l-4 border-l-transparent pt-8">
              <div className="absolute -left-[2px] top-[2px] aspect-square w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0874c4]" />
              <Image
                alt=""
                src={ImgItem4}
                className="h-40 w-auto md:h-48"
                quality={100}
              />
            </div>
            {/* Item 5 */}
            <div className="relative flex shrink-0 flex-col border-l-4 border-l-[#08bc04] pl-4 pt-6">
              <div className="absolute -left-[2px] top-[2px] aspect-square w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0874c4]" />
              <h3 className="owners-xnarrow text-4xl font-bold text-[#084ca4] md:text-5xl">
                2020
              </h3>
              <h4 className="owners-xnarrow text-3xl font-bold text-[#0690CC] md:text-4xl">
                INTEGRAÇÃO DE DIFERENTES TECNOLOGIAS
              </h4>
              <p className="mt-2 max-w-72 text-sm font-medium text-neutral-600 md:max-w-[380px] md:text-base">
                · Concepção da &quot;Estação das Experiências Sicredi&quot;
                integrando Realidade Virtual, Realidade Aumentada, filmes e
                games interativos.
              </p>
            </div>
            {/* Item 6 */}
            <div className="relative flex shrink-0 border-l-4 border-l-transparent pt-8">
              <div className="absolute -left-[2px] top-[2px] aspect-square w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0874c4]" />
              <Image
                alt=""
                src={ImgItem6}
                className="h-40 w-auto md:h-48"
                quality={100}
              />
            </div>
            {/* Item 7 */}
            <div className="relative flex shrink-0 flex-col items-start border-l-4 border-l-[#08bc04] pl-4 pt-6">
              <div className="absolute -left-[2px] top-[2px] aspect-square w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0874c4]" />
              <h3 className="owners-xnarrow text-4xl font-bold text-[#084ca4] md:text-5xl">
                2022
              </h3>
              <h4 className="owners-xnarrow text-3xl font-bold text-[#0690CC] md:text-4xl">
                AUMENTANDO NOSSO IMPACTO
              </h4>
              <p className="mt-2 max-w-72 text-sm font-medium text-neutral-600 md:max-w-[470px] md:text-base">
                · Ampliação da Estação em eventos cooperativos e educacionais.
                <br className="mb-1" />
                · Fortalecimento do portfólio com cases no setor financeiro e
                institucional.
                <br className="mb-1" />· Nova identidade visual, alinhada com
                posicionamento de marca impactante e versátil.
              </p>
              <Logo className="mt-4 h-10 w-auto" />
            </div>
            {/* Item 8 */}
            <div className="relative flex shrink-0 border-l-4 border-l-transparent pt-8">
              <div className="absolute -left-[2px] top-[2px] aspect-square w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0874c4]" />
              <Image
                alt=""
                src={ImgItem8}
                className="h-40 w-auto md:h-48"
                quality={100}
              />
            </div>
            {/* Item 9 */}
            <div className="relative flex shrink-0 flex-col border-l-4 border-l-[#08bc04] pl-4 pt-6">
              <div className="absolute -left-[2px] top-[2px] aspect-square w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0874c4]" />
              <h3 className="owners-xnarrow text-4xl font-bold text-[#084ca4] md:text-5xl">
                2024
              </h3>
              <h4 className="owners-xnarrow text-3xl font-bold text-[#0690CC] md:text-4xl">
                IMERSÃO LÚDICA EM TREINAMENTO? CLARO!
              </h4>
              <p className="mt-2 max-w-72 text-sm font-medium text-neutral-600 md:max-w-[380px] md:text-base">
                · Treinamentos corporativos em Realidade Virtual para a Auren
                Energia. <br className="mb-1" />· Ativação Caiaque VR para o
                Coob
              </p>
            </div>
            {/* Item 10 */}
            <div className="relative flex shrink-0 border-l-4 border-l-transparent pt-8">
              <div className="absolute -left-[2px] top-[2px] aspect-square w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0874c4]" />
              <Image
                alt=""
                src={ImgItem10}
                className="h-40 w-auto md:h-48"
                quality={100}
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 ml-36 hidden -translate-x-10 items-center gap-3 md:flex">
            <Mouse className="h-10 w-auto" />
            <span className="text-[#0690CC]">
              Deslize para baixo e descruba
            </span>
          </div>
        </div>
      </section>
    </main>
  )
}
