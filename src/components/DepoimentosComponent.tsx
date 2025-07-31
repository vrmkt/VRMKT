import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/core'
import '@splidejs/react-splide/css/sea-green'
import { useEffect, useState } from 'react'

export function DepoimentosComponent() {
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
    type: 'loop',
    gap: '1rem',
    autoplay: true,
    pauseOnHover: true,
    resetProgress: false,
    height: '40rem',
    pagination: !isDesktop,
    arrows: isDesktop,
  }

  const textos = [
    {
      text: '“Além de ser um fornecedor que entrega o serviço que você precisa, também é um parceiro de pensar coisas novas, estar junto imaginando soluções, trabalhando o aperfeiçoamento daquilo que você propõe, e isso para um fornecedor é fundamental.”',
      author: 'Marcos Didonet | Diretor, Green Nation',
      maxWidth: 590,
    },
    {
      text: '“O Design de Experiências apoia na consolidação de jornadas que geram reconhecimento e pertencimento para as marcas, criando relações a partir de ideias, significados e emoções que são muito mais duradouras.”',
      author: 'Veronica Marques | Designer de experiências',
      maxWidth: 620,
    },
    {
      text: '“Trabalhar com VRMKT significa fazer projetos em parceria. Temos certeza de que eles correrão ao nosso lado e abraçarão nosso projeto. Eles são muito dedicados e desenvolvem tecnologia de um jeito descomplicado, aumentando nossa criatividade e capacidade de ofertar as mais diferentes experiências para o consumidor. A orientação para a qualidade de entrega e resultados finais os fazem ser um de nossos principais parceiros quando o assunto é tecnologia.”',
      author: 'Lucas Manzano | Diretor de Atendimento, Agência EA',
      maxWidth: 900,
    },
  ]

  return (
    <div className="mx-auto w-full max-w-7xl px-5">
      <Splide options={options}>
        {textos.map((item) => (
          <SplideSlide
            key={item.text}
            className="flex flex-col items-start justify-center gap-2 px-5 md:px-20"
          >
            <p
              style={{ maxWidth: item.maxWidth }}
              className="text-left text-lg font-bold text-white md:text-4xl"
            >
              {item.text}
            </p>
            <span className="text-lg font-bold text-white md:text-3xl">
              {item.author}
            </span>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}
