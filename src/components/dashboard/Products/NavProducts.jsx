import { useSelector } from 'react-redux';
import './NavProducts.css';

const NavProducts = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <div>
      <h2 className='heading'>Products</h2>
      <table className='product-container nav-table-container'>
        <thead>
          <td>Id</td>
          <td>Name</td>
          <td>Brand</td>
          <td>Stock</td>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr>
              <td className='product-prop'>{product.id}</td>
              <td className='product-prop'>{product.name}</td>
              <td className='product-prop'>{product.brand}</td>
              <td className='product-prop'>{product.stock ? 'In Stock' : 'Out of Stock'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NavProducts;
