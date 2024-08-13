import React from "react";
import { MyCard } from "./MyCard";
import styled from "styled-components";
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 300px 300px;
  gap: 30px;
  justify-content: center;
  width: 100%;

  @media (min-width: 667px) {
    grid-template-columns: 300px 300px;
  }

  @media (min-width: 992px) {
    grid-template-columns: 300px 300px 300px;
  }

  @media (min-width: 1350px) {
    grid-template-columns: 300px 300px 300px 300px;
  }
`;

export const MyCardContainer = () => {
  return (
    <CardContainer>
      <MyCard />
      <MyCard />
      <MyCard />
      <MyCard />

    </CardContainer>
  );
};
