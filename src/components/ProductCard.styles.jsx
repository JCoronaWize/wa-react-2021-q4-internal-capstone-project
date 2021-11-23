import styled from "styled-components";
export const StyleProductCard = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${(props) => `${props.src}`});
  background-repeat: no-repeat;
  background-size: cover;
  margin: 1em;
  height: 200px;
  width: 200px;
  background-color: rgb(154, 154, 154);
  justify-content: space-between;
  align-items: flex-end;
`;
export const TextName = styled.p`
  margin: 0;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  color: #eeeeee;
  padding: 0.2em;
  font-size: 1.1em;
  max-height: 40%;
  width: 100%;
  background-color: rgba(100, 100, 120, 0.8);
`;

export const TextCat = styled.p`
  margin: 0;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  color: #eeeeee;
  padding: 0.2em;
  font-size: 1em;
  max-height: 1.2em;
  background-color: rgba(93, 110, 76, 0.8);
  border-radius: 0.4em;
`;
