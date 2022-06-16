import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/products/productSlice';

const Shop = () => {
  const products = useSelector(state=>state.products);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={()=>dispatch(fetchProducts())}>Fetch</button>
    </div>
  )
}

export default Shop;