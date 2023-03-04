import ProductCard from '../../components/productCard/ProductCard';
import './Cart.css';
const Cart = () => {
  const cart = [
    {
      id: '5e6f7a8b9',
      name: 'Redmi Note 11 Pro',
      brand: 'Xiaomi',
      ram: 8,
      screen: {
        size: 6.67,
        type: 'IPS LCD',
      },
      processor: 'MediaTek Helio G95',
      stock: 7,
      price: 549,
      quantity: 2,
    },
    {
      id: '7f8e9d0c1',
      name: 'iPhone SE',
      brand: 'Apple',
      ram: 3,
      screen: {
        size: 4.7,
        type: 'Retina',
      },
      processor: 'A13 Bionic',
      stock: 0,
      price: 399,
      quantity: 3,
    },
  ];
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
    products: [...cart],
    totalItems: totalItmesCreator(cart),
    totalCost: totalCostCreator(cart),
  };
  console.log(order);
  return (
    <div>
      <h2 className='page-title'>Cart</h2>
      <div className='products-container'>
        {cart.map((product) => (
          <ProductCard product={product} key={product.id}  cart/>
        ))}
      </div>
      <div className='payment-info'>
        <h3>Total to be paid: ${order.totalCost}</h3>
      </div>
      <div className='btn-container'>
        <button className='cart-button check-out'>CheckOut</button>
      </div>
    </div>
  );
};

export default Cart;
