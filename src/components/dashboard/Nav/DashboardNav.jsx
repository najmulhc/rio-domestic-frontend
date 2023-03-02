import { Link } from "react-router-dom";

const DashboardNav = () => {
  return <div className="product-container">
    <h2 className="dashboard-title">Dashboard</h2>
    <div className="dashboard-nav">
      <Link to='/dashboard' >Products</Link>
      <Link to='/dashboard/add-product' >Add Product</Link>
      <Link to='/dashboard/orders' >Orders</Link>
    </div>
  </div>;
};

export default DashboardNav;
