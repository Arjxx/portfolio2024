import React from 'react'
import styled from 'styled-components'
import TextSlider from './SlidingText';
// Styled Components
const Container = styled.div`
`;

const Box = styled.div`
  position: relative;
  height: 500vh;  /* Ensure the Box has enough height to allow for scrolling */
`;


const BoxContainer = styled.div`

  position: relative;
  top: 80vh;
  

`;

const InnerBox = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
  background: black;
  display: flex;
  justify-content: center;
  color: white;
  align-items: center;
  font-size: 3rem;
  z-index: 0;  /* Optional: Ensure it stays on top */
`;

const Box1 = styled.div`
  position: absolute;
  width: 30%;
  height: 350px;
  background: pink;
  top: 600px;
  left: 50px;
`;

const Box2 = styled.div`
  position: absolute;
 width: 30%;
  height: 350px;
  background: yellow;
  top: 200px;
  right: 50px;
`;

const Box3 = styled.div`
  position: absolute;
 width: 30%;
   height: 350px;
  background: white;
  top: 900px;
  right: 50px;
`;

// React Component
export const Slidingdiv = () => {
  return (
    <>
      <Container>
        <Box>
          <InnerBox>
<TextSlider/>


          </InnerBox>
          <BoxContainer>
            <Box1 />
            <Box2 />
            <Box3 />
            </BoxContainer>
        </Box>
      </Container>
    </>
  );
}
