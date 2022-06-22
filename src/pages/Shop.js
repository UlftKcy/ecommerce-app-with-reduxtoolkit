import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../component/ProductCard";
import { fetchProducts } from "../features/products/productSlice";
import styled from "styled-components";
import RightSidebar from "../component/RightSidebar";
import Loading from "../component/Loading";

const WrapperShop = styled.div`

`
const ShopContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 2rem 2rem;
  padding:3rem;
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
      {loading && <Loading />}
      {error && error}
      <ShopContainer>
        {product_datas &&
          product_datas.map((product) => (
            <ProductCard product={product} key={product.id}/>
          ))}
        <RightSidebar />
      </ShopContainer>
    </WrapperShop>

  );
};

export default Shop;
