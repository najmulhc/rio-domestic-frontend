import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { selectUser } from '../../features/user/UserSlice';

const UserProtector = ({ children }) => {
  const user = useSelector(selectUser);
  console.log(children);
  console.log(user);
  const navigate = useNavigate();
  if (user.email === '') {
    navigate('/register');
  } else {
    return children;
  }
};

export default UserProtector;
