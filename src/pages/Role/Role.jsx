import { RiAdminLine, RiUser3Line } from 'react-icons/ri';
import './Role.css';

const Role = () => {
   const setUser = (type) => {
    console.log({
        user: {
            role: type
        }
    });
   }
   
  
  return (
    <main className='main-container role-main'>
      <h1 className='title'>Select Your role</h1>
      <div className='role-card-container'>
        <div className='role-card' onClick={() => {
            setUser("customer")
        }}>
          <h1 className='role-icon'>
            <RiUser3Line />
          </h1>
          <h2>Customer</h2>
        </div>
        <div className='role-card' onClick={() => {
            setUser("admin")
        }}>
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
