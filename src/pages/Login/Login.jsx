import { useDispatch } from 'react-redux';
import Auth from '../../components/auth/Auth';
import { login } from '../../features/user/UserSlice';

const Login = () => {
  const dispatch = useDispatch()
  const handleLogin = (data) =>  dispatch(login(data));
  return (
    <div>
      <Auth isLogin={true} runFunction={handleLogin} />
    </div>
  );
};

export default Login;
