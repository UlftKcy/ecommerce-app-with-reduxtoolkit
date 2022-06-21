import React from 'react'
import styled from 'styled-components'

const ProductWrapper  = styled.div`
    display: grid; 
    grid-template-columns: 1fr 2fr; 
    grid-template-rows: 1fr; 
    gap: 0px 0px;
`
const ProductImage = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
`
const ProductCardSide = styled.div`
`
const ProductCard = ({product}) => {
    console.log(product)
  return (
    <ProductWrapper>
        <ProductCardSide>
            <ProductImage src={product.image} alt="" />
        </ProductCardSide>
        <ProductCardSide>
            <div>{product.name}</div>
        </ProductCardSide>
    </ProductWrapper>
  )
}

export default ProductCard