import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const isInCart = state.cart.find((item) => item.id === product.id);
      if (isInCart) {
        state.cart.find((item) => item.id === product.id).quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const product = action.payload;
      const itemInState = state.cart.find((item) => item.id === product.id);
      if (itemInState.quantity === 1) {
        state.cart.splice(state.indexOf(itemInState), 1);
      } else {
        itemInState.quantity -= 1;
      }
    },
    resetCart: (state, action) => {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;

export const selectCart = (state) => state.cart;

export default cartSlice.reducer;
