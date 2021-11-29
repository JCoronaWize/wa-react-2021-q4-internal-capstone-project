import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  /* align-self: flex-start; */
  color: white;
  font-weight: 700;
  border: none;
  /* background-color: rgba(148, 176, 83, 1); */
  background-color: rgb(190,190,190);
  text-transform: uppercase;
  margin: 1em 0;
  max-width: 350px;
  padding: 1em;
  font-size: 0.8em;
  border-radius: 0.4em;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: rgba(80, 80, 80, 0.8);
  }
`;

const SimpleButton = ({ children, to, clickAction }) => {
  return <StyledButton onClick={clickAction} >{children}</StyledButton>;
};

export default SimpleButton;
