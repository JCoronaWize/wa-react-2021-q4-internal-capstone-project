import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CartContext from "./context/CartContext";
import App from "./App";

test("renders Academy React Bootcamp Footer", () => {
  render(
    <CartContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </CartContext>
  );
  const linkElement = screen.getByText(/Academy React Bootcamp/i);
  expect(linkElement).toBeInTheDocument();
});
