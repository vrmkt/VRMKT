'use client'
import { NossosClientesComponent } from '@/components/NossosClientesComponent'
import Image from 'next/image'
import backgroundImg from '@/assets/clientes/background.png'
import Link from 'next/link'
import Wpp from '@/assets/wpp.png'
import Instagram from '@/assets/instagram.png'
import Youtube from '@/assets/youtube.png'
import { DepoimentosComponent } from '@/components/DepoimentosComponent'
import { LinkedInLogoIcon } from '@radix-ui/react-icons'

export default function Cliente() {
  return (
    <main className="mt-14 flex min-h-screen flex-col items-center justify-between md:mt-20">
      <section className="relative w-full overflow-hidden bg-[#0074c3]">
        <Image
          src={backgroundImg}
          alt=""
          className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-10"
          quality={100}
        />
        <DepoimentosComponent />
      </section>
      <section className="z-20 -mt-2 flex w-full flex-col gap-10 rounded-lg bg-[#009ade] pb-20 pt-10 md:gap-20 md:py-20">
        <h2 className="owners-xnarrow mx-auto w-full max-w-7xl pl-10 text-4xl font-bold text-[#004ca1] md:px-5 md:text-5xl">
          Nossos Clientes
        </h2>
        <NossosClientesComponent />
      </section>
      <section className="flex flex-col items-center justify-center gap-10 px-0 py-20 md:flex-row md:gap-20 md:px-0 md:py-40">
        <div className="flex h-fit flex-col items-center justify-center gap-5 rounded-2xl border p-5 md:h-[150px] md:px-10 md:py-0">
          <h3 className="owners-xnarrow text-2xl font-bold text-[#00BC00] md:text-3xl">
            NOSSOS CANAIS DE COMUNICAÇÃO
          </h3>
          <div className="flex w-full justify-between gap-10">
            <Link
              href="https://www.linkedin.com/in/reginaldo-mulroth-barboza-2a71b816b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
            >
              <LinkedInLogoIcon className="h-8 w-auto md:h-10" />
            </Link>
            <Link href="https://www.instagram.com/vrmkt/" target="_blank">
              <Image alt="" src={Instagram} className="h-8 w-auto md:h-10" />
            </Link>
            <Link href="https://www.youtube.com/@vrmkt5658" target="_blank">
              <Image alt="" src={Youtube} className="h-8 w-auto md:h-10" />
            </Link>
          </div>
        </div>
        <Link
          href="https://api.whatsapp.com/send/?phone=5511972620886"
          target="_blank"
          className="flex h-auto items-center justify-center gap-5 rounded-2xl border p-5 md:h-[150px] md:px-10 md:py-0"
        >
          <div>
            <Image alt="" src={Wpp} className="h-8 w-auto md:h-10" />
          </div>
          <h3 className="owners-xnarrow text-2xl font-bold text-[#00BC00] md:text-3xl">
            CLIQUE AQUI PARA <br /> INICIAR NOSSA CONVERSA
          </h3>
        </Link>{' '}
      </section>
    </main>
  )
}
