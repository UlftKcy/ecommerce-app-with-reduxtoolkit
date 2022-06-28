import React from 'react';
import { useSelector } from "react-redux";
import ProductInCart from '../component/ProductInCart';

const Cart = () => {
  const products = useSelector((state)=>state.cart.total_products_in_cart);
  const product_count = useSelector((state)=>state.cart.total_count_products_in_cart);
  console.log("products",products,"product_count",product_count)
  return (
    <div>
      {products.map((product)=>(
        <ProductInCart product={product} key={product.id}/>
      ))}
    </div>
  )
}

export default Cart;