import HomePage from '../pages/Home';
import CategoriesPage from '../pages/Categories';
import PartsPage from '../pages/Parts';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import OrderPage from '../pages/OrderPage';
import CartPage from '../pages/CartPage';
import OrderDetails from '../pages/OrderDetails';
import InvoiceDetails from '../pages/InvoiceDetails';

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/parts', element: <PartsPage /> },
  { path: '/categories', element: <CategoriesPage /> },
  { path: '/support', element: <HomePage /> },
  { path: '/about', element: <HomePage /> },
  { path: '/:id/product-details', element: <ProductDetailsPage /> },
  { path: '/order-management', element: <OrderPage /> },
  { path: '/cart', element: <CartPage /> },
  { path: '/:id/order-details', element: <OrderDetails /> },
  { path: '/:id/invoice-details', element: <InvoiceDetails /> },
];

export const router = createBrowserRouter(routes);
