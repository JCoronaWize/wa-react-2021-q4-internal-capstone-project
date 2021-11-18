import styled from "styled-components";
import { FaArrowCircleLeft } from "react-icons/fa";
export const StyledHeroSlider = styled.div`
  height: 32em;
  background-color: #6d0b9d;
  color: white;
`;
export const SlideContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;
export const ArrowNav = styled(FaArrowCircleLeft)`
  color: rgba(100, 122, 50, 0.8);
  z-index: 1000;
  position: absolute;
  cursor: pointer;
  font-size: 5em;
  bottom: 50%;
  right: ${(props) => (props.direction === "right" ? "0.2em" : "unset")};
  transform: ${(props) =>
    props.direction === "right" ? "rotate(180deg)" : "none"};
  left: ${(props) => (props.direction === "left" ? "0.2em" : "unset")};
  &:hover {
    color: rgba(100, 122, 50, 1);
  }
`;
