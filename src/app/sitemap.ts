import type { MetadataRoute } from 'next'

const baseUrl = 'https://www.vrmarkt.com.br'

const routes = [
  '/',
  '/nossa-historia',
  '/produtos-e-servicos',
  '/clientes',
  '/contato',
  '/empresa-de-experiencias-imersivas',
  '/realidade-virtual-para-eventos',
  '/locacao-de-games-para-eventos',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }))
}
