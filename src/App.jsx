import { useSelector } from 'react-redux';
import { RouterProvider } from 'react-router';
import './App.css';
import router from './router/Router';

const App = () => {
  const state = useSelector(state => state)
  console.log(state);
  return <div>
     <RouterProvider router={router} />
  </div>;
};

export default App;
