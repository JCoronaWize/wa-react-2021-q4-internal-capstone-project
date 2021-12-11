// import { useLocation } from "react-router-dom";

// import { Link } from "react-router-dom";
import styled from "styled-components";
import CartSummary, { Main, MainContainer } from "../components/CartSummary";
import MainButton from "../components/MainButton";

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 1.2em;
  border: solid 1px black;
  border-radius: 0.3em;
`;

export const StyledField = styled.div`
  font-size: 1em;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 350px;
  margin: 0.3em 0.5em;
`;

export const StyledLabel = styled.label`
  display: flex;
  text-align: left;
  font-size: 0.8em;
`;

export const StyledInput = styled.input`
  display: flex;
  font-size: 0.8em;
  padding: 0.2em;
`;

export const StyledTextArea = styled.input`
  display: flex;
  font-size: 0.8em;
  padding: 0.2em;
`;

const Checkout = () => {
  return (
    <>
      <Main>
        <MainContainer>
          <h2>Checkout</h2>
          <h2>Customer Information</h2>
          <StyledForm action="">
            <StyledField>
              <StyledLabel htmlFor="customerName">Name:</StyledLabel>
              <StyledInput name="customerName" type="text" />
            </StyledField>

            <StyledField>
              <StyledLabel htmlFor="customerEmail">Email:</StyledLabel>
              <StyledInput name="customerEmail" type="text" />
            </StyledField>
            <StyledField>
              <StyledLabel htmlFor="zip">ZIP code:</StyledLabel>
              <StyledInput name="zip" type="text" />
            </StyledField>

            <StyledField>
              <StyledLabel htmlFor="orderNotes">Order Notes</StyledLabel>
              <StyledTextArea name="orderNotes"></StyledTextArea>
            </StyledField>
          </StyledForm>
        </MainContainer>
      </Main>
      <h2>Order Summary</h2>
      <CartSummary></CartSummary>
      <MainButton to="/cart">Back to Cart</MainButton>
      <MainButton bgColor="#94B054" to="./">
        Place Order
      </MainButton>
    </>
  );
};
export default Checkout;
