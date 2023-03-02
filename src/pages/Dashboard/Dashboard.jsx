import { Outlet } from 'react-router-dom';
import DashboardNav from '../../components/dashboard/Nav/DashboardNav';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className='dashboard-container main-container'>
      <DashboardNav />
      <Outlet />
    </div>
  );
};

export default Dashboard;
