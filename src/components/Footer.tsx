import WppFooter from '@/assets/wpp-footer.png'
import InstagramFooter from '@/assets/instagram-footer.png'
import YoutubeFooter from '@/assets/youtube-footer.png'
import Link from 'next/link'
import Image from 'next/image'
import LogoFooter from '@/assets/logo-footer.png'

export function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 md:px-20 md:py-10">
      <Image alt="" src={LogoFooter} className="h-6 w-auto md:h-10" />
      <div className="flex gap-5">
        <Link
          href="https://api.whatsapp.com/send/?phone=5511972620886"
          target="_blank"
        >
          <Image alt="" src={WppFooter} className="h-4 w-auto md:h-5" />
        </Link>
        <Link href="https://www.instagram.com/vrmkt/" target="_blank">
          <Image alt="" src={InstagramFooter} className="h-4 w-auto md:h-5" />
        </Link>
        <Link href="https://www.youtube.com/@vrmkt5658" target="_blank">
          <Image alt="" src={YoutubeFooter} className="h-4 w-auto md:h-5" />
        </Link>
      </div>
    </footer>
  )
}
