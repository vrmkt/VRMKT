import WppFooter from '@/assets/wpp-footer.png'
import InstagramFooter from '@/assets/instagram-footer.png'
import YoutubeFooter from '@/assets/youtube-footer.png'
import Link from 'next/link'
import Image from 'next/image'
import LogoFooter from '@/assets/logo-footer.png'

const footerLinks = [
  {
    title: 'Empresa',
    url: '/empresa-de-experiencias-imersivas',
  },
  {
    title: 'Realidade virtual para eventos',
    url: '/realidade-virtual-para-eventos',
  },
  {
    title: 'Locação de games corporativos para eventos',
    url: '/locacao-de-games-para-eventos',
  },
  {
    title: 'Produtos e serviços',
    url: '/produtos-e-servicos',
  },
  {
    title: 'Clientes',
    url: '/clientes',
  },
  {
    title: 'Contato',
    url: '/contato',
  },
]

export function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 py-5 md:flex-row md:items-center md:justify-between md:px-20 md:py-10">
      <Image alt="" src={LogoFooter} className="h-6 w-auto md:h-10" />
      <nav aria-label="Links do rodape">
        <ul className="flex max-w-2xl flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-[#004BA1]">
          {footerLinks.map((link) => (
            <li key={link.url}>
              <Link href={link.url} className="hover:underline">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-5">
        <Link
          href="https://api.whatsapp.com/send/?phone=5511972620886"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image alt="" src={WppFooter} className="h-4 w-auto md:h-5" />
        </Link>
        <Link
          href="https://www.instagram.com/vrmkt/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image alt="" src={InstagramFooter} className="h-4 w-auto md:h-5" />
        </Link>
        <Link
          href="https://www.youtube.com/@vrmkt5658"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image alt="" src={YoutubeFooter} className="h-4 w-auto md:h-5" />
        </Link>
      </div>
    </footer>
  )
}
