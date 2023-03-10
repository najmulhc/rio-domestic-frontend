import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  email: '',
  role: '',
  error: '',
};

export const login = createAsyncThunk('user/login', async ({ email, password }) => {
  const response = await axios.post('https://rio-domestic-backend.vercel.app/user/login', {
    email,
    password,
  });
  console.log(response);
  return response;
});

export const setRule = createAsyncThunk('user/set-rule', ({ email, role }) => {
  return axios.patch('https://rio-domestic-backend.vercel.app/user', { email, role });
});

export const register = createAsyncThunk('user/register', (user) => {
  try {
    const response = axios.post('https://rio-domestic-backend.vercel.app/user', user);
    return response;
  } catch (error) {
    return error;
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
    },
    logOut: (state, aciton) => {
      state.email = '';
      state.role = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        const user = action.payload.data.user;
        state.email = user.email;
        state.role = user.role;
      })
      .addCase(register.rejected, (state, action) => {
        state.data = action.payload;
      })
      .addCase(setRule.fulfilled, (state, action) => {
        const user = action.payload.data.user;
        state.email = user.email;
        state.role = user.role;
      })
      .addCase(login.fulfilled, (state, action) => {
        const response = action.payload;
        if (response.data.message) {
          state.error = response.data.message;
        } else {
          const user = action.payload.data.user;
          state.email = user.email;
          state.role = user.role;
        }
      })
      .addCase(login.rejected, (state, action) => {
        state.response = action.error;
      });
  },
});

export const selectUser = (state) => state.user;

export const { setUser, logOut } = userSlice.actions;
export default userSlice.reducer;
