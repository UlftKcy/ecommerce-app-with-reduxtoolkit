import React from 'react';
import {useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from 'styled-components';
import Swal from "sweetalert2";
import { submitCart } from '../features/products/cartSlice';

const CheckoutForm = styled.form`
    display: grid; 
    grid-template-columns: 1fr; 
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr; 
    gap: 10px 0; 
    margin:auto;
`
const CheckoutRow = styled.div`
    display:flex;
    flex-direction:column;
    align-content:center;
    margin:auto 0;
`
const CheckoutLabel = styled.label`
    font-size:0.7rem;
    font-weight:bold;
    color:#dddd;
    text-align:left;
`
const CheckoutInputGroup = styled.div`
display:flex;
margin-bottom:10px;

`
const InputRadio = styled.input`
  margin-right:10px;
`
const Input = styled.input`
    width:100%;
    padding:10px 20px;
`
const CheckoutButton = styled.button`
    padding:10px 20px;
    background-color:#ff7d1a;
    color:#ffff;
    font-weight:bolder;
    border:0;
    border-radius:5px;
    cursor:pointer;
    transition:background-color 0.5s ease;
    &:hover{
        background-color:#079307;
    }
`
const CheckoutDetail = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(submitCart());
        Swal.fire({
            title: "Success",
            text: "Alert successful",
            icon: "success",
            confirmButtonText: "OK",
          }).then(function () {
            navigate("/");
          });
    }
    return (
        <CheckoutForm onSubmit={handleSubmit}>
            <CheckoutRow>
                <CheckoutInputGroup>
                    <InputRadio type="radio" name="card_type" defaultChecked={true}/>
                    <CheckoutLabel>Master Card</CheckoutLabel>
                </CheckoutInputGroup>
                <CheckoutInputGroup>
                    <InputRadio type="radio" name="card_type" />
                    <CheckoutLabel>Visa</CheckoutLabel>
                </CheckoutInputGroup>
            </CheckoutRow>
            <CheckoutRow>
                <CheckoutLabel>Name on Card</CheckoutLabel>
                <CheckoutInputGroup>
                    <Input type="text" name="card_user_name" value="Test Test" disabled />
                </CheckoutInputGroup>
            </CheckoutRow>
            <CheckoutRow>
                <CheckoutLabel>Card Number</CheckoutLabel>
                <CheckoutInputGroup>
                    <Input type="text" name="card_number" value="**** **** **** ****" disabled />
                </CheckoutInputGroup>
            </CheckoutRow>
            <CheckoutRow>
                <CheckoutLabel>Expiration Date</CheckoutLabel>
                <CheckoutInputGroup>
                    <Input type="text" name="expiration_date" value="01/01/2030" disabled />
                </CheckoutInputGroup>
            </CheckoutRow>
            <CheckoutRow>
                <CheckoutButton>Checkout</CheckoutButton>
            </CheckoutRow>
        </CheckoutForm>
    )
}

export default CheckoutDetail