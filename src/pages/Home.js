import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RightSidebar from "../component/RightSidebar";
import axios from "axios";
import HomePage from "../component/HomePage";

const API = axios.create({
    baseURL: "https://course-api.com/",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

const Container = styled.div`
    height:100vh;
`;

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts();
    }, []);

    const getAllProducts = async () => {
        try {
            const response = await API.get("react-store-products");
            const products = await response.data;
            setProducts(products);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container>
            <HomePage/>
            <RightSidebar />
        </Container>
    );
};

export default Home;
