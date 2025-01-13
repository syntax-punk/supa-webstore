import { createBrowserRouter } from 'react-router-dom';
import App from '../layout/App';
import HomePage from '@/features/home/HomePage';
import AboutPage from '@/features/about/AboutPage';
import ContactPage from '@/features/contact/ContactPage';
import ProductsPage from '@/features/products/ProductsPage';
import ProductDetails from '@/features/products/ProductDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <HomePage /> },
      { path: '/products', element: <ProductsPage /> },
      { path: '/product/:id', element: <ProductDetails /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/contact', element: <ContactPage /> },
    ],
  },
]);
