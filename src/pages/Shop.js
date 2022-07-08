import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../component/ProductCard";
import { fetchProducts } from "../features/products/productSlice";
import styled from "styled-components";
import RightSidebar from "../component/RightSidebar";
import Loading from "../component/Loading";
import Breakpoint from "../responsive/Breakpoint";

const WrapperShop = styled.div``;
const ShopContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  gap: 3rem 1rem;
  padding: 3rem 1rem;
  @media only screen and ${Breakpoint.device.xs} {
    grid-template-columns: 1fr;
  }
  @media only screen and ${Breakpoint.device.sm} {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and ${Breakpoint.device.lg} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media only screen and ${Breakpoint.device.xl} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
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
            <ProductCard product={product} key={product.id} />
          ))}
        <RightSidebar />
      </ShopContainer>
    </WrapperShop>
  );
};

export default Shop;
