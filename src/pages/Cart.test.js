import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import App from "../App";
import CartContext from "../context/CartContext";
// import productData from "../mocks/en-us/products.json";
// import Cart from "./Cart";

// Tried to use a test Context but couldnt make it work correctly
// const customRenderer = (ui, { providerProps, ...renderOptions }) => {
//   return render(
//     <CartContext {...providerProps}>{ui}</CartContext>,
//     renderOptions
//   );
// };

describe("Shopping Cart Page tests", () => {
  test("Display empty when cart has no items", () => {
    const history = createBrowserHistory();
    history.push("/cart");
    render(
      <CartContext>
        <BrowserRouter history={history}>
          <App></App>
        </BrowserRouter>
      </CartContext>
    );
    const cartQuantity = screen.getByTestId("cartQuantityBar");
    expect(parseInt(cartQuantity.innerHTML)).toBe(0);
    const emptyCartMessage = screen.getByTestId("alertEmptyCart");
    expect(emptyCartMessage.innerHTML).toContain("cart is empty");
  });

  test("When cart has products each displays; Image, Name, Price, Quantity Selector, Subtotal and Remove from Cart Button", async () => {
    // Add a product and the theh navigate to cart
    const history = createBrowserHistory();
    const mockProductId = "YWL8XBIAAC0AzuPZ"; // Id example in products.json. Curr Price = 1834.57
    history.push(`/product/${mockProductId}`);
    // const history = createBrowserHistory();
    // history.push("/cart");
    render(
      <CartContext>
        <BrowserRouter history={history}>
          <App></App>
        </BrowserRouter>
      </CartContext>
    );
    const addToCartButton = await screen.findByText("ADD TO CART", undefined, {
      timeout: 2000,
    });
    const cartButton = screen.getByTestId("cartButton");

    fireEvent.click(addToCartButton);
    fireEvent.click(addToCartButton);
    fireEvent.click(cartButton);

    const theCartTable = await screen.findByTestId("cart-summary-tb-body");

    //   expect(parseInt(cartQuantity.innerHTML)).toBe(0);
    expect(theCartTable.children.length).toBeGreaterThan(0);
    expect(screen.getAllByTitle("rowProductImage").length).toBe(
      theCartTable.children.length
    );
    expect(screen.getAllByTitle("rowProductName").length).toBe(
      theCartTable.children.length
    );
    expect(screen.getAllByTitle("rowProductPrice").length).toBe(
      theCartTable.children.length
    );
    expect(screen.getAllByTitle("quantitySelector").length).toBe(
      theCartTable.children.length
    );
    expect(screen.getAllByTitle("removeFromCartBtn").length).toBe(
      theCartTable.children.length
    );
    expect(screen.getAllByTitle("rowProductSubtotal").length).toBe(
      theCartTable.children.length
    );
  });

  test("Total display sum of subtotals correctly", async () => {
    // Add a product and the theh navigate to cart
    const history = createBrowserHistory();
    const mockProductId = "YWL44xIAACoAztQQ"; // Id example in products.json. Curr Price = 1834.57
    history.push(`/product/${mockProductId}`);
    // const history = createBrowserHistory();
    // history.push("/cart");
    render(
      <CartContext>
        <BrowserRouter history={history}>
          <App></App>
        </BrowserRouter>
      </CartContext>
    );
    const addToCartButton = await screen.findByText("ADD TO CART", undefined, {
      timeout: 2000,
    });
    const cartButton = screen.getByTestId("cartButton");

    fireEvent.click(addToCartButton);
    fireEvent.click(addToCartButton);
    fireEvent.click(cartButton);

    const theCartTable = await screen.findByTestId("cart-summary-tb-body");
    const theSubtotals = screen.getAllByTitle("rowProductSubtotal");

    let calcTotal = 0;
    theSubtotals.forEach((element) => {
      calcTotal += element.innerHTML;
    });
    calcTotal = theSubtotals.reduce((count, curItem) => {
      return parseFloat(count) + parseFloat(curItem.innerHTML);
    }, 0);
    // console.log("The calculated result", calcTotal)

    //   expect(parseInt(cartQuantity.innerHTML)).toBe(0);
    expect(theCartTable.children.length).toBeGreaterThan(0);
    expect(parseFloat(screen.getByTestId("cart-total").innerHTML)).toBe(
      parseFloat(calcTotal)
    );
  });

  test("Allow to increase product quantity, and not exceed stock", async () => {
    // Add a product and the theh navigate to cart
    const history = createBrowserHistory();
    const mockProductId = "YWL44xIAACoAztQQ"; // Id example in products.json. Stock 6
    history.push(`/product/${mockProductId}`);
    // const history = createBrowserHistory();
    // history.push("/cart");
    render(
      <CartContext>
        <BrowserRouter history={history}>
          <App></App>
        </BrowserRouter>
      </CartContext>
    );
    const addToCartButton = await screen.findByText("ADD TO CART", undefined, {
      timeout: 2000,
    });
    const cartButton = screen.getByTestId("cartButton");

    fireEvent.click(addToCartButton);
    fireEvent.click(cartButton);

    const cartQuantity = screen.getByTestId("cartQuantityBar");
    const cartAddCartButton = screen.getByText("ADD TO CART");
    const quantitySelector = screen.getByTitle("quantitySelector");
    const availableItems = quantitySelector.children.length;
    for (let index = 0; index <= availableItems; index++) {
      fireEvent.click(cartAddCartButton);
    }
    expect(cartAddCartButton).toHaveAttribute("disabled");
    expect(parseInt(cartQuantity.innerHTML)).toBe(
      quantitySelector.children.length
    );
  });


  test("Validate product is remove from cart after clicking on the remove from cart button", async () => {
    // Add a product and the theh navigate to cart
    const history = createBrowserHistory();
    const mockProductId = "YWL44xIAACoAztQQ"; // Id example in products.json. Stock 6
    history.push(`/product/${mockProductId}`);
    // const history = createBrowserHistory();
    // history.push("/cart");
    render(
      <CartContext>
        <BrowserRouter history={history}>
          <App></App>
        </BrowserRouter>
      </CartContext>
    );
    const addToCartButton = await screen.findByText("ADD TO CART", undefined, {
      timeout: 2000,
    });
    const cartButton = screen.getByTestId("cartButton");

    fireEvent.click(addToCartButton);
    fireEvent.click(addToCartButton);
    fireEvent.click(addToCartButton);

    fireEvent.click(cartButton);
    const cartQuantity = screen.getByTestId("cartQuantityBar");
    expect(parseInt(cartQuantity.innerHTML)).toBe(3)

    const removeFromCartBtn = screen.getByTitle("removeFromCartBtn");
    fireEvent.click(removeFromCartBtn);
 
    expect(parseInt(cartQuantity.innerHTML)).toBe(0)

  });




});





