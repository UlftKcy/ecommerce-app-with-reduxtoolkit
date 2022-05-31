import React, { useState } from 'react';
import styled from 'styled-components';
import BrandImg from "../assets/brand.svg";
import { CgMenuRight } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";

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
const HamburgerMenü = styled.button`
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
const MobileWrapper = styled.div`
    position:absolute;
    left:0;
    top:0;
    min-height:100vh;
    display:flex;
    flex-direction:column;
    background-color:#CFCFCF;
    color:black;
    z-index:1;
    @media (min-width: 901px) {
      visibility:hidden;
    }
`
const MobileMenü =  styled.ul`
    display:flex;
    flex-direction:column;
`
const CancelMenü =  styled.button`
    background-color:transparent;
    border:0;
    padding:2rem;
`
const MobileItem =  styled.li`
    list-style-type:none;

    padding:2rem 3rem;
`

const Navbar = () => {
    const [open, setOpen] = useState(true);

    return (
        <>
            {open ? (
                <Wrapper>
                    <BrandLink>
                        <BrandImage src={BrandImg} />
                    </BrandLink>
                    <HamburgerMenü onClick={() => setOpen(!open)}><CgMenuRight size={30} /></HamburgerMenü>
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
                            <SearchBar type="text" placeholder='Arama...' />
                        </NavItem>
                    </NavMenü>
                </Wrapper>
            ) : (
                <MobileWrapper>
                    <CancelMenü onClick={() => setOpen(!open)}><FaTimes size={30} /></CancelMenü>
                    <MobileMenü>
                        <MobileItem>
                            <NavItemLink>Home</NavItemLink>
                        </MobileItem>
                        <MobileItem>
                            <NavItemLink>Shop</NavItemLink>
                        </MobileItem>
                    </MobileMenü>
                </MobileWrapper>
            )}
        </>

    )
}

export default Navbar;