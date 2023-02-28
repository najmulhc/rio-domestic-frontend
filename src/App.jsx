import { RouterProvider } from 'react-router';
import './App.css';
import router from './router/Router';

const App = () => {
  return <div>
     <RouterProvider router={router} />
  </div>;
};

export default App;
