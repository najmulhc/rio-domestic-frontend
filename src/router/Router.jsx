import { createBrowserRouter } from 'react-router-dom';
import Container from '../components/container/Container';
import Cart from '../pages/Cart/Cart';
import CheckOut from '../pages/CheckOut/CheckOut';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Product from '../pages/Product/Product';
import Register from '../pages/Register/Register';
import Role from '../pages/Role/Role';
import Dashboard from '../pages/Dashboard/Dashboard';
import Products from '../components/dashboard/Products/NavProducts';
import AddProduct from '../components/dashboard/AddProducts/AddProduct';
import Orders from '../components/dashboard/Orders/Orders';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Container />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/product/:id',
        element: <Product />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/check-out',
        element: <CheckOut />,
      },
      {
        path: '/select-role',
        element: <Role />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
          {
            path: '/dashboard/',
            element: <Products />,
          },
          {
            path: '/dashboard/add-product',
            element: <AddProduct />,
          },
          {
            path: '/dashboard/orders',
            elements: <Orders />,
          },
        ],
      },
    ],
  },
]);

export default router;
