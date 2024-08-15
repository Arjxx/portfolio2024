import React, { useEffect } from "react";
import styled from "styled-components";
import TextSlider from "./SlidingText";
import laptop from "./laptop.png";
import ship from "./ship.png";

// Styled Components
const Container = styled.div``;

const Box = styled.div`
  position: relative;
  height: 500vh; /* Ensure the Box has enough height to allow for scrolling */
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
  z-index: 0; /* Optional: Ensure it stays on top */
`;

const Box1 = styled.div`
  position: absolute;
  width: 20%;
  height: 350px;
  top: 600px;
  left: 500px;
  no-repeat center/contain;
  animation: floatAndRotate1 120s linear infinite;

  @keyframes floatAndRotate1 {
    0%     {
      transform: translate(-50%, -50%) translateY(20px) rotate(0deg);
    }
   
       100% {
      transform: translate(-500%, -700%) translateY(20px) rotate(360deg);
    }
  }
`;

const Box2 = styled.div`
  position: absolute;
  width: 20%;
  height: 350px;
  background: url("https://cdn3d.iconscout.com/3d/premium/thumb/coding-book-4493997-3738381.png")
    no-repeat center/contain;
  top: 350px;
  right: 200px;
  transform: translate(-50%, -50%);
  animation: floatAndRotate2 120s linear  infinite;

  @keyframes floatAndRotate2 {
    0%   {
      transform: translate(-50%, -70%) translateY(-20px) rotate(0deg);
    }
   
       100% {
      transform: translate(-50%, -70%) translateY(-20px) rotate(-360deg);
    }
  }
`;
const Box3 = styled.div`
  position: absolute;
  width: 10%;
  height: 350px;
  top: 900px;
  right: 700px;
  transform: translate(-50%, -50%);
  animation: floatAndRotate 60s  infinite;

  @keyframes floatAndRotate {
    0%,
    100% {
      transform: translate(-50%, -50%) translateY(-20px) rotate(0deg);
    }
    50% {
      transform: translate(-50%, -50%) translateY(20px) rotate(10deg);
    }
  }
`;

// React Component
export const Slidingdiv = () => {
  useEffect(() => {
    // Scroll to BoxContainer after 2 seconds
    const timer = setTimeout(() => {
      document.getElementById("box-container").scrollIntoView({
        behavior: "smooth",
      });
    }, 100);

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, []);

  return (
    <>
      <Container>
        <Box>
          <InnerBox>
            <TextSlider />
          </InnerBox>
          <BoxContainer id="box-container">
            <Box1>
              <img style={{ width: "100%" }} src={laptop} alt="Laptop" />
            </Box1>
            <Box2 />
            {/* <Box3>
              <img style={{ width: "100%" }} src={ship} alt="Laptop" />
            </Box3> */}
          </BoxContainer>
        </Box>
      </Container>
    </>
  );
};
