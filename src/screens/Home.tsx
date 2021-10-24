import React from "react";
import styled from "styled-components";
import LinkedFont from "../components/LinkedFont";
import Switch from "../components/Switch";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  return (
    <Container>
      <Switch width={300} value={true} />
      <div>
        Home
        <br />
        <LinkedFont to="#" fontColor="#0f9fdf" text="linkedFont!"></LinkedFont>
      </div>
    </Container>
  );
};

export default Home;
