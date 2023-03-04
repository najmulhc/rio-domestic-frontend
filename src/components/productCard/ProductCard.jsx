import './ProductCard.css'
const ProductCard = ({ product, cart }) => {
  const { name, brand, ram, screen, processor, price } = product;
  const handleAddToCart = (e) => {
    e.preventDefault();
    console.log({
      action: 'add-to-cart',
      product,
    });
  };
  const handleRemoveFromCart = (e) => {
    e.preventDefault();
    console.log({
      action: 'remove-from-cart',
      product,
    });
  };
  return (
    <div className='product-container'>
      <div className='top-container'>
        <div className='name-price-container'>
          <h2 className='item-name'>{name}</h2>
          {cart ? (
            <span className='badge'>{product.quantity}</span>
          ) : (
            <h2 className='price'>${price}</h2>
          )}
        </div>
        <span className='brand-badge'>{brand}</span>
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
        {cart ? 'Remove from Cart' : 'Add To Cart'}
      </button>
    </div>
  );
};

export default ProductCard;
