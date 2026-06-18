import { HomePage } from '@/pages/HomePage'
import { NosotrosPage } from '@/pages/NosotrosPage'
import { ContactoPage } from '@/pages/ContactoPage'
import { ProyectosPage } from '@/pages/ProyectosPage'
import { HogaresPage } from '@/pages/HogaresPage'
import { ComercialPage } from '@/pages/ComercialPage'

export const siteChildRoutes = [
  { index: true, element: <HomePage /> },
  { path: 'nosotros', element: <NosotrosPage /> },
  { path: 'proyectos', element: <ProyectosPage /> },
  { path: 'proyectos/hogares', element: <HogaresPage /> },
  { path: 'proyectos/comercial', element: <ComercialPage /> },
  { path: 'contacto', element: <ContactoPage /> },
]
