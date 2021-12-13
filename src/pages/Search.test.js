import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import App from "../App";
import CartContext from "../context/CartContext";

describe("Search Results Page tests", () => {
    test("Validate results based on search term", async () => {
        const keyword = "disney";
        const history = createBrowserHistory();
        history.push(`/search?q=${keyword}`);
        render(
          <CartContext>
            <BrowserRouter history={history}>
              <App></App>
            </BrowserRouter>
          </CartContext>
        );
        const searchResults = await screen.findAllByTitle("product-card-info", undefined, {
            timeout: 2000,
          });
        searchResults.forEach(result => {
            expect(result.querySelector("[title='product-name']").innerHTML.toLowerCase()).toContain(keyword);        
        });
      });

      test("Validate empty State is displayed when there are no results for search term provided", async () => {
        const keyword = "food random words no results";
        const history = createBrowserHistory();
        history.push(`/search?q=${keyword}`);
        render(
          <CartContext>
            <BrowserRouter history={history}>
              <App></App>
            </BrowserRouter>
          </CartContext>
        );
        const searchResults = await screen.findByText(/no results/i, undefined, {
            timeout: 2000,
          });
            expect(searchResults).toBeTruthy();     
      });

});
