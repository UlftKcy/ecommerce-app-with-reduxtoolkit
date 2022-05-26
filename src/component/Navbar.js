import React from 'react';
import styled from 'styled-components';
import BrandImg from "../assets/brand.svg";
import {CgMenuRight} from "react-icons/cg";

const Wrapper = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:2rem 3rem;
`
const BrandLink = styled.a`
    text-decoration:none;
    cursor:pointer;
`
const HamburgerMenü= styled.button`
    visibility:hidden;
    border:0;
    @media (max-width: 768px) {
      visibility:visible;
    }
`
const BrandImage = styled.img`
    width:70px;
    height:auto;
`

const NavMenü = styled.ul`
    display:flex;
    @media (max-width: 768px) {
      display:none;
    }
`

const NavItem = styled.li`
    margin-right:3rem;
    list-style-type:none;
`
const NavItemLink = styled.a`
    text-decoration:none;
    cursor:pointer;
    font-weight:500;
`
const SearchBar = styled.input`
    padding:8px 16px;
    border-radius:5px;
    border:0;
    &:focus{
      outline:none;
    }
`
const Navbar = () => {
  return (
    <Wrapper>
    <BrandLink>
        <BrandImage src={BrandImg} />
    </BrandLink>
    <HamburgerMenü><CgMenuRight size={30}/></HamburgerMenü>
    <NavMenü>
        <NavItem>
            <NavItemLink>Home</NavItemLink>
        </NavItem>
        <NavItem>
            <NavItemLink>Shop</NavItemLink>
        </NavItem>
        <NavItem>
            <NavItemLink>Basket</NavItemLink>
        </NavItem>
        <NavItem>
            <SearchBar type="text" placeholder='Arama...'/>
        </NavItem>
    </NavMenü>
</Wrapper>
  )
}

export default Navbar;