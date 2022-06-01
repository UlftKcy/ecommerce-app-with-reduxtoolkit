import React from 'react';
import styled from 'styled-components';
import BrandImg from "../assets/brand.svg";
import { CgMenuRight } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";

const Wrapper = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:2rem 3rem;
    z-index:0;
`
const BrandLink = styled.a`
    text-decoration:none;
    cursor:pointer;
`
const HamburgerMenü = styled.button`
    display:none;
    border:0;
    @media (max-width: 768px) {
        display:block;
    }
`
const BrandImage = styled.img`
    width:70px;
    height:auto;
`
const NavItemLink = styled.a`
    text-decoration:none;
    cursor:pointer;
    font-weight:500;
`
const SidebarWrapper = styled.div`
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
            display:none;
    }
`
const MobileMenü = styled.ul`
    display:flex;
    flex-direction:column;
`
const CancelMenü = styled.button`
    background-color:transparent;
    border:0;
    padding:2rem;
`
const MobileItem = styled.li`
    list-style-type:none;
    padding:5px 3rem;
`

const Sidebar = ({open,setOpen}) => {

    return (
                <>
                    <Wrapper>
                        <BrandLink>
                            <BrandImage src={BrandImg} />
                        </BrandLink>
                        <HamburgerMenü onClick={() => setOpen(!open)}><CgMenuRight size={30} /></HamburgerMenü>
                    </Wrapper>
                    <SidebarWrapper>
                        <CancelMenü onClick={() => setOpen(!open)}><FaTimes size={30} /></CancelMenü>
                        <MobileMenü>
                            <MobileItem>
                                <NavItemLink>Home</NavItemLink>
                            </MobileItem>
                            <MobileItem>
                                <NavItemLink>Shop</NavItemLink>
                            </MobileItem>
                        </MobileMenü>
                    </SidebarWrapper>
                </>
    )
}

export default Sidebar;