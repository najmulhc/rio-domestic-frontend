import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders, selectOrder, updateOrderStatus } from '../../../features/orders/orderSlice';
import './Orders.css';

const Orders = () => {
  const { products } = useSelector((state) => state.products);
  const { orders } = useSelector(selectOrder);
  const dispatch = useDispatch();

  return (
    <div className=''>
      <h2 className='heading'>Orders</h2>
      <table className='product-container nav-table-container'>
        <thead>
          <th>Customer</th>
          <th>Total Products</th>
          <th>Total Cost</th>
          <th>Status</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr>
              <td className='product-prop'>{order.user}</td>
              <td className='product-prop'>{order.totalItems}</td>
              <td className='product-prop'>${order.totalCost}</td>
              <td className='product-prop'>
                <span id='status' className={`${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </td>
              <td className='product-prop'>
                <div className='btn-container'>
                  <button
                    className='stock complete-order'
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(updateOrderStatus({ id: order._id, stat: 'Completed' }));
                      dispatch(getOrders());
                    }}
                    disabled={order.status !== 'Pending'}
                  >
                    Complete
                  </button>
                  <button
                    className='stock reject-order'
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(updateOrderStatus({ id: order._id, stat: 'Rejected' }));
                      dispatch(getOrders());
                    }}
                    disabled={order.status !== 'Pending'}
                  >
                    Reject
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
