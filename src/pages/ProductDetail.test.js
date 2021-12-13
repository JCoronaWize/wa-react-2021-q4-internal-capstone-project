import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import App from "../App";
import CartContext from "../context/CartContext";
import productData from "../mocks/en-us/products.json";
import { SingleProductInfo } from "./ProductDetail";

// const productDataSingle = productData.results[0];
const mockProducts = productData.results.map((item, index) => ({
  name: item.data.name ? item.data.name : "",
  tags: item.tags ? item.tags : [],
  stock: item.data.stock ? item.data.stock : "",
  specs: item.data.specs ? item.data.specs : "",
  images: item.data.images ? item.data.images : "",
  sku: item.data.sku ? item.data.sku : "",
  description: item.data.description[0].text
    ? item.data.description[0].text
    : "",
  id: item.id ? item.id : "",
  price: item.data.price ? item.data.price : "",
  category_name: item.data.category.slug ? item.data.category.slug : "",
  category_id: item.data.category.id ? item.data.category.id : "",
  img_src: item.data.mainimage.url ? item.data.mainimage.url : "",
  img_alt: item.data.mainimage.alt ? item.data.mainimage.alt : `Image ${index}`,
}));

describe("Product Detail page tests", () => {
  test("Product Page Fetch and Renders information", async () => {
    const history = createBrowserHistory();
    const mockProductId = "YWL8XBIAAC0AzuPZ"; // Id example in products.json
    history.push(`/product/${mockProductId}`);
    render(
      <CartContext>
        <BrowserRouter history={history}>
          <App></App>
        </BrowserRouter>
      </CartContext>
    );
    const theProductPrice = await screen.findByTitle(
      "productPrice",
      undefined,
      { timeout: 2000 }
    );
    const theSKU = await screen.findByTitle("productSKU", undefined, {
      timeout: 2000,
    });
    expect(theProductPrice.innerHTML).toContain("$");
    expect(theSKU.innerHTML).toContain("SKU");
  });

  test("Product Deatail page contains: Name, Price, SKU, Category Name, Tags and Description", () => {
    render(
      <CartContext>
        <SingleProductInfo productData={mockProducts}></SingleProductInfo>
      </CartContext>
    );
    const theName = screen.getByTitle("productName");
    const thePrice = screen.getByTitle("productPrice");
    const theSKU = screen.getByTitle("productSKU");
    const theCategory = screen.getByTitle("productCategory");
    const theTags = screen.getByTitle("productTags");
    const theDescription = screen.getByTitle("productDescription");

    expect(theName.innerHTML).not.toBe("");
    expect(thePrice.innerHTML).toContain("$");
    expect(theSKU.innerHTML).toContain("SKU");
    expect(theCategory.innerHTML).toContain("Category");
    expect(theTags.innerHTML).toContain("Tags");
    expect(theDescription.innerHTML).toContain("Description");
  });

  test("Page has quantity selector and add to cart button", () => {
    render(
      <CartContext>
        <SingleProductInfo productData={mockProducts}></SingleProductInfo>
      </CartContext>
    );
    const addToCartButton = screen.getByText("ADD TO CART");
    fireEvent.click(addToCartButton);
    // const quantitySelector = screen.getByTitle("quantitySelector");
    // console.log("cuantos elementos tiene?", quantitySelector.children.length);
  });

  test("Product added to cart correctly", async () => {
    const history = createBrowserHistory();
    const mockProductId = "YWL8XBIAAC0AzuPZ"; // Id example in products.json
    history.push(`/product/${mockProductId}`);
    render(
      <CartContext>
        <BrowserRouter history={history}>
          <App></App>
        </BrowserRouter>
      </CartContext>
    );
    const cartQuantity = screen.getByTestId("cartQuantityBar");
    let firstCartValue = parseInt(cartQuantity.innerHTML);

    const addToCartButton = await screen.findByText("ADD TO CART", undefined, {
      timeout: 2000,
    });
    fireEvent.click(addToCartButton);
    let secondValue = parseInt(cartQuantity.innerHTML);
    expect(secondValue).toBe(firstCartValue + 1);
  });

  test("Disable ADD CART button when there are no more units available", () => {
    render(
      <CartContext>
        <SingleProductInfo productData={mockProducts}></SingleProductInfo>
      </CartContext>
    );
    const addToCartButton = screen.getByText("ADD TO CART");
    expect(addToCartButton).not.toHaveAttribute("disabled");
    fireEvent.click(addToCartButton);
    const quantitySelector = screen.getByTitle("quantitySelector");
    const availableItems = quantitySelector.children.length;
    for (let index = 0; index < availableItems; index++) {
      fireEvent.click(addToCartButton);
    }
    expect(addToCartButton).toHaveAttribute("disabled");
  });
});
// YZZ-ThIAAC4AvmNn
