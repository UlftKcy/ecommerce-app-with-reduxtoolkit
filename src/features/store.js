import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './products/cartSlice';
import productSlice from './products/productSlice';

export default configureStore({
  reducer: {
      products : productSlice,
      cart:cartSlice,
  },
});