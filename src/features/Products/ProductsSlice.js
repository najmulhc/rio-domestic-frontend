import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isLoading: false,
  products: [],
  isError: false,
  error: '',
};

export const fetchAllProduct = createAsyncThunk('products/get', async () => {
  const fetchedProduct = await axios.get('https://rio-domestic-backend.vercel.app/product');
  return fetchedProduct.data;
});

export const postProduct = createAsyncThunk('product/post', async (product) => {
  const postedProduct = await axios.post(
    'https://rio-domestic-backend.vercel.app/product',
    product,
  );
  return postedProduct.data;
});

export const deleteProduct = createAsyncThunk('product/delete', async (product) => {
  const deleted = await axios.delete(
    `https://rio-domestic-backend.vercel.app/product/${product._id}`,
  );
  return deleted.data;
});

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProduct.fulfilled, (state, action) => {
        state.products = action.payload.products;
      })
      .addCase(postProduct.fulfilled, (state, action) => {
        state.products.push(action.payload.product);
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        const { product } = action.payload;
        const found = state.products.find((item) => item._id === product._id);
        state.products.splice(state.products.indexOf(found), 1);
      });
  },
});

export const {} = productsSlice.actions;
export const selectProducts = (state) => state.products;
export default productsSlice.reducer;
