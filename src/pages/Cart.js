import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ProductInCart from "../component/ProductInCart";

const CartWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr;
  gap: 1rem;
  padding:1rem;
  
`;
const ShoppingCart = styled.div`
  padding:0 3rem;
`;
const Checkout = styled.div`
 
`;
const ShoppingCartHeader = styled.h3`
margin-bottom:1rem;
`
const CheckoutHeader = styled.h3`
margin-bottom:1rem;
`

const Cart = () => {
  const products = useSelector((state) => state.cart.total_products_in_cart);
  const product_count = useSelector(
    (state) => state.cart.total_count_products_in_cart
  );
  console.log("products", products, "product_count", product_count);
  return (
    <CartWrapper>
      <ShoppingCart>
        <ShoppingCartHeader>Shopping Cart</ShoppingCartHeader>
        {products.map((product) => (
        <ProductInCart product={product} key={product.id} />
      ))}
      </ShoppingCart>
      <Checkout><CheckoutHeader>Checkout</CheckoutHeader></Checkout>
    </CartWrapper>
  );
};

export default Cart;
