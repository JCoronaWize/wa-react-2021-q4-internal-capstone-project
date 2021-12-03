import styled from "styled-components";
export const StyleProductCard = styled.div`
  text-decoration: none;
  color: white;
  display: flex;
  flex-direction: column;
  margin: 0.6em;
  padding: 1em;
  max-width: 220px;
  background-color: rgb(255, 255, 255);
  border: solid 1px gray;
  border-radius: 1em;
  justify-content: flex-start;
  align-items: center;
`;
export const StyleProductCardImage = styled.div`
  text-decoration: none;
  color: white;
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
  letter-spacing: normal;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  color: #3a3a3a;
  /* padding: 0.2em; */
  font-size: 1.2em;
  font-kerning: 1;
  max-height: 40%;
  width: 100%;
`;

export const TextCat = styled.p`
  margin: 0;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  color: #eeeeee;
  text-decoration: none;
  padding: 0.4em 0.8em;
  font-size: 1em;
  max-height: 1.2em;
  background-color: rgba(93, 110, 76, 0.8);
  border-radius: 0.4em;
`;
