import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const SliderContainer = styled.div`
  width: 400px;
  height: 70px;
  overflow: hidden;
  position: relative;
  text-align: center;
  margin: 10px 0;
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

const slidesData = ['First Slide', 'Second Slide', 'Third Slide'];

const TextSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <SliderContainer>
      {slidesData.map((slide, index) => (
        <Slide key={index} isActive={index === currentSlide}>
          {slide}
        </Slide>
        
      ))}
    </SliderContainer>
  );
};

export default TextSlider;
