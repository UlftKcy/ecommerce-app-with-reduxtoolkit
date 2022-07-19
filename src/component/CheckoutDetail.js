import React from 'react';
import styled from 'styled-components';

const CheckoutForm = styled.form`
    display: grid; 
    grid-template-columns: 1fr; 
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr; 
    gap: 0px; 
    height:100%;
`
const CheckoutRow = styled.div`
    display:flex;
    flex-direction:column;
    align-content:center;
`
const CheckoutLabel = styled.label`
    font-size:0.7rem;
    font-weight:bold;
    color:#dddd;
    margin-bottom:5px;
    text-align:left;
`
const CheckoutInputGroup = styled.div`
display:flex;

`
const InputRadio = styled.input`
  margin-right:10px;
`
const Input = styled.input`
    width:100%;
    padding:10px 20px;
`
const CheckoutDetail = () => {
    return (
        <CheckoutForm>
            <CheckoutRow>
                <CheckoutLabel>Card Type</CheckoutLabel>
                <CheckoutInputGroup>
                    <InputRadio type="radio" name="card_type"/>Master Card
                    <InputRadio type="radio" name="card_type"/>Visa
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
                <button>Checkout</button>
            </CheckoutRow>
        </CheckoutForm>
    )
}

export default CheckoutDetail