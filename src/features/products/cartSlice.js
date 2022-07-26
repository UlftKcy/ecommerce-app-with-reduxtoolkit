import { createSlice} from "@reduxjs/toolkit";

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
    addProductToBasket : (state,action)=>{
      state.cartProducts = [...state.cartProducts,action.payload]
    }
  }
    
});
export const {addProductToBasket} = cartSlice.actions;
export default cartSlice.reducer;
/* return {
  total_products_in_cart: [...state.total_products_in_cart,action.payload],
  total_count_products_in_cart: state.total_count_products_in_cart + action.count
}; */