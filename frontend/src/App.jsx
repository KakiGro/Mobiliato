import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { SiteLayout } from '@/components/layout/SiteLayout'
import { siteChildRoutes } from '@/routes/siteRoutes'

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
        children: siteChildRoutes,
      },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
