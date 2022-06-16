import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import Sidebar from './Sidebar';
import styled from 'styled-components';
import BrandImg from "../assets/brand.svg";
import { CgMenuRight } from "react-icons/cg";

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
    @media (max-width: 400px) {
        display:block;
    }
`
const BrandImage = styled.img`
    width:70px;
    height:auto;
`

const NavMenü = styled.ul`
    display:flex;
    align-items:center;
    @media (max-width: 400px) {
        & {
            display:none;
        }
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

const Navbar = () => {
    const [open, setOpen] = useState(true);
    let navigate = useNavigate();
    return (
        <>
            {open ? (
                <Wrapper>
                    <BrandLink>
                        <BrandImage src={BrandImg} />
                    </BrandLink>
                    <NavMenü>
                        <NavItem>
                            <NavItemLink onClick={()=>navigate("/")}>Home</NavItemLink>
                        </NavItem>
                        <NavItem>
                            <NavItemLink onClick={()=>navigate("/shop")}>Shop</NavItemLink>
                        </NavItem>
                    </NavMenü>
                    <HamburgerMenü onClick={() => setOpen(!open)}><CgMenuRight size={30} /></HamburgerMenü>
                </Wrapper>
            ) : (
               <Sidebar open={open} setOpen={setOpen}/>
            )}
        </>

    )
}

export default Navbar;