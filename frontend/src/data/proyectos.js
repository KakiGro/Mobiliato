import { images } from '@/lib/images'

const { portfolio } = images

export const proyectosContent = {
  intro: {
    eyebrow: 'Proyectos',
    title: 'Diseño y planeación',
    titleAccent: 'con visión integral.',
    subtitle:
      'Un contacto, una llamada, es el inicio del proceso creativo. A través de pláticas e intercambio de ideas entre el cliente y el despacho es como se va desarrollando cada proyecto. Darle vida a los sueños con los que llegan nuestros clientes a trabajar con nosotros.',
    image: images.pages.proyectos,
    imageAlt: 'Sala diseñada por Mobiliato',
  },
  categories: [
    {
      id: 'hogares',
      title: 'Hogar',
      href: '/proyectos/hogares',
      cover: portfolio.coverHogares,
    },
    {
      id: 'comercial',
      title: 'Comercial',
      href: '/proyectos/comercial',
      cover: portfolio.coverComercial,
    },
  ],
  cta: {
    title: 'Convierte tu espacio en algo especial',
    subtitle: 'Consigue hoy el hogar que tú y tu familia necesitan',
    button: { label: 'Comienza ahora', href: '/contacto' },
  },
}

export const hogaresContent = {
  intro: {
    eyebrow: 'Proyectos',
    title: 'Hogares',
    titleAccent: 'diseñados para vivir.',
    subtitle:
      'Espacios residenciales donde la funcionalidad, la calidez y el detalle artesanal se integran en cada ambiente.',
    image: images.pages.hogares,
    imageAlt: 'Proyecto residencial Mobiliato',
  },
  sections: [
    { id: 'salas', title: 'Salas', images: portfolio.hogares.salas },
    { id: 'comedores', title: 'Comedores', images: portfolio.hogares.comedores },
    { id: 'recamaras', title: 'Recámaras', images: portfolio.hogares.recamaras },
    { id: 'cocinas', title: 'Cocinas', images: portfolio.hogares.cocinas },
    { id: 'exteriores', title: 'Exteriores', images: portfolio.hogares.exteriores },
  ],
  cta: proyectosContent.cta,
}

export const comercialContent = {
  intro: {
    eyebrow: 'Proyectos',
    title: 'Espacios comerciales',
    titleAccent: 'con identidad de marca.',
    subtitle:
      'Proyectos para restaurantes, tiendas y entornos corporativos donde el mobiliario refuerza la experiencia del usuario.',
    image: images.pages.comercial,
    imageAlt: 'Proyecto comercial Mobiliato',
  },
  sections: [
    { id: 'restaurantes', title: 'Restaurantes', images: portfolio.comercial.restaurantes },
    { id: 'tiendas', title: 'Tiendas', images: portfolio.comercial.tiendas },
  ],
  cta: proyectosContent.cta,
}
