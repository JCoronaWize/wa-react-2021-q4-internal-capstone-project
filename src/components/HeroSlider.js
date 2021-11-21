import "../Home.css";
import Slide from "./Slide";
import { useState } from "react";
import {
  StyledHeroSlider,
  ArrowNav,
  SlideContainer,
} from "./HeroSlider.styles";

const HeroSlider = ({ slideData }) => {
  const [current, setCurrent] = useState(0);
  const slideLength = slideData.length;
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
        {slideData.map((item, index) => (
          <Slide
            key={index}
            srcImg={item.img_src}
            altText={item.img_alt}
            description={item.img_desc}            
            active={index === current ? true : false}
          />
        ))}
      </SlideContainer>
    </StyledHeroSlider>
  );
};
export default HeroSlider;
