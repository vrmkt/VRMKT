'use client'
import Seta from '@/assets/Ativo 11.svg'
import Image from 'next/image'
import Link from 'next/link'
import FotoVr1 from '@/assets/image17.png'
import BackgroundGradient from '@/assets/image1.png'
import BackgroundGradientMobile from '@/assets/Ativo 12mobile.png'
import Sicredi from '@/assets/Ativo 5.png'
import SicrediMobile from '@/assets/Ativo 16mobile.png'
import Corolla from '@/assets/myCorolla.png'
import CorollaMobile from '@/assets/Ativo 20.png'
import Heineken from '@/assets/Ativo 7.png'
import HeinekenMobile from '@/assets/Ativo 14mobile.png'
import Magneti from '@/assets/Ativo 8.png'
import MagnetiMobile from '@/assets/Ativo 13mobile.png'
import Wpp from '@/assets/wpp.png'
import Instagram from '@/assets/instagram.png'
import Youtube from '@/assets/youtube.png'
import SetaAzul from '@/assets/seta-azul.png'
import { useEffect, useState } from 'react'
import { LinkedInLogoIcon } from '@radix-ui/react-icons'

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(false)

  function scrollToSectionWithOffset() {
    const element = document.getElementById('about')
    if (!element) return

    const offset = isDesktop ? 80 : 56

    const y = element.getBoundingClientRect().top + window.pageYOffset - offset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth > 768)
    }

    checkScreenSize()

    window.addEventListener('resize', checkScreenSize)

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])
  return (
    <main className="relative flex flex-col">
      <section className="bg-[#004BA1]">
        <div className="relative mx-auto flex min-h-[calc(100dvh-80px)] w-full max-w-7xl flex-col justify-start gap-5 overflow-hidden px-5 pb-12 pt-32 text-[#00BC00] md:pt-36 lg:pt-40">
          <div className="max-w-5xl pl-5">
           <h1 className="owners-xnarrow max-w-6xl text-5xl font-bold uppercase leading-[0.95] md:text-7xl lg:text-8xl">
  Experiências imersivas, games e
  <br />
  tecnologia para eventos, marcas
  <br />
  e empresas
            </h1>
            <p className="mt-5 max-w-3xl text-xl font-semibold text-white md:text-3xl">
              A VRMKT desenvolve e opera soluções em realidade virtual, realidade aumentada, games corporativos interativos, conteúdos 360º e tecnologias para eventos corporativos, feiras, RH, agências e ativações de marca em todo o Brasil.
            </p>
            <div className="mt-8 flex flex-col gap-3 text-lg font-bold text-white sm:flex-row">
      <Link
                href="/produtos-e-servicos"
                className="rounded-full border border-white px-6 py-2 transition-colors hover:bg-white hover:text-[#004BA1]"
              >
                Conhecer produtos e serviços
              </Link>
              <Link
                href="/contato"
                className="rounded-full border border-white px-6 py-2 transition-colors hover:bg-white hover:text-[#004BA1]"
              >
                Solicitar uma proposta
              </Link>
            </div>
          </div>
          
          <button
            onClick={() => scrollToSectionWithOffset()}
            className="absolute bottom-10 right-1/2 translate-x-1/2"
          >
            <Seta className="hover:drop-shadow-white/80 h-5 w-auto transition-all duration-500 hover:drop-shadow-[0_0px_3px_rgb(0_0_0_/_0.5)] md:h-10" />
          </button>
        </div>
      </section>
      <section className="bg-[#004BA1] px-5 py-16 text-white">
        <div className="mx-auto grid w-full max-w-7xl gap-5 md:grid-cols-3">
          {[
            {
              title: 'Realidade virtual para eventos',
              href: '/realidade-virtual-para-eventos',
            },
            {
              title: 'Locação de games e VR',
              href: '/locacao-de-games-para-eventos',
            },
            {
              title: 'Games personalizados',
              href: '/produtos-e-servicos',
            },
            {
              title: 'Realidade aumentada',
              href: '/produtos-e-servicos',
            },
            {
              title: 'Experiências e conteúdos 360º',
              href: '/produtos-e-servicos',
            },
            {
              title: 'Totens, quizzes e rankings',
              href: '/locacao-de-games-para-eventos',
            },
          ].map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="rounded-xl border border-[#00BC00] p-5 transition-colors hover:bg-[#00BC00] hover:text-[#004BA1]"
            >
              <h2 className="owners-xnarrow text-3xl font-bold">
                {service.title}
              </h2>
            </Link>
          ))}
        </div>
      </section>
      <section
        id="about"
        className="relative h-[50dvh] w-full overflow-hidden md:h-[calc(100dvh-80px)]"
      >
        <iframe
          className="absolute left-1/2 top-0 aspect-video h-full w-auto -translate-x-1/2 md:h-auto md:w-screen"
          src="https://www.youtube.com/embed/hv7RJLuctu0?autoplay=1&mute=1&controls=0&loop=1&playlist=hv7RJLuctu0&rel=0"
          title="YouTube video player"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
        <div className="absolute left-0 top-0 z-10 h-full w-full" />
      </section>
      <section className="relative w-full overflow-hidden md:h-[1100px] md:max-h-screen">
        <Image
          alt=""
          quality={100}
          src={BackgroundGradient}
          className="absolute top-0 -z-10 hidden h-full w-full object-cover md:block"
        />
        <Image
          alt=""
          quality={100}
          src={BackgroundGradientMobile}
          className="absolute top-0 -z-10 h-full w-full object-cover md:hidden"
        />
        <div className="mx-auto flex h-full w-full max-w-7xl flex-col md:flex-row">
          <div className="flex w-full flex-col justify-center gap-10 px-6 pt-10 md:w-[45%] md:p-10">
            <h2 className="owners-xnarrow text-2xl text-[1.7rem] font-semibold text-[#00BC00] md:text-5xl">
              TECNOLOGIA QUE CRIA EXPERIÊNCIAS.{' '}
              <br className="hidden md:block" />
              CONTEÚDO QUE CONECTA
            </h2>
            <div className="flex flex-col gap-2 text-sm md:text-lg">
              <p className="font-bold">
                Há quase 10 anos no mercado, nós da VRMKT trabalhamos para
                potencializar a conexão entre pessoas e marcas.
              </p>
              <p>Como fazemos isso?</p>
              <p>
                Com criatividade e inovação: usamos realidade virtual, aumentada
                e mista, games corporativos interativos e criamos design de experiências para
                aumentar o impacto na comunicação das marcas.
              </p>
              <p className="font-bold">A tecnologia está na nossa essência.</p>
              <p>
                Entregamos soluções imersivas e desenvolvemos conteúdos com foco
                no resultado.
              </p>
              <p>
                Tudo com um só objetivo: tornar cada experiência inesquecível.
              </p>
            </div>
          </div>
          <div className="flex h-full w-full items-end px-5 md:w-[55%] md:px-0">
            <Image
              alt=""
              src={FotoVr1}
              quality={100}
              className="h-auto w-full !shrink-0"
            />
          </div>
        </div>
      </section>
      <section className="z-20 -mt-4 h-auto w-full md:mt-0">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 rounded-xl bg-[#00bc00] p-3 md:gap-5 md:rounded-3xl md:p-5">
          <Link href={'/produtos-e-servicos'} className="relative max-h-screen w-full overflow-hidden rounded-lg md:rounded-xl">
            <Image
              alt=""
              src={Sicredi}
              className="hidden h-auto w-full md:block"
            />
            <Image
              alt=""
              src={SicrediMobile}
              className="h-auto w-full md:hidden"
            />
            <div className="absolute bottom-4 left-3 md:bottom-10 md:left-10">
              <h3 className="owners-xnarrow text-3xl font-bold md:text-5xl">
                ESTAÇÃO DAS EXPERIÊNCIAS
              </h3>
              <h4 className="owners-xnarrow text-xl font-bold leading-3 md:text-3xl">
                SICREDI OURO VERDE MT
              </h4>
            </div>
          </Link>
          <Link href={'/produtos-e-servicos'} className="relative max-h-screen w-full overflow-hidden rounded-lg md:rounded-xl">
            <Image
              alt=""
              src={Corolla}
              className="hidden h-auto w-full md:block"
            />
            <Image
              alt=""
              src={CorollaMobile}
              className="h-auto w-full md:hidden"
            />
            <div className="absolute bottom-4 left-3 md:bottom-10 md:left-10">
              <h3 className="owners-xnarrow text-3xl font-bold md:text-5xl">
                NOVO COROLLA 2020
              </h3>
              <h4 className="owners-xnarrow text-xl font-bold leading-3 md:text-3xl">
                TOYOTA
              </h4>
            </div>
          </Link>
          <Link href={'/produtos-e-servicos'} className="relative max-h-screen w-full overflow-hidden rounded-lg md:rounded-xl">
            <Image
              alt=""
              src={Heineken}
              className="hidden h-auto w-full md:block"
            />
            <Image
              alt=""
              src={HeinekenMobile}
              className="h-auto w-full md:hidden"
            />
            <div className="absolute bottom-4 left-3 md:bottom-10 md:left-10">
              <h3 className="owners-xnarrow text-3xl font-bold md:text-5xl">
                PROMOÇÃO UEFA CHAMPIONS LEAGUE
              </h3>
              <h4 className="owners-xnarrow font-3 text-xl leading-none md:text-3xl">
                HEINEKEN
              </h4>
            </div>
          </Link>
          <Link href={'/produtos-e-servicos'} className="relative max-h-screen w-full overflow-hidden rounded-lg md:rounded-xl">
            <Image
              alt=""
              src={Magneti}
              className="hidden h-auto w-full md:block"
            />
            <Image
              alt=""
              src={MagnetiMobile}
              className="h-auto w-full md:hidden"
            />
            <div className="absolute bottom-4 left-3 md:bottom-10 md:left-10">
              <h3 className="owners-xnarrow text-3xl font-bold md:text-5xl">
                MAGNETI MARELLI
              </h3>
              {/* <h4 className="owners-xnarrow text-xl font-bold leading-3 md:text-3xl">
                TOYOTA
              </h4> */}
            </div>
          </Link>
          <div className="flex items-center justify-center">
            <Link
              href="/produtos-e-servicos"
              className="flex items-center justify-center gap-2 py-5 md:py-10"
            >
              <h2 className="owners-xnarrow text-2xl font-bold text-[#004BA1] md:text-4xl">
                CONHEÇA O PORTFOLIO COMPLETO
              </h2>
              <Image
                alt=""
                src={SetaAzul}
                className="h-4 w-auto rotate-180 md:h-6"
              />
            </Link>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-10 px-10 py-20 md:flex-row md:gap-20 md:px-0 md:py-40">
        <div className="flex h-fit flex-col items-center justify-center gap-5 rounded-2xl border p-5 md:h-[150px] md:px-10 md:py-0">
          <h3 className="owners-xnarrow text-2xl font-bold text-[#00BC00] md:text-3xl">
            NOSSOS CANAIS DE COMUNICAÇÃO
          </h3>
          <div className="flex w-full justify-between gap-10">
            <Link href="https://www.linkedin.com/in/reginaldo-mulroth-barboza-2a71b816b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <LinkedInLogoIcon className="h-8 w-auto md:h-10"/>
            </Link>
            <Link href="https://www.instagram.com/vrmkt/" target="_blank" rel="noopener noreferrer">
              <Image alt="" src={Instagram} className="h-8 w-auto md:h-10" />
            </Link>
            <Link href="https://www.youtube.com/@vrmkt5658" target="_blank" rel="noopener noreferrer">
              <Image alt="" src={Youtube} className="h-8 w-auto md:h-10" />
            </Link>
          </div>
        </div>
        <Link href="https://api.whatsapp.com/send/?phone=5511972620886" target="_blank" rel="noopener noreferrer" className="flex h-auto items-center justify-center gap-5 rounded-2xl border p-5 md:h-[150px] md:px-10 md:py-0">
          <div>
            <Image alt="" src={Wpp} className="h-8 w-auto md:h-10" />
          </div>
          <h3 className="owners-xnarrow text-2xl font-bold text-[#00BC00] md:text-3xl">
            CLIQUE AQUI PARA <br /> INICIAR NOSSA CONVERSA
          </h3>
        </Link>
        <Link href="/contato" className="flex flex-col h-auto  justify-center  rounded-2xl border p-5 md:h-[150px] md:px-10 md:py-0">
          <h3 className="owners-xnarrow text-2xl font-bold text-[#00BC00] md:text-3xl">
            Queremos te conhecer!
          </h3>
          <h3 className="owners-xnarrow text-2xl font-bold text-[#00BC00] md:text-3xl">
            Responda algumas perguntas<br/> e entraremos em contato
          </h3>
        </Link>
      </section>
    </main>
  )
}
