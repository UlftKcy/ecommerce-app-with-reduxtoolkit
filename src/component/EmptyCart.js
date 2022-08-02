import React from 'react';
import styled from "styled-components";
import { BsCartDashFill } from "react-icons/bs";

const EmptyCartWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:2rem;
`
const EmptyCartDesc = styled.span`
    margin:1rem 0;
`

const EmptyCart = () => {
  return (
    <EmptyCartWrapper>
        <BsCartDashFill size={60}/>
        <EmptyCartDesc>No products have been added yet</EmptyCartDesc>
    </EmptyCartWrapper>
  )
}

export default EmptyCart;