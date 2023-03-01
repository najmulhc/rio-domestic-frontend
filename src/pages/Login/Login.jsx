import Auth from '../../components/auth/Auth';

const Login = () => {
  const login = (data) => console.log(data);
  return (
    <div>
      <Auth isLogin={true} runFunction={login} />
    </div>
  );
};

export default Login;
