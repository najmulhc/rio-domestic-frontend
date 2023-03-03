import { useSelector } from 'react-redux';
import './NavProducts.css';

const NavProducts = () => {
  const { products } = useSelector((state) => state.products);
 
  const updateProduct = (product) => {
    console.log({
      action: 'update',
      product: { ...product },
    });
  };
  const deleteProduct = (product) => {
    console.log({
      action: 'delete',
      product: { ...product },
    });
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
                      deleteProduct(product);
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
