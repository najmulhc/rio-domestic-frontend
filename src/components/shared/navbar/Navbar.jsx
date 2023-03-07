import './Navbar.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectUser } from '../../../features/user/UserSlice';

const Navbar = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(logOut());
  };
  return (
    <header>
      <div className='logo-container '>
        <Link to='/ '>
          {' '}
          <h1 id='logo'>Rio Domestic</h1>
        </Link>
      </div>
      <nav>
        <ul className='nav-link-container'>
          {!user.email ? (
            <>
              <li className='nav-button'>
                <Link to='/login'>Login</Link>
              </li>
              <li className='nav-button'>
                <Link to='/register'>Register</Link>
              </li>
            </>
          ) : (
            <>
              {user.role === 'customer' && (
                <li>
                  <Link to='/cart'>Cart</Link>
                </li>
              )}
              {user.role === 'admin' && (
                <li>
                  <Link to='/dashboard'>Dashboard</Link>
                </li>
              )}
              <li onClick={handleLogOut}>
                <button className='nav-button'>Log Out</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
