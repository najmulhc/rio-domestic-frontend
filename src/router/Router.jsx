import { createBrowserRouter } from 'react-router-dom';
import Container from '../components/container/Container';
import Cart from '../pages/Cart';
import CheckOut from '../pages/CheckOut';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Product from '../pages/Product';
import Register from '../pages/Register';

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
    ],
  },
]);

export default router;
