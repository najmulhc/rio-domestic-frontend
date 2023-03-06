import UserProtector from '../../components/Protectors/UserProtector';
import './Dashboard.css';
import { Outlet } from 'react-router';
import DashboardNav from '../../components/dashboard/Nav/DashboardNav';
const Dashboard = () => {
  return (
    <UserProtector>
      <div className='dashboard-container main-container'>
        <DashboardNav />
        <Outlet />
      </div>
    </UserProtector>
  );
};

export default Dashboard;
