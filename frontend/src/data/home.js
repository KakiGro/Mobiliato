import { images } from '@/lib/images'

export const homeContent = {
  hero: {
    title: 'Perfección en cada detalle',
    cta: { label: 'Conócenos', href: '/nosotros' },
    image: images.home.hero,
    imageAlt: 'Detalle de mobiliario Mobiliato con acabados de alta calidad',
  },
  motto:
    'Diseñar para la gente que vive sus espacios con el fin de convertirlos en su hogar',
  aboutSections: [
    {
      id: 'quienes',
      title: 'Quiénes somos',
      description:
        'Somos un despacho de diseño con más de 30 años de experiencia, dedicados a la arquitectura de interiores, así como al diseño y elaboración de mobiliario residencial, comercial y de hostelería.',
      cta: { label: 'Aprende más', href: '/nosotros' },
      image: images.home.aboutQuienes,
      imageAlt: 'Detalles de diseño interior Mobiliato',
      reversed: false,
    },
    {
      id: 'que',
      title: 'Qué hacemos',
      description:
        'Nuestro trabajo se basa en la premisa de que el cliente reciba más de lo que espera, planificando y desarrollando sus necesidades a través de la compresión de sus espacios, entrelazando estética y funcionalidad',
      cta: { label: 'Aprende más', href: '/proyectos' },
      image: images.home.aboutQue,
      imageAlt: 'Sala diseñada por Mobiliato',
      reversed: true,
    },
    {
      id: 'como',
      title: 'Cómo trabajamos',
      description:
        'Nuestro equipo labora de manera independiente o conjunto a otros despachos, tanto asociados como externos, con el fin de darle al cliente la mejor respuesta, aportando los conocimientos necesarios. Organizando y coordinando los procesos técnicos y de diseño, profundizando en las habilidades requeridas para la coordinación efectiva entre el proyecto arquitectónico y de interiores',
      cta: { label: 'Aprende más', href: '/contacto' },
      image: images.home.aboutComo,
      imageAlt: 'Proceso de trabajo Mobiliato',
      reversed: false,
    },
  ],
  press: {
    title: 'Mobiliato en Revista EntreMuros',
    link: {
      label: 'Ir a Revista',
      href: 'https://www.reforma.com/libre/online07/aplicacionei/Pagina.html?seccion=entremuros&fecha=20220801',
    },
    image: images.home.press,
    imageAlt: 'Publicación de Mobiliato en Revista EntreMuros',
  },
  cta: {
    title: 'Convierte tu espacio en algo especial',
    subtitle: 'Consigue hoy el hogar que tú y tu familia necesitan',
    button: { label: 'Comienza ahora', href: '/contacto' },
  },
}
