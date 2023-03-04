import { useSelector } from 'react-redux';
import './Orders.css';

const Orders = () => {
  const { products } = useSelector((state) => state.products);
  const order = {
    state: 'completed',
    id: 'df235c',
    customer: 'name@gmail.com',
    product: { ...products[3] },
    quantity: 3,
  };
  const completeOrder = (order) => {
    order.state = 'completed';
    console.log(order);
  };
  const rejectOrder = (order) => {
    order.state = 'rejected';
    console.log(order);
  };
  console.log(order);
  return (
    <div className='order-container'>
      <h2 className='page-title'>Orders</h2>
      <table>
        <thead>
          <th>Id</th>
          <th>Customer</th>
          <th>Product</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Action</th>
        </thead>
        <tbody>
          <tr>
            <td>{order.id}</td>
            <td>{order.customer}</td>
            <td>{order.product.name}</td>
            <td>${order.product.price}</td>
            <td>{order.product.stock}</td>
            <td className=''>
              <div className='btn-container'>
                <button
                  className='stock update'
                  onClick={(e) => {
                    e.preventDefault();
                    completeOrder(order);
                  }}
                 disabled={order.state === 'completed'}
                >
                  {order.state === 'completed'? "Completed" : "Complete"}
                </button>
                <button
                  className='stock stock-out'
                  onClick={(e) => {
                    e.preventDefault();
                    rejectOrder(order);
                  }}
                  disabled={order.state === 'rejected'}
                >
                   {order.state === 'rejected'? "Rejected" : "Reject"}
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
