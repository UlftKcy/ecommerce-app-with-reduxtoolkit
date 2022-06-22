import React from "react";
import styled from "styled-components";

const SpinnerContainer = styled.div`
  display:flex;
  justify-content:center;
`;
const LoadingContainer = styled.div`
  width: 50px;
  height: 50px;
  border: 10px solid #f3f3f3; /* Light grey */
  border-top: 10px solid #383636; /* Black */
  border-radius: 50%;
  animation: spinner 1.5s linear infinite;
  & {
    @keyframes spinner {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

const Loading = () => {
  return (
    <SpinnerContainer className="spinner-container">
      <LoadingContainer className="loading-spinner"></LoadingContainer>
    </SpinnerContainer>
  );
};

export default Loading;
