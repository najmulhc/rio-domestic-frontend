import Auth from '../../components/auth/Auth';
import { useState } from 'react';
const Register = () => {
  const [error, setError] = useState('');
  const register = (data) => {
    if (data.password !== data.confirmPassword) {
      setError('Passwords did not match!');
    } else {
      console.log(data);
    }
  };
  return (
    <main>
      <Auth isLogin={false} runFunction={register} registerError={error} />
    </main>
  );
};

export default Register;
