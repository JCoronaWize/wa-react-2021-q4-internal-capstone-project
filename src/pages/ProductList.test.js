import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CartContext from "../context/CartContext";
import ProductList from "./ProductList"

describe('Product List Page tests', () => {

  test("Renders Product List correctly", async () => {
    const message = 1;
    expect(message).toBe(1)
    render(
      <CartContext>
          <BrowserRouter>
            <ProductList></ProductList>    
          </BrowserRouter>
      </CartContext>
    );
    const theHome = await screen.findAllByTitle("product-card-info")
    expect(theHome.length).not.toBe(0)
  });

  test("Sidebar rendering correctly", async () => {
    const message = 1;
    expect(message).toBe(1)
    render(
      <CartContext>
          <BrowserRouter>
            <ProductList></ProductList>    
          </BrowserRouter>
      </CartContext>
    );
    const theSidebar = await screen.findAllByTitle("sidebar-filter-el")
    expect(theSidebar.length).not.toBe(0)
  });

})