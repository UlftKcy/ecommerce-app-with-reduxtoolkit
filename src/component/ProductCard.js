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
  background-color:#e5e0e3;
  padding: 25px 10px 10px 10px;
  position: absolute;
  bottom: 0;
  width:100%;
  display:flex;
  justify-content:space-between;
`;
const CardText = styled.p`
font-family: Arial, Helvetica, sans-serif;
font-size: 1rem;
font-weight:bolder;
line-height: 20px;
`
const CardImageBody = styled.div`
  position: relative;
}
`;
const CardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
`;
const Button = styled.button`
    border:0;
    padding:6px 12px;
    background-color:green;
    color:#ffff;
    border-radius:50px;
    cursor:pointer;
    &:hover{
        background-color:#079307
    }
`
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <CardBody>
      <CardTitle>{product.name}</CardTitle>
      <CardImageBody>
        <CardImage src={product.image}></CardImage>
        <CardFooter>
        <Button onClick={()=>dispatch({type:"addProductToBasket",payload:product})}>Ekle</Button>
        <CardText>$ {product.price}</CardText>
        </CardFooter>
      </CardImageBody>
    </CardBody>
  );
};

export default ProductCard;