// const mockProducts = [];
// for (let index = 0; index < 2; index++) {
//   mockProducts.push({
//     name: productData.results[index].data.name
//       ? productData.results[index].data.name
//       : "",
//     tags: productData.results[index].tags
//       ? productData.results[index].tags
//       : [],
//     stock: productData.results[index].data.stock
//       ? productData.results[index].data.stock
//       : "",
//     specs: productData.results[index].data.specs
//       ? productData.results[index].data.specs
//       : "",
//     images: productData.results[index].data.images
//       ? productData.results[index].data.images
//       : "",
//     sku: productData.results[index].data.sku
//       ? productData.results[index].data.sku
//       : "",
//     description: productData.results[index].data.description[0].text
//       ? productData.results[index].data.description[0].text
//       : "",
//     id: productData.results[index].id ? productData.results[index].id : "",
//     price: productData.results[index].data.price
//       ? productData.results[index].data.price
//       : "",
//     category_name: productData.results[index].data.category.slug
//       ? productData.results[index].data.category.slug
//       : "",
//     category_id: productData.results[index].data.category.id
//       ? productData.results[index].data.category.id
//       : "",
//     img_src: productData.results[index].data.mainimage.url
//       ? productData.results[index].data.mainimage.url
//       : "",
//     img_alt: productData.results[index].data.mainimage.alt
//       ? productData.results[index].data.mainimage.alt
//       : `Image ${index}`,
//     cartQty: index + 2,
//   });
// }

// const testInitValue = {
//   cartProducts: mockProducts,
//   cartQuantity: 0,
// };
// localStorage.setItem("cart", JSON.stringify(testInitValue));

// const providerProps = {
//   state: testInitValue,
// };
