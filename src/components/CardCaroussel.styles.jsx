import styled from "styled-components";
import { FaArrowCircleLeft } from "react-icons/fa";

export const Caroussel = styled.section`
  background-color: rgba(0, 0, 0, 0.1);
  color: white;
  height: 16em;
  padding: 1em 0;
`;
export const CarousselSlideContainer = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.1);
  color: white;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  width: 100%;
  height: 100%;
  align-items: center;
`;
export const ArrowNav = styled(FaArrowCircleLeft)`
  color: rgba(0, 0, 0, 0);
  z-index: 1000;
  position: absolute;
  cursor: pointer;
  font-size: 3em;
  top: 15em;
  right: ${(props) => (props.direction === "right" ? "0.2em" : "unset")};
  transform: ${(props) =>
    props.direction === "right" ? "rotate(180deg)" : "none"};
  left: ${(props) => (props.direction === "left" ? "0.2em" : "unset")};
  &:hover {
    color: rgba(0, 0, 0, 0.7);
  }
`;
