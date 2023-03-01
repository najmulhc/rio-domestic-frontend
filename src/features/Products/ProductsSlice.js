import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  products: [],
  isError: false,
  error: '',
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {},
});

export const {} = productsSlice.actions;
export default productsSlice.reducer;
