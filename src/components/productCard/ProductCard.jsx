import './ProductCard.css'
import { BsFillCartPlusFill, BsFillCartDashFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../features/cart/CartSlice';
const ProductCard = ({ product, cart }) => {
  const { name, brand, ram, screen, processor, price } = product;
  const dispatch = useDispatch();
  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart(product));
  };
  const handleRemoveFromCart = (e) => {
    e.preventDefault();
    dispatch(removeFromCart(product));
  };
  return (
    <div className='product-container product-card-testing'>
      <div className='top-container'>
        <div className='name-price-container'>
          <h2 className='item-name'>{name}</h2>
          {cart ? (
            <span className='badge'>{product.quantity}</span>
          ) : (
            <h2 className='price'>${price}</h2>
          )}
        </div>
        <span
          className={`brand-badge ${brand == 'apple' && 'apple'} ${
            brand == 'samsung' && 'samsung'
          }  ${brand == 'xiaomi' && 'xiaomi'}`}
        >
          {brand}
        </span>
      </div>
      <div className='spec-container'>
        <h3>Specifications</h3>
        <p className='spec'>RAM: {ram}GB</p>
        <p className='spec'>
          Screen: {screen.size} inch {screen.type}
        </p>
        <p className='spec'>Processor: {processor}</p>
      </div>
      <button
        className='cart-button'
        type='submit'
        onClick={cart ? handleRemoveFromCart : handleAddToCart}
      >
        {cart ? <BsFillCartDashFill /> : <BsFillCartPlusFill />}{' '}
        {cart ? 'Remove from Cart' : 'Add To Cart'}
      </button>
    </div>
  );
};

export default ProductCard;
