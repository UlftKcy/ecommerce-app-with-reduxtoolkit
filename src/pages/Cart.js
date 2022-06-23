import React from 'react';
import { useSelector } from "react-redux";
import ProductInCart from '../component/ProductInCart';

const Cart = () => {
  const products = useSelector((state)=>state.cart.products_in_cart);
  return (
    <div>
      {products.map((product)=>(
        <ProductInCart product={product} key={product.id}/>
      ))}
    </div>
  )
}

export default Cart;