import ProductCard from '../components/productCard/ProductCard';

const Home = () => { 
  const product = {
    name: 'Iphone 14',
    brand: 'apple',
    ram: 6,
    screen:  {
      size: 6.7, 
      type: "Retina"
    },
    processor: 'apple a15 bionic',
  };
  return (
    <div className='main-container'>
      <ProductCard product={product} /> 
    </div>
  );
};

export default Home;
