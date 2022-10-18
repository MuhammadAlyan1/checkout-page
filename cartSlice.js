import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  total: 0,
  items: 0,
  shippingCost: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setTotal: (state, payload) => {
      state.total = payload.payload;
    },

    increaseTotal: (state, payload) => {
      state.total += payload.payload;
    },

    decreaseTotal: (state, payload) => {
      state.total -= payload.payload;
    },
  },
});

export const { increaseTotal, decreaseTotal, setTotal } = cartSlice.actions;

export default cartSlice.reducer;
