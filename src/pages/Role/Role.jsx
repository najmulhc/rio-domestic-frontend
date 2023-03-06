import { RiAdminLine, RiUser3Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { selectUser, setRule } from '../../features/user/UserSlice';
import './Role.css';

const Role = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const setUser = (type) => {
    dispatch(
      setRule({
        email: user.email,
        role: type,
      }),
    );
    navigate('/');
  };

  return (
    <main className='main-container role-main'>
      <h1 className='title'>Select Your role</h1>
      <div className='role-card-container'>
        <div
          className='role-card'
          onClick={() => {
            setUser('customer');
          }}
        >
          <h1 className='role-icon'>
            <RiUser3Line />
          </h1>
          <h2>Customer</h2>
        </div>
        <div
          className='role-card'
          onClick={() => {
            setUser('admin');
          }}
        >
          <h1 className='role-icon'>
            <RiAdminLine />
          </h1>
          <h2>Admin</h2>
        </div>
      </div>
    </main>
  );
};

export default Role;
