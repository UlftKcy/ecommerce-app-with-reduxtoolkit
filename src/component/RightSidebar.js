import React from 'react';
import styled from 'styled-components';
import {BsFillBasket2Fill} from 'react-icons/bs';

const RightBar = styled.div`
    position:absolute;
    right:0;
    top:15rem;
    height:30vh;
    background-color:#ffff;
    border-top-left-radius:30px;
    border-bottom-left-radius:30px;
`
const RightMenü = styled.ul`
    display:flex;
    justify-content:space-around;
    flex-direction:column;
    height:95%;
    padding:1rem;
`
const RightItem = styled.li`
    list-style-type:none;
`
const RightItemLink = styled.a`
    text-decoration:none;
    cursor:pointer;
    font-weight:500;
`

const RightSidebar = () => {
    return (
        <RightBar>
            <RightMenü>
                <RightItem>
                    <RightItemLink>
                    <BsFillBasket2Fill size={25} />
                    </RightItemLink>
                </RightItem>
                <RightItem>
                    <RightItemLink>Shop</RightItemLink>
                </RightItem>
            </RightMenü>
        </RightBar>
    )
}

export default RightSidebar