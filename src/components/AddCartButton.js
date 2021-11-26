import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  align-self: flex-start;
  color: white;
  font-weight: 700;
  border: none;
  background-color: rgba(80, 80, 80, 1);
  text-transform: uppercase;
  margin: 1em 0;
  max-width: 350px;
  padding: 1em;
  font-size: .8em;
  border-radius: 0.4em;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: rgba(80, 80, 80, 0.8);
  }
`;

const AddCartButton = ({ children, to }) => {
  return <StyledButton>ADD TO CART</StyledButton>;
};

export default AddCartButton;
