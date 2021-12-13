import { SlideDescription, StyledSlide } from "./Slide.style";

const Slide = ({ active, srcImg, altText, description }) => {
  return (
    <StyledSlide title="slide-el" src={srcImg} active={active} altText>
      <SlideDescription>{description}</SlideDescription>
    </StyledSlide>
  );
};
export default Slide;
