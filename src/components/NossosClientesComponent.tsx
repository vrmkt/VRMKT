import { Splide, SplideSlide } from '@splidejs/react-splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import Image from 'next/image'
import '@/styles/splide-core.css'

// ////////////////////////////////////////////////
import Cliente1 from '@/assets/clientes/Ativo 1.png'
import Cliente2 from '@/assets/clientes/Ativo 2.png'
import Cliente3 from '@/assets/clientes/Ativo 3.png'
import Cliente4 from '@/assets/clientes/Ativo 4.png'
import Cliente5 from '@/assets/clientes/Ativo 5.png'
import Cliente6 from '@/assets/clientes/Ativo 6.png'
import Cliente7 from '@/assets/clientes/Ativo 7.png'
import Cliente8 from '@/assets/clientes/Ativo 8.png'
import Cliente9 from '@/assets/clientes/Ativo 9.png'
import Cliente10 from '@/assets/clientes/Ativo 10.png'
import Cliente11 from '@/assets/clientes/Ativo 11.png'
import Cliente12 from '@/assets/clientes/Ativo 12.png'
import Cliente13 from '@/assets/clientes/Ativo 13.png'
import Cliente14 from '@/assets/clientes/Ativo 14.png'
import Cliente15 from '@/assets/clientes/Ativo 15.png'
import Cliente16 from '@/assets/clientes/Ativo 16.png'
import Cliente17 from '@/assets/clientes/Ativo 17.png'
import Cliente18 from '@/assets/clientes/Ativo 18.png'
import Cliente20 from '@/assets/clientes/Ativo 20.png'
import Cliente21 from '@/assets/clientes/Ativo 21.png'
import Cliente22 from '@/assets/clientes/Ativo 22.png'
import Cliente23 from '@/assets/clientes/Ativo 23.png'
import Cliente24 from '@/assets/clientes/Ativo 24.png'
import Cliente25 from '@/assets/clientes/Ativo 25.png'
import Cliente26 from '@/assets/clientes/Ativo 26.png'
import Cliente27 from '@/assets/clientes/Ativo 27.png'
import Cliente28 from '@/assets/clientes/Ativo 28.png'
import Cliente29 from '@/assets/clientes/Ativo 29.png'
import Cliente30 from '@/assets/clientes/Ativo 30.png'
import Cliente31 from '@/assets/clientes/Ativo 31.png'
import Cliente32 from '@/assets/clientes/Ativo 32.png'
import Cliente33 from '@/assets/clientes/Ativo 33.png'
import Cliente34 from '@/assets/clientes/Ativo 34.png'
import Cliente35 from '@/assets/clientes/Ativo 35.png'
import Cliente36 from '@/assets/clientes/Ativo 36.png'
import Cliente37 from '@/assets/clientes/Ativo 37.png'
import Cliente38 from '@/assets/clientes/Ativo 38.png'
import { useEffect, useState } from 'react'
// ////////////////////////////////////////////////

export function NossosClientesComponent() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth > 768)
    }

    checkScreenSize()

    window.addEventListener('resize', checkScreenSize)

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const options = {
    padding: 0,
    type: 'loop',
    gap: isDesktop ? '20px' : '10px',
    drag: false,
    arrows: false,
    pagination: false,
    perPage: isDesktop ? 9 : 5,
    autoScroll: {
      pauseOnHover: false,
      pauseOnFocus: false,
      rewind: false,
      speed: 1,
    },
  }

  const clientes = [
    Cliente1,
    Cliente2,
    Cliente3,
    Cliente4,
    Cliente5,
    Cliente6,
    Cliente7,
    Cliente8,
    Cliente9,
    Cliente10,
    Cliente11,
    Cliente12,
    Cliente13,
    Cliente14,
    Cliente15,
    Cliente16,
    Cliente17,
    Cliente18,
    Cliente20,
    Cliente21,
    Cliente22,
    Cliente23,
    Cliente24,
    Cliente25,
    Cliente26,
    Cliente27,
    Cliente28,
    Cliente29,
    Cliente30,
    Cliente31,
    Cliente32,
    Cliente33,
    Cliente34,
    Cliente35,
    Cliente36,
    Cliente37,
    Cliente38,
  ]

  const fileira1 = clientes.slice(0, 10)
  const fileira2 = clientes.slice(10, 19)
  const fileira3 = clientes.slice(19, 29)
  const fileira4 = clientes.slice(29, 37)

  const splideList = [fileira1, fileira2, fileira3, fileira4]

  return (
    <div className="flex flex-col gap-5 md:gap-10">
      {splideList.map((fileira, index) => (
        <Splide
          key={index}
          options={options}
          extensions={{ AutoScroll }}
          style={{ padding: '0 !important' }}
        >
          {fileira.map((item) => (
            <SplideSlide key={item.src} className="w-fit! p-0!">
              <Image src={item} alt="" quality={100} />
            </SplideSlide>
          ))}
        </Splide>
      ))}
    </div>
  )
}
