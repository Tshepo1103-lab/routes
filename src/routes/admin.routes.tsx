import { lazy } from 'react';
import { HomeOutlined, ShoppingOutlined } from '@ant-design/icons';

const Home = lazy(() => import('./../pages/home'));
const ProductsPage = lazy(() => import('./../pages/products'));

export const adminRoutes = [
  {
    path: 'home',
    element: <Home />,
    icon: <HomeOutlined />,
    name: 'Home'
  },
  {
    path: 'products',
    element: <ProductsPage />,
    icon: <ShoppingOutlined />,
    name: 'Products'
  }
]; 