import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const SliderContainer = styled.div`
  width: auto;
  height: 70px;
  overflow: hidden;
  position: relative;
  text-align: center;
  margin: 10px 0;
`;
const Info = styled.div`
  width: 100%;
  text-align:center;
  line-height:5px;
`;
const Slide = styled.div`
  position: absolute;
  width: 100%;
  opacity: 0;
  transform: translateY(100%);
  transition: opacity 0.6s ease-in-out, transform 0.6s ease-in-out;
  font-size: 4rem;

  ${({ isActive }) =>
    isActive &&
    css`
      opacity: 1;
      transform: translateY(0%);
    `}
`;

const slidesData = ["Developer", "Designer", "Programmer"];

const TextSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Info>
        <p>Hi</p>
        <p>I am Arjun Suresh,</p>
        <p> and I am a</p>
      </Info>

      <SliderContainer>
        {slidesData.map((slide, index) => (
          <Slide key={index} isActive={index === currentSlide}>
            {slide}
          </Slide>
        ))}
      </SliderContainer>
    </div>
  );
};

export default TextSlider;
