import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const CardBody = styled.div`
  width: 80%;
  color: #171a20;
  font-size: 2.2rem;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 10px;
  padding-top: 30px;
  border-radius: 5px;
  background-color:#ffff;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  &:hover{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    cursor:pointer;
  }
`;
const CardTitle = styled.h6`
  margin-bottom: 10px;
`;
const CardFooter = styled.div`
  
  padding: 25px 10px 10px 10px;
  
  width:100%;
  display:flex;
  align-items:center;
  justify-content:space-around;
`;
const ProductPrice = styled.div`
font-family: Arial, Helvetica, sans-serif;
font-size: 1rem;
font-weight:bolder;
display:flex;
align-items:center;
justify-content:center;
`
const CardImageBody = styled.div`
`;
const CardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
`;
const Counter = styled.div`
display:flex;
align-items:center;
font-size:1.5rem;
color:#FF7D1A;
`
const Button = styled.button`
    border:0;
    padding:6px 12px;
    background-color:#FF7D1A;
    color:#ffff;
    border-radius:50px;
    cursor:pointer;
    &:hover{
        background-color:#079307
    }
`
const IncrementBtn = styled.button`
    padding:4px 8px;
    margin-right:15px;
    border:0;
    cursor:pointer;
    color:#FF7D1A;
`
const DecrementBtn = styled.button`
padding:4px 8px;
margin-left:15px;
border:0;
cursor:pointer;
color:#FF7D1A;
`
const SelectedProductCount = styled.span``

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <CardBody>
      <CardTitle>{product.name}</CardTitle>
      <CardImageBody>
        <CardImage src={product.image}></CardImage>
      </CardImageBody>
      <ProductPrice>$ {product.price}</ProductPrice>
      <CardFooter>
        <Counter>
          <IncrementBtn>+</IncrementBtn>
          <SelectedProductCount>0</SelectedProductCount>
          <DecrementBtn>-</DecrementBtn>
        </Counter>
        <Button onClick={()=>dispatch({type:"addProductToBasket",payload:product})}>Add To Cart</Button>
        </CardFooter>
    </CardBody>
  );
};

export default ProductCard;
