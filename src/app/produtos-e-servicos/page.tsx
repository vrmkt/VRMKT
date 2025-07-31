'use client'
import Image from 'next/image'
import { ArrowDownIcon, ArrowRightIcon } from '@radix-ui/react-icons'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@/styles/splide-cases.css'
import Img1 from '@/assets/produtos-servicos/img1.png'
import Img2 from '@/assets/produtos-servicos/img2.png'
import Img3 from '@/assets/produtos-servicos/img3.png'
import Img4 from '@/assets/produtos-servicos/img4.png'
import Img5 from '@/assets/produtos-servicos/img5.png'
import Link from 'next/link'
import Seta from '@/assets/seta-azul.png'
import { useEffect, useState } from 'react'
import { cases } from '@/content/cases'

type Categoria = 'games' | 'ar' | 'mr' | 'vr' | 'design'
export default function ProdutosEServicos() {
  const [openCase, setOpenCase] = useState(false)
  const [openSplide, setOpenSplide] = useState(false)
  const [caseIndex, setCaseIndex] = useState(0)
  const [categoriaSelecionada, setCategoriaSelecionada] =
    useState<Categoria>('vr')
  const [filteredCases, setFilteredCases] = useState(cases)

  const options = {
    type: 'loop',
    gap: '1rem',
    autoplay: true,
    pauseOnHover: true,
    resetProgress: false,
    arrows: false,
  }

  useEffect(() => {
    if (openCase) {
      setTimeout(() => {
        setOpenSplide(true)
      }, 400)
    } else {
      setOpenSplide(false)
    }
  }, [openCase])

  function handleToggleCase(index: number) {
    setCaseIndex(index)
    setOpenCase(!openCase)
  }

  function handleSelectCategoria(categoria: Categoria) {
    setCategoriaSelecionada(categoria)
  }

  useEffect(() => {
    const newArray = cases.filter((caseItem) =>
      caseItem.categoria.includes(categoriaSelecionada),
    )
    setFilteredCases(newArray)
  }, [categoriaSelecionada])

  return (
    <main className="mt-14 flex min-h-[calc(100vh-200px)] flex-col md:mt-20">
      <section className="flex h-fit w-full flex-col gap-8 bg-[#00bc00] px-5 pb-10 pt-10 md:gap-10 md:pt-20">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 md:gap-5">
          <h2 className="owners-xnarrow text-[1.7rem] font-bold leading-6 text-[#021847] md:text-5xl">
            CONHEÇA UM POUCO DOS NOSSOS PROJETOS
          </h2>
          <p className="max-w-[580px] text-sm md:text-base">
            Ao longo da nossa trajetória, já trabalhamos com grandes marcas e
            realizamos entregas desafiadoras. <br className="mb-2"></br>A
            inovação combinada com o design de experiências é o que garante uma
            entrega personalizada e criativa.
          </p>
        </div>

        <div className="mx-auto grid w-full max-w-7xl grid-rows-5 gap-3 md:flex">
          <div className="group relative flex h-80 w-full overflow-hidden rounded-lg bg-[#004ba0] md:aspect-[1.3] md:h-[351px] md:w-[276px]">
            <Image
              alt=""
              src={Img4}
              className="absolute left-0 top-1/2 h-auto w-full -translate-y-1/2 object-cover opacity-50 transition-all duration-500 group-hover:opacity-20 md:top-0 md:h-full md:w-auto md:translate-y-0"
            />
            <div className="absolute bottom-0 left-0 z-10 flex h-fit flex-col p-3 transition-all duration-500 group-hover:bottom-[320px] group-hover:translate-y-full md:group-hover:bottom-[351px]">
              <div className="">
                <h4 className="owners-xnarrow text-2xl font-bold md:text-3xl">
                  REALIDADE VIRTUAL (VR)
                </h4>
                <h5 className="owners-narrow text-lg uppercase leading-5 md:text-xl md:leading-5">
                  Estratégia criativa para ativar marcas com impacto{' '}
                </h5>
              </div>
              <div className="flex h-0 w-full flex-col justify-between overflow-hidden transition-all duration-500 group-hover:h-[210px] md:group-hover:h-[250px]">
                <p className="pr-3 pt-5 text-xs">
                  O design de experiências conecta pessoas e marcas por meio de
                  jornadas planejadas. Usamos narrativa, sensorialidade e
                  tecnologia para criar ativações únicas, centradas no
                  consumidor. Ideal para live marketing, lançamentos de produtos
                  e eventos interativos.
                </p>
                <Link
                  href={'#cases'}
                  onClick={() => handleSelectCategoria('vr')}
                  className="owners-narrow flex cursor-pointer flex-col items-center text-sm font-bold text-[#00bc00]"
                >
                  <span>Conheça os cases</span>
                  <ArrowDownIcon className="h-auto w-5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="group relative flex h-80 w-full overflow-hidden rounded-lg bg-[#004ba0] md:aspect-[1.3] md:h-[351px] md:w-[276px]">
            <Image
              alt=""
              src={Img2}
              className="absolute left-0 top-1/2 h-auto w-full -translate-y-1/2 object-cover opacity-50 transition-all duration-500 group-hover:opacity-20 md:top-0 md:h-full md:w-auto md:translate-y-0"
            />
            <div className="absolute bottom-0 left-0 z-10 flex h-fit flex-col p-3 transition-all duration-500 group-hover:bottom-[320px] group-hover:translate-y-full md:group-hover:bottom-[351px]">
              <div className="">
                <h4 className="owners-xnarrow text-2xl font-bold md:text-3xl md:text-[1.7rem]">
                  REALIDADE AUMENTADA (AR)
                </h4>
                <h5 className="owners-narrow text-lg uppercase leading-5 md:text-xl md:leading-5">
                  INTERAÇÕES DIGITAIS EM AMBIENTES REAIS
                </h5>
              </div>
              <div className="flex h-0 w-full flex-col justify-between overflow-hidden transition-all duration-500 group-hover:h-[210px] md:group-hover:h-[250px]">
                <p className="pr-3 pt-5 text-xs">
                  A Realidade Aumentada insere elementos digitais no mundo real
                  por meio da câmera do celular. Ideal para ativações de marca
                  em eventos e campanhas promocionais, permite experiências
                  imersivas com alta escala, sem depender de óculos ou
                  equipamentos complexos. Ótimo para entregar conteúdo de forma
                  didática e dinâmica.
                </p>
                <Link
                  href={'#cases'}
                  onClick={() => handleSelectCategoria('ar')}
                  className="owners-narrow flex cursor-pointer flex-col items-center text-sm font-bold text-[#00bc00]"
                >
                  <span>Conheça os cases</span>
                  <ArrowDownIcon className="h-auto w-5" />
                </Link>
              </div>
            </div>
          </div>
          <div className="group relative flex h-80 w-full overflow-hidden rounded-lg bg-[#004ba0] md:aspect-[1.3] md:h-[351px] md:w-[276px]">
            <Image
              alt=""
              src={Img3}
              className="absolute left-0 top-1/2 h-auto w-full -translate-y-1/2 object-cover opacity-50 transition-all duration-500 group-hover:opacity-20 md:top-0 md:h-full md:w-auto md:translate-y-0"
            />
            <div className="absolute bottom-0 left-0 z-10 flex h-fit flex-col p-3 transition-all duration-500 group-hover:bottom-[320px] group-hover:translate-y-full md:group-hover:bottom-[351px]">
              <div className="">
                <h4 className="owners-xnarrow text-2xl font-bold md:text-3xl">
                  REALIDADE MISTA (MR)
                </h4>
                <h5 className="owners-narrow text-lg uppercase leading-5 md:text-xl md:leading-5">
                  Experiências interativas entre o físico e o digital{' '}
                </h5>
              </div>
              <div className="flex h-0 w-full flex-col justify-between overflow-hidden transition-all duration-500 group-hover:h-[210px] md:group-hover:h-[250px]">
                <p className="pr-3 pt-5 text-xs">
                  A Realidade Mista combina elementos da AR (Realidade
                  Aumentada) e da VR (Realidade Virtual), criando experiências
                  onde o digital interage em tempo real com o ambiente físico. É
                  ideal para ativações de alta tecnologia, estandes inteligentes
                  e experiências imersivas para surpreender o público.
                </p>
                <Link
                  href={'#cases'}
                  onClick={() => handleSelectCategoria('mr')}
                  className="owners-narrow flex cursor-pointer flex-col items-center text-sm font-bold text-[#00bc00]"
                >
                  <span>Conheça os cases</span>
                  <ArrowDownIcon className="h-auto w-5" />
                </Link>
              </div>
            </div>
          </div>
          <div className="group relative flex h-80 w-full overflow-hidden rounded-lg bg-[#004ba0] md:aspect-[1.3] md:h-[351px] md:w-[276px]">
            <Image
              alt=""
              src={Img1}
              className="absolute left-0 top-1/2 h-auto w-full -translate-y-1/2 object-cover opacity-50 transition-all duration-500 group-hover:opacity-20 md:top-0 md:h-full md:w-auto md:translate-y-0"
            />
            <div className="absolute bottom-0 left-0 z-10 flex h-fit flex-col p-3 transition-all duration-500 group-hover:bottom-[320px] group-hover:translate-y-full md:group-hover:bottom-[351px]">
              <div className="">
                <h4 className="owners-xnarrow text-2xl font-bold md:text-3xl">
                  Games Interativos
                </h4>
                <h5 className="owners-narrow text-lg uppercase leading-5 md:text-xl md:leading-5">
                  JOGOS PERSONALIZADOS PARA EXPERIÊNCIAS DE MARCA
                </h5>
              </div>
              <div className="flex h-0 w-full flex-col justify-between overflow-hidden transition-all duration-500 group-hover:h-[210px] md:group-hover:h-[250px]">
                <p className="pr-3 pt-5 text-xs">
                  Games interativos são ferramentas poderosas no live marketing.
                  <br />
                  Criamos jogos personalizados que aumentam o engajamento,
                  ampliam o tempo de interação com a marca e geram dados em
                  tempo real. Perfeitos para ativações de marca, estandes e
                  experiências imersivas em eventos.
                </p>
                <Link
                  href={'#cases'}
                  onClick={() => handleSelectCategoria('games')}
                  className="owners-narrow flex cursor-pointer flex-col items-center text-sm font-bold text-[#00bc00]"
                >
                  <span>Conheça os cases</span>
                  <ArrowDownIcon className="h-auto w-5" />
                </Link>
              </div>
            </div>
          </div>
          <div className="group relative flex h-80 w-full overflow-hidden rounded-lg bg-[#004ba0] md:aspect-[1.3] md:h-[351px] md:w-[276px]">
            <Image
              alt=""
              src={Img5}
              className="absolute left-0 top-1/2 h-auto w-full -translate-y-1/2 object-cover opacity-50 transition-all duration-500 group-hover:opacity-20 md:top-0 md:h-full md:w-auto md:translate-y-0"
            />
            <div className="absolute bottom-0 left-0 z-10 flex h-fit flex-col p-3 transition-all duration-500 group-hover:bottom-[320px] group-hover:translate-y-full md:group-hover:bottom-[351px]">
              <div className="">
                <h4 className="owners-xnarrow text-2xl font-bold md:text-3xl">
                  DESIGN DE EXPERIÊNCIAS
                </h4>
                <h5 className="owners-narrow text-lg uppercase leading-5 md:text-xl md:leading-5">
                  Imersão total para ativações digitais impactantes{' '}
                </h5>
              </div>
              <div className="flex h-0 w-full flex-col justify-between overflow-hidden transition-all duration-500 group-hover:h-[210px] md:group-hover:h-[250px]">
                <p className="pr-3 pt-5 text-xs">
                  A Realidade Virtual cria ambientes digitais em 360º onde o
                  público se conecta com a marca de uma forma mais aprofundada.
                  Usada em eventos, ativações e treinamentos, a VR transforma a
                  experiência em algo lúdico e memorável.
                </p>
                <Link
                  href={'#cases'}
                  onClick={() => handleSelectCategoria('design')}
                  className="owners-narrow flex cursor-pointer flex-col items-center text-sm font-bold text-[#00bc00]"
                >
                  <span>Conheça os cases</span>
                  <ArrowDownIcon className="h-auto w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="cases"
        className={`relative flex ${openCase ? 'h-[860px]' : 'h-fit'} w-full flex-col gap-10 overflow-hidden bg-[#0074c3] py-10 md:px-5 md:py-20`}
      >
        <div
          className={`relative mx-auto h-full w-full max-w-7xl ${openCase ? 'opacity-0' : 'opacity-100'} transition-all duration-500`}
        >
          <div className="absolute right-0 top-0 z-10 hidden h-full w-[200px] bg-gradient-to-l from-[#0074c3] to-transparent md:block" />
          <div className="casesScrollbar flex w-full gap-3 overflow-x-scroll pb-2 md:pr-[100px]">
            {filteredCases.map((item, index) => (
              <div
                key={index}
                className={`group flex h-auto w-60 shrink-0 flex-col overflow-hidden rounded-2xl bg-[#009ade] md:m-0 md:w-[288px] ${index === 0 && 'ml-[10px]'} ${index === filteredCases.length - 1 && 'mr-[10px]'}`}
              >
                <button
                  onClick={() => handleToggleCase(index)}
                  className="relative cursor-pointer"
                >
                  <Image
                    alt=""
                    src={item.imgCapa}
                    className="h-auto w-full transition-all duration-500 group-hover:opacity-10"
                  />
                  <div className="absolute left-0 top-0 flex h-full w-0 items-center justify-start overflow-hidden opacity-0 transition-all duration-500 group-hover:left-5 group-hover:w-60 group-hover:opacity-100 md:group-hover:left-10 md:group-hover:w-[288px]">
                    <span className="text-2xl font-bold text-white md:text-3xl">
                      Ver case <br /> completo
                    </span>
                    <span>
                      <ArrowRightIcon className="ml-2 mt-10 h-auto w-6 md:mt-12" />
                    </span>
                  </div>
                </button>
                <div className="flex h-auto w-full flex-col p-5">
                  <h3 className="owners-xnarrow text-2xl font-bold leading-none text-[#021747] md:text-3xl">
                    {item.title}
                  </h3>
                  <h4 className="owners-xnarrow mt-1 text-xl font-bold leading-none text-[#021747] md:text-2xl">
                    {item.cliente}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className={` ${openCase ? 'left-1/2 z-10 w-[calc(100%-20px)] -translate-x-1/2 opacity-100 md:w-full' : 'left-0 -z-10 w-0 translate-x-0 opacity-0'} absolute top-0 mt-5 flex h-auto max-w-7xl flex-col justify-between rounded-2xl bg-[#009ade] p-8 transition-all duration-500 md:mt-20 md:h-[612px] md:flex-row md:p-16`}
        >
          <div className="flex h-full shrink-0 flex-col justify-between">
            <button
              onClick={() => setOpenCase(!openCase)}
              className="block w-fit cursor-pointer md:hidden"
            >
              <Image src={Seta} alt="" className="mb-4 h-auto w-4" />
            </button>
            <div className="flex flex-col text-lg text-[#021747]">
              <h3 className="owners-xnarrow text-2xl font-bold uppercase md:text-4xl">
                {filteredCases[caseIndex].title}
              </h3>
              <div className="mt-4 flex flex-col gap-2 md:mt-8">
                <p>
                  <span className="text-base font-bold md:text-lg">
                    Cliente{' '}
                  </span>
                  <span className="text-sm md:text-base">
                    {filteredCases[caseIndex].cliente}
                  </span>
                </p>
                {filteredCases[caseIndex].content.texto.map((item, index) => (
                  <div key={index} className="max-w-[500px]">
                    <p className="text-base font-bold md:text-lg">
                      {item.title}
                    </p>
                    <p className="text-sm md:text-base">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={() => setOpenCase(!openCase)}
              className="hidden w-fit cursor-pointer md:block"
            >
              <Image src={Seta} alt="" className="h-auto w-6" />
            </button>
          </div>
          <div
            className={`w-full max-w-[492px] ${openSplide ? 'opacity-100' : 'opacity-0'} mt-5 transition-all duration-500 md:mt-0`}
          >
            {openSplide && (
              <Splide options={options}>
                {filteredCases[caseIndex].content.midia.map((item, index) => (
                  <SplideSlide
                    key={index}
                    className="flex items-center justify-center md:block"
                  >
                    {item.tipo === 'imagem' && (
                      <Image
                        alt=""
                        src={item.src}
                        className="h-full max-h-[492px] w-auto shrink-0 rounded-2xl object-contain"
                        quality={100}
                      />
                    )}
                    {item.tipo === 'video' && (
                      <div className="flex h-full items-center justify-center">
                        <iframe
                          className="aspect-video h-auto w-full shrink-0 rounded-2xl"
                          src={item.src as unknown as string}
                          title="YouTube video player"
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                        ></iframe>
                      </div>
                    )}
                  </SplideSlide>
                ))}
              </Splide>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
