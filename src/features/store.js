import { configureStore } from '@reduxjs/toolkit';
import productSlice from './products/productSlice';

export default configureStore({
  reducer: {
      products : productSlice
  },
});