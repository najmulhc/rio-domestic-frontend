import './ProductCard.css'
const ProductCard = ({product}) => {
  
  const { name, brand, ram, screen, processor } = product;
  const handleAddToCart = e => {
    e.preventDefault();
    console.log(product)
  }
  return (
    <div className='product-container'>
      <div className='top-container'>
        <h2 className='item-name'>{name}</h2>
        <span className='brand-badge'>{brand}</span>
      </div>
      <div className='spec-container'>
        <h3>Specifications</h3>
        <p className='spec'>RAM: {ram}GB</p>
        <p className='spec'>Screen: {screen.size} inch {screen.type}</p>
        <p className='spec'>Processor: {processor}</p>
      </div>
      <button className='cart-button' type='submit' onClick={handleAddToCart}>
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
