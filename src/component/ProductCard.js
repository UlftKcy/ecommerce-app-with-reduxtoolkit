import React, {useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";
import Breakpoint from "../responsive/Breakpoint";
import { addProductToBasket } from "../features/products/cartSlice";

const CardBody = styled.div`
  margin: auto;
  color: #171a20;
  font-size: 2.2rem;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 10px;
  padding-top: 30px;
  border-radius: 5px;
  background-color: #ffff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    cursor: pointer;
  }
  @media only screen and ${Breakpoint.device.smmin} {
    width: 60%;
  }
  @media only screen and ${Breakpoint.device.md} {
    width: 100%;
  }
`;
const CardTitle = styled.h6`
  margin-bottom: 10px;
`;
const CardFooter = styled.div`
  padding: 25px 10px 10px 10px;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const ProductPrice = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  font-weight: bolder;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CardImageBody = styled.div``;
const CardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
`;
const Counter = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff7d1a;
`;
const Button = styled.button`
  border: 0;
  padding: 6px 12px;
  background-color: #ff7d1a;
  color: #ffff;
  border-radius: 50px;
  cursor: pointer;
  &:hover {
    background-color: #079307;
  }
`;
const IncrementBtn = styled.button`
  padding: 4px 8px;
  margin-left: 15px;
  border: 0;
  cursor: pointer;
  color: #ff7d1a;
  &:hover {
    background-color: #ff7d1a;
    color: #ffff;
  }
`;
const DecrementBtn = styled.button`
  padding: 4px 8px;
  margin-right: 15px;
  border: 0;
  cursor: pointer;
  color: #ff7d1a;
  &:hover {
    background-color: #ff7d1a;
    color: #ffff;
  }
`;
const SelectedProductCount = styled.span``;

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [disable, setDisable] = useState(true);

  const incrementCount = () => {
    setCount(count + 1);
    setDisable(false);
  };
  const decrementCount = () => {
    setCount(count - 1);
    if (count === 2) {
      setDisable(true);
    }
  };
  return (
    <CardBody>
      <CardTitle>{product.name}</CardTitle>
      <CardImageBody>
        <CardImage src={product.image}></CardImage>
      </CardImageBody>
      <ProductPrice>$ {product.price}</ProductPrice>
      <CardFooter>
        <Counter>
          <DecrementBtn disabled={disable} onClick={decrementCount}>
            <FaMinus />
          </DecrementBtn>
          <SelectedProductCount>{count}</SelectedProductCount>
          <IncrementBtn onClick={incrementCount}>
            <FaPlus />
          </IncrementBtn>
        </Counter>
        <Button
          onClick={() =>
            dispatch(addProductToBasket({product,count}))
          }
        >
          Add To Cart
        </Button>
      </CardFooter>
    </CardBody>
  );
};

export default ProductCard;
