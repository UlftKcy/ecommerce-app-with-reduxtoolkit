import React from 'react';
import styled from 'styled-components';
import BgImage from "../assets/BgImage.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const BackgroundWrapper = styled.div`
    height:90%;
    background-position:bottom;
    background-repeat:no-repeat;
    position:relative;
    display:flex;
    flex-direction:column;
    @media (max-width: 900px) {
        background-position:right;
    }

`
const Button = styled.button`
    position:absolute;
    right:10%;
    top:50%;
    padding:1rem 2rem;
    border-radius:14px;
    font-weight:bold;
    font-size:0.9rem;
    display:flex;
    align-items:center;
    cursor:pointer;
    color:#1786aa;
    border:2px solid #1786aa;
    margin-right:2rem;
`
const ContentWrapper = styled.div`
    position:absolute;
    right:7%;
    top:20%;
`
const iconStyle = {
    marginLeft: "5px",
}

const ContentHome = styled.p`
    margin-bottom:10px;
    font-size:2.2rem;
    font-weight:bolder;
`
const HomePage = () => {
    let navigate = useNavigate();
    return (
        <BackgroundWrapper style={{ backgroundImage: `url(${BgImage})` }}>
            <ContentWrapper>
                <ContentHome>Furnish Your Home</ContentHome>
                <ContentHome>Furnish Your Life</ContentHome>
            </ContentWrapper>
            <Button onClick={()=>navigate("/shop")}>Shop Now <AiOutlineArrowRight size={20} style={iconStyle} /></Button>
        </BackgroundWrapper>
    )
}

export default HomePage;