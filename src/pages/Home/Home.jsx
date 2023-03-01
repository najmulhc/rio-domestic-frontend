import Hero from '../../components/Hero/Hero';
import ProductCard from '../../components/productCard/ProductCard';

import './Home.css';
const Home = () => {
  const product = {
    name: 'Iphone 14',
    brand: 'apple',
    ram: 6,
    screen: {
      size: 6.7,
      type: 'Retina',
    },
    processor: 'apple a15 bionic',
  };
  return (
    <div className='main-container'>
      <Hero />
      <div className='product-display'>
        <h2 className="product-display-title">Our top picks</h2>
        <div className='products-container'>
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
        </div>
      </div>
    </div>
  );
};

export default Home;
