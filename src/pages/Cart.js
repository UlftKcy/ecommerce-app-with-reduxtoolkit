import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CheckoutDetail from "../component/CheckoutDetail";
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
background-color:gray;
color:#ffff;
border-radius:10px;
padding:1rem 1rem 2rem 1rem;
`;
const ShoppingCartHeader = styled.h3`
margin-bottom:1rem;
`
const CheckoutHeader = styled.h3`
margin-bottom:1rem;
`

const Cart = () => {
  const products = useSelector((state) => state.cart.cartProducts);
  return (
    <CartWrapper>
      <ShoppingCart>
        <ShoppingCartHeader>Shopping Cart</ShoppingCartHeader>
        {products.map((product) => (
          <ProductInCart product={product} key={product.id} />
        ))}
      </ShoppingCart>
      <Checkout>
        <CheckoutHeader>Checkout</CheckoutHeader>
        <CheckoutDetail/>
      </Checkout>
    </CartWrapper>
  );
};

export default Cart;
