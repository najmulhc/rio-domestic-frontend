import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  orders: [],
};

export const getOrders = createAsyncThunk('orders/get', async () => {
  const { data } = await axios.get('https://rio-domestic-backend.vercel.app/order');
  return data.data;
});

export const updateOrderStatus = createAsyncThunk('orders/updateStatus', async ({ id, stat }) => {
  console.log(stat);
  const { data } = await axios.patch(`https://rio-domestic-backend.vercel.app/order/${id}`, {
    stat: stat,
  });
  console.log(data.data);
});

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getOrders.fulfilled, (state, action) => {
      const { orders } = action.payload;
      state.orders = orders;
    });
  },
  reducers: {},
});

export const selectOrder = (state) => state.orders;
export const {} = ordersSlice.actions;
export default ordersSlice.reducer;
