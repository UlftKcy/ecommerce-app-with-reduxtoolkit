import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CheckoutDetail from "../component/CheckoutDetail";
import EmptyCart from "../component/EmptyCart";
import ProductInCart from "../component/ProductInCart";

const CartWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr;
  gap: 1rem;
  padding: 1rem;
`;
const ShoppingCart = styled.div`
  padding: 0 3rem;
`;
const Checkout = styled.div`
  background-color: gray;
  color: #ffff;
  border-radius: 10px;
  padding: 1rem 1rem 2rem 1rem;
`;
const ShoppingCartHeader = styled.h3`
  margin-bottom: 1rem;
`;
const CheckoutHeader = styled.h3`
  margin-bottom: 1rem;
`;

const GeneralTotalWrapper = styled.div`
  float: right;
  width: 50%;
`;

const GeneralTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom:5px;
`;
const GeneralTotalLabel = styled.span`
  font-weight: normal;
  text-align: right;
  width: 50%;
`;
const Subtotal = styled.span`
  text-align: right;
  font-weight: bold;
`;
const Shipping = styled.span`
  text-align: right;
  font-weight: bold;
`;
const TotalAmountCart = styled.span`
  text-align: right;
  font-weight: bold;
`;

const Cart = () => {
  const products = useSelector((state) => state.cart.cartProducts);
  const amount = useSelector((state) => state.cart.totalAmount);

  return products.length > 0 ? (
    <CartWrapper>
      <ShoppingCart>
        <ShoppingCartHeader>Shopping Cart</ShoppingCartHeader>
        {products.map((product) => (
          <ProductInCart product={product} key={product.id} />
        ))}
        <GeneralTotalWrapper>
          <GeneralTotal>
            <GeneralTotalLabel>Subtotal : </GeneralTotalLabel>
            <Subtotal>${amount}</Subtotal>
          </GeneralTotal>
          <GeneralTotal>
            <GeneralTotalLabel>Shipping : </GeneralTotalLabel>
            <Shipping>$5</Shipping>
          </GeneralTotal>
          <GeneralTotal>
            <GeneralTotalLabel>Total : </GeneralTotalLabel>
            <TotalAmountCart>${amount + 5}</TotalAmountCart>
          </GeneralTotal>
        </GeneralTotalWrapper>
      </ShoppingCart>
      <Checkout>
        <CheckoutHeader>Checkout</CheckoutHeader>
        <CheckoutDetail />
      </Checkout>{" "}
    </CartWrapper>
  ) : (
    <EmptyCart />
  );
};

export default Cart;
