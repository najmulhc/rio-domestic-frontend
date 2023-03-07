import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { selectUser } from '../../features/user/UserSlice';

const RoleProtector = ({ children, role }) => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  if ((user.role === role)) {
    return children;
  } else {
    navigate('/');
  }
};

export default RoleProtector;
