import "../Home.css";
import data from "../mocks/en-us/featured-banners.json";
import Slide from "./Slide";
import { useState } from "react";
import {
  StyledHeroSlider,
  ArrowNav,
  SlideContainer,
} from "./HeroSlider.styles";

const HeroSlider = ({ children, props }) => {
  const [current, setCurrent] = useState(0);
  const slideLength = data.results.length;
  const nextSlide = () => {
    if (current + 1 < slideLength) {
      setCurrent(current + 1);
    } else {
      setCurrent(0);
    }
  };
  const prevSlide = () => {
    if (current === 0) {
      setCurrent(slideLength - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  return (
    <StyledHeroSlider>
      <ArrowNav direction="left" onClick={prevSlide}></ArrowNav>
      <ArrowNav direction="right" onClick={nextSlide}></ArrowNav>
      <SlideContainer>
        {data.results.map((item, index) => (
          <Slide
            key={index}
            srcImg={item.data.main_image.url}
            altText={item.data.main_image.alt}
            description={item.data.description[0].text}
            active={index === current ? true : false}
          />
        ))}
      </SlideContainer>
    </StyledHeroSlider>
  );
};
export default HeroSlider;
