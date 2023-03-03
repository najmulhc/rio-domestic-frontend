import { useForm } from 'react-hook-form';
import './AddProduct.css';

const generateId = () => {
  let hexCode = '';
  const hexValues = 'abcdef0123456789';
  for (let i = 0; i < 6; i++) {
    hexCode += hexValues[Math.floor(Math.random() * 16)];
  }
  return hexCode;
};

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const { name, brand, ram, stock, screenType, screenSize, processor } = data;
    const product = {
      id: generateId(),
      name,
      brand,
      ram,
      screen: {
        type: screenType,
        size: screenSize,
      },
      stock,
      processor,
    };
    console.log(product);
  };
  return (
    <div className='form-container'>
      <h2 className='page-title'>Add Product</h2>
      <div className='product-container form-card'>
        <h3 className='card-title'></h3>
        <form action='' onSubmit={handleSubmit(onSubmit)} className='product-form'>
          <label htmlFor=''>
            <h3 className='input-heading'>Product Name</h3>
            <input
              className='auth-input'
              type='text'
              name=''
              id=''
              {...register('name')}
              required
            />
          </label>
          <label htmlFor=''>
            <h3 className='input-heading'> Brand</h3>
            <select className='auth-input' name='' id='' {...register('brand')} required>
              <option value=''>Please select a brand</option>
              <option value='apple'>Apple</option>
              <option value='xiaomi'>Xiomi</option>
              <option value='samsung'>Samsung</option>
            </select>
          </label>
          <label htmlFor=''>
            <h3 className='input-heading'>RAM</h3>
            <input
              className='auth-input'
              type='number'
              name=''
              id=''
              {...register('ram')}
              required
            />
          </label>
          <label htmlFor=''>
            <h3 className='input-heading'> Screen Type</h3>
            <select name='' className='auth-input' id='' {...register('screenType')} required>
              <option value=''>Please select a Screen Type</option>
              <option value='Super Amelod'>Super Amoled</option>
              <option value='IPS'>IPS LCD</option>
              <option value='Retina'>Retina</option>
            </select>
          </label>
          <label htmlFor=''>
            <h3 className='input-heading'>Screen Size</h3>
            <input
              className='auth-input'
              type='number'
              step='0.1'
              name=''
              id=''
              {...register('screenSize')}
              required
            />
          </label>
          <label htmlFor=''>
            <h3 className='input-heading'>Processor</h3>
            <input
              className='auth-input'
              type='text'
              name=''
              id=''
              {...register('processor')}
              required
            />
          </label>
          <label htmlFor=''>
            <h3 className='input-heading'>Quantity</h3>
            <input
              className='auth-input'
              type='number'
              name=''
              {...register('stock')}
              id=''
              required
            />
          </label>
          <button className='form-button' type='submit'>
            Add this product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
