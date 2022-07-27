import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
  totalProducts: 0,
  /* loading: false,
  error: null, */
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToBasket(state, { payload }) {
      let existedProduct = state.cartProducts.find((cartProduct) => cartProduct.id === payload.product.id)
      if (existedProduct) {
        state.cartProducts = state.cartProducts.map((cartProduct) =>
          cartProduct.id === payload.product.id
            ? {
              ...cartProduct,
              count: cartProduct.count + payload.count,
              price:cartProduct.price + payload.product.price * payload.count
            }
            : cartProduct
        );
      } else {
        state.cartProducts = [...state.cartProducts, {
          ...payload.product,
          count: payload.count,
          price:payload.product.price * payload.count
        }];
      }
      state.totalProducts = state.totalProducts + payload.count;
    },
  }
});
export const { addProductToBasket, totalProductsToBasket } = cartSlice.actions;
export default cartSlice.reducer;
