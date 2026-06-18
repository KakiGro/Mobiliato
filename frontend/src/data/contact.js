import { Mail, MapPin, Phone } from 'lucide-react'
import { images } from '@/lib/images'

export const contactContent = {
  intro: {
    eyebrow: 'Contacto',
    title: 'Conversemos sobre',
    titleAccent: 'tu próximo proyecto.',
    subtitle:
      '¡Gracias por visitarnos! Si necesitas ayuda o tienes alguna pregunta, no dudes en ponerte en contacto con nosotros.',
    image: images.pages.contacto,
    imageAlt: 'Espacio de trabajo y diseño Mobiliato',
  },
  form: {
    subject: 'Nuevo contacto Mobiliato',
    fields: {
      name: { label: 'Nombre', placeholder: 'Ingresa tu nombre' },
      email: { label: 'Correo electrónico', placeholder: 'Ingresa tu correo electrónico' },
      message: {
        label: 'Mensaje',
        placeholder: '¡Hola!, me interesa contratar sus servicios...',
      },
    },
    submit: 'Enviar',
    submitting: 'Espera un momento...',
    success: '¡Gracias! Hemos recibido su información.',
    error: 'Ha ocurrido un error al enviar la información.',
  },
  details: [
    {
      icon: MapPin,
      title: 'Extensión',
      description: 'Contamos con distribución a todo México y extranjería.',
    },
    {
      icon: Mail,
      title: 'Contacto',
      email: 'gabriel@mobiliato.com',
      phone: '+52 (55) 5520 4076',
    },
  ],
  features: [
    {
      icon: Phone,
      title: 'Atención personalizada',
      description: 'Respuesta directa de nuestro equipo de diseño.',
    },
    {
      icon: MapPin,
      title: 'Cobertura nacional',
      description: 'Proyectos en todo el territorio mexicano.',
    },
  ],
}
