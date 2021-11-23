import styled from "styled-components";
export const StyledSlide = styled.div`
  display: ${(props) => (props.active ? "flex" : "none")};
  height: inherit;
  background-image: url(${(props) => `${props.src}`});
  background-repeat: no-repeat;
  background-size: cover;
  align-items: flex-end;
`;
export const SlideDescription = styled.p`
  margin: 0;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 2em;
  font-size: 1.5em;
  min-height: 3em;
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
`;