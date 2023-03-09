import { useForm } from 'react-hook-form';
import './Auth.css';
const Auth = ({ isLogin, runFunction, error }) => {
    const {register, handleSubmit} = useForm();
    const onSubmit = data => {
       runFunction(data);
    }
  return (
    <main className='main-container'>
      <div className='auth-card'>
        <h2>{isLogin ? 'Login' : 'Register'}</h2>

        <form  action='' onSubmit={handleSubmit(onSubmit)}>
         {!isLogin &&  <label className="input-label" htmlFor='name'>
            <h3 className='input-heading'>Your Name</h3>
            <input
              className='auth-input'
              type='text'
              placeholder='Your Name goes where'
              id='name'
              {...register("name")}
            />
          </label>}
          <label className="input-label" htmlFor='email'>
            <h3 className='input-heading'>Email address</h3>
            <input
              className='auth-input'
              type='email'
              placeholder='Enter email address'
              id='name'
              {...register("email")}
            />
          </label>
          <label className="input-label" htmlFor='name'>
            <h3 className='input-heading'>Password</h3>
            <input
              className='auth-input'
              type='password'
              placeholder='Enter Password'
              id='name'
              {...register("password")}
            />
          </label>
          <p className="password-error">{error}</p>
         {!isLogin &&  <label className="input-label" htmlFor='name'>
            <h3 className='input-heading'>Confirm Password</h3>
            <input
              className='auth-input'
              type='password'
              placeholder='Enter Confirm Password'
              id='name'
              {...register("confirmPassword")}
            />
            <p className="password-error">{error}</p>
          </label>}
          <button type="submit" className="form-button">{isLogin ? "Login": "Register"}</button>
        </form>
      </div>
    </main>
  );
};

export default Auth;
