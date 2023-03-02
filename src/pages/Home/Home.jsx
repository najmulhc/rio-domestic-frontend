import { useSelector } from 'react-redux';
import Hero from '../../components/Hero/Hero';
import ProductCard from '../../components/productCard/ProductCard';

import './Home.css';
const Home = () => {
  const { products } = useSelector((state) => state.products);
  
  return (
    <div className='main-container'>
      <Hero />
      <div className='product-display'>
        <h2 className='product-display-title'>Our top picks</h2>
        <div className='products-container'>
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
