import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../component/ProductCard";
import { fetchProducts } from "../features/products/productSlice";
import styled from "styled-components";

const WrapperShop = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 2rem 2rem;
  margin:3rem;
`;

const Shop = () => {
  const { product_datas, error, loading } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <WrapperShop>
      {loading && "Loading..."}
      {error && error}
      {product_datas &&
        product_datas.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
    </WrapperShop>
  );
};

export default Shop;
