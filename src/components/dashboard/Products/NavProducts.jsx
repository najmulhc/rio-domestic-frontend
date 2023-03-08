import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, selectProducts } from '../../../features/Products/ProductsSlice';
import './NavProducts.css';

const NavProducts = () => {
  const { products } = useSelector(selectProducts);
  const dispatch = useDispatch()
  const updateProduct = (product) => {
    console.log({
      action: 'update',
      product: { ...product },
    });
  };

  const handleProductDelete = (product) => {
     dispatch(deleteProduct(product))
  };

  return (
    <div>
      <h2 className='heading'>Products</h2>
      <table className='product-container nav-table-container'>
        <thead>
          <td>Id</td>
          <td>Name</td>
          <td>Stock</td>
          <td>Actions</td>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr>
              <td className='product-prop'>{product.id}</td>
              <td className='product-prop'>{product.name}</td>
              <td className='product-prop'>
                <div className='btn-container'>
                  <p className={`stock ${product.stock ? 'stock-in' : 'stock-out'}`}>
                    {product.stock ? 'In Stock' : 'Out of Stock'}
                  </p>
                </div>
              </td>
              <td className='product-prop'>
                <div className='btn-container'>
                  <button
                    className='stock update'
                    onClick={(e) => {
                      e.preventDefault();
                      updateProduct(product);
                    }}
                  >
                    Update
                  </button>
                  <button
                    className='stock stock-out'
                    onClick={(e) => {
                      e.preventDefault();
                      handleProductDelete(product);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NavProducts;
