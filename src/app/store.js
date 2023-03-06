import { configureStore } from '@reduxjs/toolkit';
import CartSlice from '../features/cart/CartSlice';
import ProductsSlice from '../features/Products/ProductsSlice';
import UserSlice from '../features/user/UserSlice';
const store = configureStore({
  reducer: {
    cart: CartSlice,
    user: UserSlice,
    products: ProductsSlice,
  },
});

export default store;
