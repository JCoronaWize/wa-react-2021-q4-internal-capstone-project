import { SlideDescription, StyledSlide } from "./Slide.style";

const Slide = ({ active, srcImg, altText, description }) => {
  return (
    <StyledSlide src={srcImg} active={active} altText>
      <SlideDescription>{description}</SlideDescription>
    </StyledSlide>
  );
};
export default Slide;
