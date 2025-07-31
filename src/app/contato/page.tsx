'use client'
import Image from 'next/image'
import Link from 'next/link'
import Wpp from '@/assets/wpp.png'
import Instagram from '@/assets/instagram.png'
import Youtube from '@/assets/youtube.png'
import { z } from 'zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LinkedInLogoIcon } from '@radix-ui/react-icons'

export default function Contato() {
  const formSchema = z.object({
    name: z.string().min(3, { message: 'Mínimo de 3 caracteres' }),
    phone: z
      .string()
      .regex(
        /^\((?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\) (?:[2-8]|9[0-9])[0-9]{3}-[0-9]{4}$/,
        'Número inválido. Ex: (99) 99999-9999',
      ),
    email: z.string().email({ message: 'Email inválido' }),
    empresa: z.string().optional(),
    mensagem: z.string().min(3, { message: 'Mínimo de 3 caracteres' }),
    opcoes: z.array(z.string()).min(1, 'Selecione pelo menos uma opção.'),
  })

  type FormSchema = z.infer<typeof formSchema>

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit: SubmitHandler<FormSchema> = (data: FormSchema) => {
    const params = {
      name: encodeURIComponent(data.name),
      phone: encodeURIComponent(data.phone),
      email: encodeURIComponent(data.email),
      mensagem: encodeURIComponent(data.mensagem),
      empresa: data.empresa ? encodeURIComponent(data.empresa) : '---',
      opcoes: encodeURIComponent(data.opcoes.join(', ')),
    }
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5511972620886&text=*Nome*%20%3A%20${params.name}%0A*E-mail*%20%3A%20${params.email}%0A*Celular*%20%3A%20${params.phone}%0A*Empresa*%20%3A%20${params.empresa}%0A*O%20que%20est%C3%A1%20buscando*%20%3A%20${params.opcoes}%0A*Mensagem*%20%3A%20${params.mensagem}`
    window.open(whatsappUrl, '_blank')
    console.log(data)
  }

  const selectOpcoes = [
    { id: 'opcao1', label: 'Experiência em Realidade Virtual' },
    { id: 'opcao2', label: 'Realidade Aumentada ou Mista' },
    { id: 'opcao3', label: 'Game interativo personalizado' },
    { id: 'opcao4', label: 'Projeto de design de experiência' },
    { id: 'opcao5', label: 'Locação de equipamentos tecnológicos' },
    { id: 'opcao6', label: 'Projeto especial com tecnologia imersiva' },
    { id: 'opcao7', label: 'Outro projeto' },
  ]

  return (
    <main className="mx-auto mt-14 flex min-h-screen w-full max-w-7xl flex-col px-5 md:mt-20 md:px-10">
      <span className="mt-10 max-w-[340px] text-center text-sm md:mt-20 md:max-w-[680px] md:text-left md:text-xl md:font-semibold">
        Temos algumas perguntas rápidas para ajudar nossa equipe especializada a
        entender seu problema e entrar em contato com você por WhatsApp.
      </span>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-5 flex flex-col items-center gap-10 rounded-xl border border-[#0690CC] p-5 md:mt-10 md:p-10"
      >
        <div className="flex w-full flex-col justify-around gap-10 md:flex-row md:gap-20">
          <div className="flex w-full flex-col gap-10 md:w-1/3">
            <fieldset className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="nome">
                Nome
              </label>
              <input
                {...register('name')}
                type="text"
                id="nome"
                className="border-b border-white bg-transparent text-[#0690CC] placeholder:text-[#0690CC]"
              />
              {errors.name && (
                <span className="text-amber-500">{errors.name.message}</span>
              )}
            </fieldset>

            <fieldset className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="email">
                E-mail profissional
              </label>
              <input
                {...register('email')}
                type="text"
                id="email"
                placeholder="[Ajudará na personalização da proposta]"
                className="border-b border-white bg-transparent text-[#0690CC] placeholder:text-[#0690CC]"
              />
              {errors.email && (
                <span className="text-amber-500">{errors.email.message}</span>
              )}
            </fieldset>
            <fieldset className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="celular">
                WhatsApp com DD
              </label>
              <input
                {...register('phone')}
                type="text"
                id="celular"
                placeholder="[Esse será o canal para o primeiro contato direto]"
                className="border-b border-white bg-transparent text-[#0690CC] placeholder:text-[#0690CC]"
              />
              {errors.phone && (
                <span className="text-amber-500">{errors.phone.message}</span>
              )}
            </fieldset>
            <fieldset className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="empresa">
                Nome da empresa/marca
              </label>
              <input
                {...register('empresa')}
                type="text"
                id="empresa"
                placeholder="[Se estiver representando uma marca]"
                className="border-b border-white bg-transparent text-[#0690CC] placeholder:text-[#0690CC]"
              />
              {errors.empresa && (
                <span className="text-amber-500">{errors.empresa.message}</span>
              )}
            </fieldset>
          </div>
          <div className="flex w-full flex-col gap-10 md:w-1/2">
            <fieldset className="flex flex-col text-[#0690CC]">
              <legend className="mb-2 font-semibold text-white">
                O que você está buscando?
              </legend>
              {selectOpcoes.map((item) => (
                <label key={item.id} className="flex gap-2">
                  <input
                    type="checkbox"
                    id={item.id}
                    value={item.label}
                    className="text-[#0690CC]"
                    {...register('opcoes')}
                  />
                  {item.label}
                </label>
              ))}
              {errors.opcoes && (
                <span className="text-amber-500">{errors.opcoes.message}</span>
              )}
            </fieldset>

            <fieldset className="flex flex-col gap-2">
              <label htmlFor="mensagem" className="font-semibold">
                Deseja compartilhar mais informações?
              </label>
              <textarea
                {...register('mensagem')}
                id="mensagem"
                placeholder="Digite aqui"
                rows={4}
                // cols={50}
                className="resize-none bg-[#0e2457] p-2"
              />
              {errors.mensagem && (
                <span className="text-amber-500">
                  {errors.mensagem.message}
                </span>
              )}
            </fieldset>
          </div>
        </div>

        <button
          disabled={isSubmitting}
          type="submit"
          className="w-fit cursor-pointer rounded-full border border-[#00bc00] px-8 py-2 text-lg font-semibold text-[#00bc00] transition-colors duration-300 hover:bg-[#00bc00] hover:text-[#0e2457]"
        >
          Enviar
        </button>
      </form>
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
