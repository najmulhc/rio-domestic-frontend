import { createBrowserRouter } from 'react-router-dom';
import Container from '../components/container/Container';
import Cart from '../pages/Cart/Cart';
import CheckOut from '../pages/CheckOut/CheckOut';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Product from '../pages/Product/Product';
import Register from '../pages/Register/Register';
import Role from '../pages/Role/Role';

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
    ],
  },
]);

export default router;
