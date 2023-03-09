import { configureStore } from '@reduxjs/toolkit';
import CartSlice from '../features/cart/CartSlice';
import orderSlice from '../features/orders/orderSlice';
import ProductsSlice from '../features/Products/ProductsSlice';
import UserSlice from '../features/user/UserSlice';
const store = configureStore({
  reducer: {
    cart: CartSlice,
    user: UserSlice,
    products: ProductsSlice,
    orders: orderSlice
  },
});

export default store;
