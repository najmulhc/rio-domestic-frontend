import { useSelector } from 'react-redux';
import ProductCard from '../../components/productCard/ProductCard';
import './Cart.css';
const Cart = () => {
  const cart = useSelector((state) => state.cart);
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
    user: 'najmulhc@gamil.com',
    products: [...cart],
    totalItems: totalItmesCreator(cart),
    totalCost: totalCostCreator(cart),
  };
  const handleCheckOut = () => {
    console.log(order);
  };
  return (
    <div className='main-container'>
      <h2 className='page-title'>Cart</h2>
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
    </div>
  );
};

export default Cart;
