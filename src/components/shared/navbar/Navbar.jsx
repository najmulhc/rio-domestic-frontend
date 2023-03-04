import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <div className='logo-container '>
       <Link to='/ '> <h1 id='logo'>Rio Domestic</h1></Link>
      </div>
      <nav>
        <ul className='nav-link-container'>
          
          <li className='nav-button'>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/register'>Register</Link>
          </li>
          <li>
            <Link to='/cart'>Cart</Link>
          </li>
           
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
