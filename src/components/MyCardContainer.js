import React from "react";
import { MyCard } from "./MyCard";
import styled from "styled-components";
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 300px 300px 300px 300px;
  gap: 10px;
  place-items: center;

@media(max-width:786px){
 grid-template-columns: 300px 300px;
}

`;

export const MyCardContainer = () => {
  return (
    <CardContainer>
      <MyCard />
      <MyCard />
      <MyCard />
      <MyCard />
      <MyCard />
    </CardContainer>
  );
};
