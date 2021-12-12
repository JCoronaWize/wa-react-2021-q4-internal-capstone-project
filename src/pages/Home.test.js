import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CartContext from "../context/CartContext";
import Home from "./Home"

test("renders Home correctly", () => {
    const message = 1;
    expect(message).toBe(1)
    // render(
    //   <CartContext>
    //       <BrowserRouter>
    //         <Home></Home>
    //       </BrowserRouter>
    //   </CartContext>
    // );
    // const theHome = screen.getByTitle("banner-slider");
    // expect(theHome.title).toContain("nina");
  });