import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Hero from '../../components/Hero/Hero';
import ProductCard from '../../components/productCard/ProductCard';
import { fetchAllProduct } from '../../features/Products/ProductsSlice';
import './Home.css';

const Home = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect( () => {
    dispatch(fetchAllProduct())
  }, [])
  return (
    <div className='main-container'>
      <Hero />
      <div className='product-display'>
        <h2 className='product-display-title'>Our top picks</h2>
        <div className='products-container'>
          {products.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
