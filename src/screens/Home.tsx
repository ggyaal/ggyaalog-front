import React from "react";
import styled from "styled-components";
import LinkedFont from "../components/LinkedFont";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  return (
    <Container>
      <div>
        Home
        <LinkedFont to="#" fontColor="#0f9fdf" text="linkedFont!"></LinkedFont>
      </div>
    </Container>
  );
};

export default Home;
