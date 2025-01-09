import { createBrowserRouter } from 'react-router-dom'
import App from '../layout/App'
import HomePage from '@/features/home/HomePage'
import TopPicks from '@/features/products/TopPicks'
import AboutPage from '@/features/about/AboutPage'
import ContactPage from '@/features/contact/ContactPage'
import ProductsPage from '@/features/products/ProductsPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {path: '', element: <HomePage />},
      {path: '/products', element: <ProductsPage />},
      {path: '/product/:id', element: <TopPicks />},
      {path: '/about', element: <AboutPage />},
      {path: '/contact', element: <ContactPage />},
    ]
  }
])