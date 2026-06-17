import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { SiteLayout } from '@/components/layout/SiteLayout'
import { HomePage } from '@/pages/HomePage'
import { NosotrosPage } from '@/pages/NosotrosPage'
import { ContactoPage } from '@/pages/ContactoPage'
import { ProyectosPage } from '@/pages/ProyectosPage'
import { HogaresPage } from '@/pages/HogaresPage'
import { ComercialPage } from '@/pages/ComercialPage'

function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <SiteLayout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: 'nosotros', element: <NosotrosPage /> },
          { path: 'proyectos', element: <ProyectosPage /> },
          { path: 'proyectos/hogares', element: <HogaresPage /> },
          { path: 'proyectos/comercial', element: <ComercialPage /> },
          { path: 'contacto', element: <ContactoPage /> },
        ],
      },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
