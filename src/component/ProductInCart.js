import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { removeProductFromBasket } from "../features/products/cartSlice";

const ProductInCartWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  gap: 5px;
  padding: 1rem;
  border: 1px solid #d6d6d6;
  border-radius:25px;
  margin-bottom:1rem;
`;

const ProductImage = styled.img`
  width: 70px;
  height: 70px;
  margin: auto;
`;
const ProductName = styled.h4``;
const ProductCount = styled.div``;
const ProductPrice = styled.span``;

const RemoveProductButton = styled.button`
border:0;
cursor: pointer;
color:red;
background-color: transparent;
`;

const ProductInCart = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <ProductInCartWrapper>
      <ProductImage src={product.image}></ProductImage>
      <ProductName>{product.name}</ProductName>
      <ProductCount>
        {product.count}
      </ProductCount>
      <ProductPrice>${product.price}</ProductPrice>
      <RemoveProductButton onClick={()=>dispatch(removeProductFromBasket(product))}><FaTrash size={25} /></RemoveProductButton>
    </ProductInCartWrapper>
  );
};

export default ProductInCart;
