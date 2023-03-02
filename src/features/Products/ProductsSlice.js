import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  products: [
    {
      id: '1a2b3c4d5',
      name: 'iPhone 14',
      brand: 'Apple',
      ram: 6,
      screen: {
        size: 6.7,
        type: 'Retina',
      },
      processor: 'A15 Bionic',
      stock: 5,
    },
    {
      id: '6d5c4b3a2',
      name: 'Galaxy S22',
      brand: 'Samsung',
      ram: 8,
      screen: {
        size: 6.8,
        type: 'Dynamic AMOLED',
      },
      processor: 'Exynos 2200',
      stock: 8,
    },
    {
      id: '2b3c4d5e6',
      name: 'Mi 12',
      brand: 'Xiaomi',
      ram: 12,
      screen: {
        size: 6.81,
        type: 'AMOLED',
      },
      processor: 'Snapdragon 8 Gen 1',
      stock: 2,
    },
    {
      id: '9a8b7c6d5',
      name: 'iPhone 13',
      brand: 'Apple',
      ram: 6,
      screen: {
        size: 6.1,
        type: 'Retina',
      },
      processor: 'A15 Bionic',
      stock: 10,
    },
    {
      id: '3c4d5e6f7',
      name: 'Galaxy Z Flip 3',
      brand: 'Samsung',
      ram: 8,
      screen: {
        size: 6.7,
        type: 'Dynamic AMOLED',
      },
      processor: 'Snapdragon 888',
      stock: 3,
    },
    {
      id: '5e6f7a8b9',
      name: 'Redmi Note 11 Pro',
      brand: 'Xiaomi',
      ram: 8,
      screen: {
        size: 6.67,
        type: 'IPS LCD',
      },
      processor: 'MediaTek Helio G95',
      stock: 7,
    },
    {
      id: '7f8e9d0c1',
      name: 'iPhone SE',
      brand: 'Apple',
      ram: 3,
      screen: {
        size: 4.7,
        type: 'Retina',
      },
      processor: 'A13 Bionic',
      stock: 0,
    },
  ],
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
