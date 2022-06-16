import styled from "styled-components";
import RightSidebar from "../component/RightSidebar";
import HomePage from "../component/HomePage";

const Container = styled.div`
    height:100vh;
`;
const Home = () => {

    return (
        <Container>
            <HomePage/>
            <RightSidebar />
        </Container>
    );
};

export default Home;
