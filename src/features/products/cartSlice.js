import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
  totalProducts: 0,
  totalAmount: 0,
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
              price: cartProduct.price + payload.product.price * payload.count
            }
            : cartProduct
        );
      } else {
        state.cartProducts = [...state.cartProducts, {
          ...payload.product,
          count: payload.count,
          price: payload.product.price * payload.count
        }];
      }
      state.totalProducts = state.totalProducts + payload.count;
      state.totalAmount = state.totalAmount + payload.product.price * payload.count;
    },
    removeProductFromBasket(state, { payload }) {
      state.cartProducts = state.cartProducts.filter((cartProduct) => cartProduct.id !== payload.id)
      state.totalProducts = state.totalProducts - payload.count;
      state.totalAmount = state.totalAmount - payload.price;
    },
    submitCart() {
      return initialState;
    }

  }
});
export const { addProductToBasket, removeProductFromBasket, submitCart } = cartSlice.actions;
export default cartSlice.reducer;
