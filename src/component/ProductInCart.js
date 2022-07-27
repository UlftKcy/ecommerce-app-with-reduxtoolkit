import React from "react";
import styled from "styled-components";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

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
const ProductCountDecrease = styled.button`
  padding: 5px 10px;
  margin: 0 10px;
  border: 0;
  cursor: pointer;
  background-color: #ff7d1a;
  color: #ffff;
  border-radius: 5px;
  &:hover {
    opacity: 0.9;
  }
`;
const ProductCountIncrease = styled.button`
  padding: 5px 10px;
  margin: 0 10px;
  border: 0;
  cursor: pointer;
  background-color: #ff7d1a;
  color: #ffff;
  border-radius: 5px;
  &:hover {
    opacity: 0.9;
  }
`;
const RemoveProductButton = styled.button`
border:0;
cursor: pointer;
color:red;
background-color: transparent;
`;

const ProductInCart = ({ product }) => {
  console.log(product);
  return (
    <ProductInCartWrapper>
      <ProductImage src={product.image}></ProductImage>
      <ProductName>{product.name}</ProductName>
      <ProductCount>
        <ProductCountDecrease>
          <FaMinus />
        </ProductCountDecrease>
        {product.count}
        <ProductCountIncrease>
          <FaPlus />
        </ProductCountIncrease>
      </ProductCount>
      <ProductPrice>${product.price}</ProductPrice>
      <RemoveProductButton><FaTrash size={25} /></RemoveProductButton>
    </ProductInCartWrapper>
  );
};

export default ProductInCart;
