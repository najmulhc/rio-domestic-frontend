import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { selectUser } from '../../features/user/UserSlice';

const UserProtector = ({ children }) => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user.email) {
      navigate('/login');
    }
  }, [user]);
  if (user.email) {
    return children;
  }
};

export default UserProtector;
