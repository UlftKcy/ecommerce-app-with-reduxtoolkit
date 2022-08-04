import React from 'react';
import styled from 'styled-components';
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";
import {BsFillBasket2Fill} from 'react-icons/bs';

const RightBar = styled.div`
    position:fixed;
    right:0;
    top:4.5rem;
    border-top-left-radius:30px;
    border-bottom-left-radius:30px;
    background-color:#ffff;
`
const RightMenü = styled.div`
    display:flex;
    justify-content:space-around;
    flex-direction:column;
    height:95%;
    padding:1rem;
`
const RightItem = styled.div`
    margin:1rem;
   
`
const RightItemLink = styled.a`
    text-decoration:none;
    cursor:pointer;
    font-weight:500;
    position:relative;
    margin-right:10px;
`
const CartCountLabel = styled.span`
    position:absolute;
    bottom:10px;
    left:28px;
    font-size:1rem;
    border:1px solid #FF7D1A;
    background-color:#FF7D1A;
    color:#ffff;
    padding:1px 6px;
    border-radius:50%;
`
const RightSidebar = () => {
    const count = useSelector(state=>state.cart.totalProducts);
    let navigate = useNavigate();
    return (
        <RightBar>
            <RightMenü>
                <RightItem>
                    <RightItemLink>
                        <BsFillBasket2Fill size={25} onClick={()=>navigate("/cart")}/>
                        <CartCountLabel>{count}</CartCountLabel>
                    </RightItemLink>
                </RightItem>
            </RightMenü>
        </RightBar>
    )
}

export default RightSidebar