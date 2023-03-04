import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const isInCart = state.find((item) => item.id === product.id);
      if (isInCart) {
        state.find((item) => item.id === product.id).quantity += 1;
      } else {
        state.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const product = action.payload;
      const itemInState = state.find((item) => item.id === product.id)
      if(itemInState.quantity === 1) {
        state.splice(state.indexOf(itemInState), 1);
      } else {
        itemInState.quantity -= 1;
      }
     
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
