import React from 'react';
import styled from 'styled-components';
import BrandImg from "../assets/brand.svg";

const Navbar = styled.nav`
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color:#ddd;
    padding:0.5rem 3rem;
`
const Brand = styled.div`
    
`
const BrandImage = styled.img`
    width:100px;
    height:auto;
`

const NavLinks = styled.ul`
    display:flex;
`

const NavLink = styled.li`
    margin-right:3rem;
    list-style-type:none;
`

const Home = () => {
    return (
        <Navbar>
            <Brand>
                <BrandImage src={BrandImg}/>
            </Brand>
            <NavLinks>
                <NavLink>Home</NavLink>
                <NavLink>Shop</NavLink>
                <NavLink>Basket</NavLink>
                <NavLink>Search</NavLink>
            </NavLinks>
        </Navbar>
    )
}

export default Home