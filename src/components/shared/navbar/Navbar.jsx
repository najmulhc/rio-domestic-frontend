import './Navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/user/UserSlice';

const Navbar = () => {
  const user = useSelector(selectUser);
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
              <li>
                <Link to='/register'>Register</Link>
              </li>
            </>
          ) : (
            <>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
