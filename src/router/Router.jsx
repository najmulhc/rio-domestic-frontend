import { createBrowserRouter } from 'react-router-dom';
import Container from '../components/container/Container';
import CheckOut from '../pages/CheckOut/CheckOut';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Product from '../pages/Product/Product';
import Register from '../pages/Register/Register';
import Role from '../pages/Role/Role';
import Products from '../components/dashboard/Products/NavProducts';
import AddProduct from '../components/dashboard/AddProducts/AddProduct';
import Orders from '../components/dashboard/Orders/Orders';
import RoleProtector from '../components/Protectors/RoleProtector';
import Cart from '../pages/Cart/Cart';
import Dashboard from '../pages/Dashboard/Dashboard';

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
        element: (
          <RoleProtector role='customer'>
            <Cart />
          </RoleProtector>
        ),
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
        element: (
          <RoleProtector role='admin'>
            <Dashboard />
          </RoleProtector>
        ),
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
            element: <Orders />,
          },
        ],
      },
    ],
  },
]);

export default router;
