import styled from "styled-components"
export const CatCard = styled.div`
  display: flex;
  flex: 0 0 500px;
  border-radius: 2em;
  background-image: url(${(props) => `${props.src}`});
  background-repeat: no-repeat;
  background-size: cover;
  margin: 1em;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const CardText = styled.p`
  display: flex;
  flex: 0 0 auto;
  width: 100%;
  height: 2em;
  font-size: 1.2em;
  background-color: rgba(100, 122, 50, 0.8);
  justify-content: center;
  align-items: center;
`;