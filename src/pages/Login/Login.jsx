import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Auth from '../../components/auth/Auth';
import { login, selectUser } from '../../features/user/UserSlice';

const Login = () => {
  const dispatch = useDispatch();
  const handleLogin = (data) => dispatch(login(data));
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  if (user.email) {
    navigate('/');
  }
  return (
    <div>
      <Auth isLogin={true} runFunction={handleLogin} error={user.error} />
    </div>
  );
};

export default Login;
