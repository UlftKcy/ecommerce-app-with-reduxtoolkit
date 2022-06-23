import { createSlice, createAction } from "@reduxjs/toolkit";

const initialState = {
  products_in_cart: [],
  count_products_in_cart: 0,
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
        products_in_cart: [...state.products_in_cart, action.payload],
        count_products_in_cart: state.count_products_in_cart + 1
    };
    },
  },
});

export default cartSlice.reducer;
