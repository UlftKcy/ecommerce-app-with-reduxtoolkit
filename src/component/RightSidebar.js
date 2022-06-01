import React from 'react';
import styled from 'styled-components';
import {BsFillBasket2Fill} from 'react-icons/bs';
import {FiSearch} from "react-icons/fi";

const RightBar = styled.div`
    position:absolute;
    right:0;
    top:15rem;
    min-height:30vh;
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
`
const SearchButton = styled.button`
    border:0;
    background-color:transparent;
    cursor:pointer;
    
`
const SearchBar = styled.input`
    padding:6px 12px;
    border-radius : 5px;
    outline:none;
    border:1px solid #ddd;
    display:none;
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
                    <RightItemLink>
                        <SearchButton>
                            <FiSearch size={25}/>
                        </SearchButton>
                        <SearchBar/>
                    </RightItemLink>
                </RightItem>
            </RightMenü>
        </RightBar>
    )
}

export default RightSidebar