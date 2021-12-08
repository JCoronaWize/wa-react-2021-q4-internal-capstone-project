import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CartContext from "./context/CartContext";
import Header from "./Header";

test("renders logo correctly in Header", () => {
  render(
    <CartContext>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </CartContext>
  );
  const theLogo = screen.getByAltText("logo");
  expect(theLogo.src).toContain("the-logo.png");
});
