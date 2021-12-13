import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CartContext from "../context/CartContext";
import Home from "./Home";

// import { rest } from "msw";
// import { setupServer } from "msw/node";
// import { API_BASE_URL } from "../utils/constants";
// import bannerData from "../mocks/en-us/featured-banners.json"
// import { useLatestAPI } from "../utils/hooks/useLatestAPI";

// const bannerUrl = `${API_BASE_URL}/documents/search?ref=${``}&q=${encodeURIComponent(
//   '[[at(document.type, "banner")]]'
// )}&lang=en-us&pageSize=5`;
// const bannerUrl = `${API_BASE_URL}`;
// const bannerResponse = rest.get(API_BASE_URL, (req, res, ctx) => {
//   return res(ctx.json({ data: bannerData, isLoading: false, error: "" }));
// });

// const categoriesUrl = `${API_BASE_URL}/documents/search?ref=${``}&q=${encodeURIComponent(
//   '[[at(document.type, "category")]]'
// )}&lang=en-us&pageSize=5`;
// const categoriesResponse = rest.get(categoriesUrl, (req, res, ctx) => {
//   return res(ctx.json([]));
// });


// const handlers = [bannerResponse];

// const server = new setupServer(...handlers);

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

describe("Home page tests", () => {
  test("renders Banner correctly", async () => {
    render(
      <CartContext>
        <BrowserRouter>
          <Home></Home>
        </BrowserRouter>
      </CartContext>
    );
    const theBanner = await screen.findAllByTitle("banner-slider", undefined, {timeout: 2000});
    expect(theBanner.length).toBe(1);        
  });
  test("renders Carrousel correctly", async () => {
    render(
      <CartContext>
        <BrowserRouter>
          <Home></Home>
        </BrowserRouter>
      </CartContext>
    );
    const theCarrousel = await screen.findAllByTitle("carrousel", undefined, {timeout: 2000});
    expect(theCarrousel.length).toBe(1);          
  });

  test("renders Feature Prodcucts correctly", async () => {
    render(
      <CartContext>
        <BrowserRouter>
          <Home></Home>
        </BrowserRouter>
      </CartContext>
    );
    const theCarrousel = await screen.findByText("Featured Products", undefined, {timeout: 2000});
    expect(theCarrousel).toBeTruthy();          
  }); 

});
