import { createSlice, createAction } from "@reduxjs/toolkit";

const initialState = {
  total_products_in_cart: [],
  total_count_products_in_cart: 0,
  
  product_in_cart:[],
  count_product_in_cart:0

  /* loading: false,
  error: null, */
};
const addProductToBasket = createAction("addProductToBasket");

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: {
    [addProductToBasket]: (state, action) => {
        return {
          total_products_in_cart: [...state.total_products_in_cart,action.payload],
          total_count_products_in_cart: state.total_count_products_in_cart + action.count
      };
    },
  },
});

export default cartSlice.reducer;
