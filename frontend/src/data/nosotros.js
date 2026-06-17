import { images } from '@/lib/images'

export const nosotrosContent = {
  intro: {
    eyebrow: 'Nosotros',
    title: 'Trabajamos contigo para definir tu hogar,',
    titleAccent: 'un espacio donde tu familia y amigos disfruten.',
    image: images.pages.nosotros,
    imageAlt: 'Detalle de mobiliario y diseño interior Mobiliato',
  },
  story: {
    title: 'Nuestra historia',
    paragraphs: [
      'Mobiliato® es un despacho de diseño creado en el año 2004 por Gabriel Guerrero Mouret, mismo que cuenta con más de 30 años de experiencia en el sector y se dedica al diseño y creación de espacios e interiores así como al diseño y elaboración de mobiliario tanto residencial, comercial y hostelería, así ayudando a nuestros clientes a descubrir su hogar en el lugar en donde viven.',
      'Nuestra empresa radica en la ciudad de México teniendo la capacidad de acción en todo el territorio nacional y en colaboración de profesionales asociados en Europa y Centroamérica.',
    ],
    image: images.home.aboutQuienes,
    imageAlt: 'Detalle de mobiliario y diseño interior Mobiliato',
  },
  servicesHeading: 'Algunos de Nuestros Servicios',
  services: [
    {
      id: 'sillas',
      title: 'Sillas',
      description:
        'Diseño ergonómico y acabados personalizados para espacios residenciales y comerciales.',
      ...images.nosotros.sillas,
    },
    {
      id: 'mesas',
      title: 'Mesas',
      description:
        'Mesas a medida que integran materiales nobles con líneas contemporáneas.',
      ...images.nosotros.mesas,
    },
    {
      id: 'libreros',
      title: 'Libreros',
      description:
        'Sistemas de almacenamiento que combinan funcionalidad y presencia arquitectónica.',
      ...images.nosotros.libreros,
    },
    {
      id: 'cocinas',
      title: 'Cocinas',
      description:
        'Cocinas integrales diseñadas para optimizar flujo, almacenamiento y estética.',
      ...images.nosotros.cocinas,
    },
    {
      id: 'sillones',
      title: 'Sillones',
      description:
        'Piezas de descanso con tapicería de calidad y proporciones cuidadosamente estudiadas.',
      ...images.nosotros.sillones,
    },
    {
      id: 'exteriores',
      title: 'Exteriores',
      description:
        'Mobiliario y estructuras para terrazas, jardines y áreas de convivencia al aire libre.',
      ...images.nosotros.exteriores,
    },
  ],
  cta: {
    title: 'Convierte tu espacio en algo especial',
    subtitle: 'Consigue hoy el hogar que tú y tu familia necesitan',
    button: { label: 'Comienza ahora', href: '/contacto' },
  },
}
