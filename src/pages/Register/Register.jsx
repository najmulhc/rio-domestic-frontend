import Auth from '../../components/auth/Auth';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { register } from '../../features/user/UserSlice';
const Register = () => {
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerFunc = (data) => {
    if (data.password !== data.confirmPassword) {
      setError('Passwords did not match!');
    } else {
      dispatch(register({ ...data, role: '' }));
      navigate('/select-role');
    }
  };

  return (
    <main>
      <Auth isLogin={false} runFunction={registerFunc} registerError={error} />
    </main>
  );
};

export default Register;
