import { useDispatch, useSelector } from 'react-redux';
import UserProtector from '../../components/Protectors/UserProtector';
import './Cart.css';
import ProductCard from '../../components/productCard/ProductCard';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { resetCart, selectCart } from '../../features/cart/CartSlice';
import { useNavigate } from 'react-router';
import { selectUser } from '../../features/user/UserSlice';

const Cart = () => {
  const { cart } = useSelector(selectCart);
  const {email} = useSelector(selectUser)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const totalItmesCreator = (arr) => {
    let total = 0;
    for (let item of arr) {
      total += item.quantity;
    }
    return total;
  };
  const totalCostCreator = (arr) => {
    let cost = 0;
    for (let item of arr) {
      cost += item.price * item.quantity;
    }
    return cost;
  };
  const order = {
    user: email,
    products: [...cart],
    totalItems: totalItmesCreator(cart),
    totalCost: totalCostCreator(cart),
  };
  const handleCheckOut = async () => {
    const { data } = await axios.post('http://localhost:5000/order', order);
    if (data.status === 'success') {
      toast.success('Order placed successfully!');
      dispatch(resetCart());
      navigate('/');
    }
  };
  return (
    <UserProtector>
      {' '}
      <div className='main-container'>
        <h2 className='page-title'>Cart</h2>
        {cart[0] ? (
          <>
            {' '}
            <div className='products-container'>
              {cart.map((product) => (
                <ProductCard product={product} key={product.id} cart />
              ))}
            </div>
            <div className='payment-info'>
              <h3>Total to be paid: ${order.totalCost}</h3>
            </div>
            <div className='btn-container'>
              <button
                className='cart-button check-out'
                onClick={(e) => {
                  e.preventDefault();
                  handleCheckOut();
                }}
              >
                CheckOut
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className='empty-cart'>Cart is empty, please add something</h2>
          </>
        )}
      </div>
    </UserProtector>
  );
};

export default Cart;
