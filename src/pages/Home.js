import React from 'react';
import styled from 'styled-components';
import RightSidebar from '../component/RightSidebar';

const Container = styled.div`
    min-height:100vh;
`

const Home = () => {
    return(
       <>
        <Container>home</Container>
        <RightSidebar/>
       </>
    )
}

export default Home