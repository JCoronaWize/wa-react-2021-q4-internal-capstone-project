import "../Home.css";
import data from "../mocks/en-us/featured-banners.json";
import Slide from "./Slide";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import styled from "styled-components";
import { useState } from "react";
const HeroSlider = ({ children, props }) => {
  const StyledHeroSlider = styled.div`
    height: 32em;
    background-color: #6d0b9d;
    color: white;
    .arrow{ 
        z-index: 1000;
         position: absolute;        
        cursor: pointer;
        font-size: 4em;
        bottom: 50%;
    }
    .left {
        right: 1em;
    }
    .right{
        left: 1em;
    }    

    div.slider {
        width: 100%;
        height: 100%;
        overflow-x: hidden;
    }

  `;
    const [current, setCurrent] = useState(0)
    const slideLength = data.results.length
    const nextSlide = () => {
        if(current + 1 < slideLength){
            setCurrent(current + 1) 
        } else {
            setCurrent(0)
        }
    }
    const prevSlide = () => {
        if(current === 0){
            setCurrent(slideLength - 1) 
        } else {
            setCurrent(current - 1)
        }
    }    

  return (
    <StyledHeroSlider>
          <FaArrowCircleLeft className="arrow right" onClick={prevSlide}></FaArrowCircleLeft>
          <FaArrowCircleRight className="arrow left" onClick={nextSlide}></FaArrowCircleRight>
      <div className="slider">
        {data.results.map((item, index) => (
            <Slide
            id={`slide_${index}`}
            key={data.key}
            srcImg={item.data.main_image.url}
            altText={item.data.main_image.alt}
            description={item.data.description[0].text}
            active={index === current ? true : false}
            />
            ))}
      </div>
    </StyledHeroSlider>
  );
};
export default HeroSlider;
