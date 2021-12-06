import styled from "styled-components";
import { CartState } from "../context/CartContext";
import { AiFillDelete } from "react-icons/ai";

const StyledButton = styled.button`
  display: flex;
  /* align-self: flex-start; */
  color: white;
  font-weight: 700;
  border: none;
  background-color: rgba(163, 0, 0, 1);
  text-transform: uppercase;
  margin: 1em 0;
  max-width: 350px;
  padding: 0.8em 1.2em;
  font-size: .9em;
  border-radius: 0.4em;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: rgba(163, 0, 0, 0.8);
  }

  :disabled {
    background-color: lightgray;
    color: gray;
    cursor: auto;
  }
`;

const DeleteIcon = styled(AiFillDelete)`
  font-size: 1.2em;
`;
const RemoveCartButton = ({ theProductId }) => {
  const { dispatch } = CartState();
  return (
    <>
      <StyledButton
        onClick={() => {
          dispatch({
            type: "REMOVE_PRODUCT",
            payload: theProductId,
          });
        }}
      >
        <DeleteIcon></DeleteIcon>
      </StyledButton>
    </>
  );
};

export default RemoveCartButton;
