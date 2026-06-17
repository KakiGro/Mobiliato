import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { SiteLayout } from '@/components/layout/SiteLayout'
import { HomePage } from '@/pages/HomePage'
import { NosotrosPage } from '@/pages/NosotrosPage'
import { ContactoPage } from '@/pages/ContactoPage'

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
          { path: 'contacto', element: <ContactoPage /> },
        ],
      },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
