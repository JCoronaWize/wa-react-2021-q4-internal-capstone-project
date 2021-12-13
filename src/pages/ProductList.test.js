import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import GridContainer from "../components/GridContainer";
import CartContext from "../context/CartContext";
import ProductList from "./ProductList";
import productData from "../mocks/en-us/products.json";
import { createBrowserHistory } from "history";
import App from "../App";

const mockProducts = productData.results.map((item, index) => ({
  name: item.data.name ? item.data.name : "",
  tags: item.tags ? item.tags : [],
  stock: item.data.stock ? item.data.stock : "",
  short_desc: item.data.short_description ? item.data.short_description : "",
  id: item.id ? item.id : "",
  price: item.data.price ? item.data.price : "",
  category_name: item.data.category.slug ? item.data.category.slug : "",
  category_id: item.data.category.id ? item.data.category.id : "",
  img_src: item.data.mainimage.url ? item.data.mainimage.url : "",
  img_alt: item.data.mainimage.alt ? item.data.mainimage.alt : `Image ${index}`,
}));

describe("Product List Page tests", () => {
  test("Product Category rendering correctly", async () => {
    render(
      <CartContext>
          <BrowserRouter>
            <ProductList></ProductList>
          </BrowserRouter>
        </CartContext>
      );
      const theSidebar = await screen.findAllByTitle(
        "sidebar-filter-el-name",
        undefined,
        { timeout: 1500 }
        );
        expect(theSidebar.length).not.toBe(0);

        let filterTestBtn = theSidebar.find(el => el.innerHTML === 'Decorate');
        // console.log(filterTestBtn)
        fireEvent.click(filterTestBtn)

        const cardsResult = await screen.findAllByTitle("card-category-tag")
        const cardsInCategory = cardsResult.filter(el => el.innerHTML === 'decorate')  
        expect(cardsResult.length).toBeLessThanOrEqual(12)
        expect(cardsResult.length).toBe(cardsInCategory.length)    


      });
      
  test("Renders Product List correctly based on filter", async () => {
    const history = createBrowserHistory();
    history.push("/products");    
    render(
      <CartContext>
        <BrowserRouter history={history}>
          <App></App>
        </BrowserRouter>
      </CartContext>
    );
    const theHome = await screen.findAllByTitle(
      "product-card-info",
      undefined,
      { timeout: 2000 }
    );

    expect(theHome.length).not.toBe(0);
  });

  test("Pagination control generates correctly", async () => {
    // mockProducts length 29    
    const numPerPage = 12;
    render(
      <CartContext>
        <BrowserRouter>
          <GridContainer
            pagination={numPerPage}
            productInfo={mockProducts}
            theTitle="Product List"
          ></GridContainer>
        </BrowserRouter>
      </CartContext>
    );

    const pagesControl = await screen.findAllByTitle("pageController");
    expect(pagesControl.length).toBe(3);
  });

  test("Prev Button should be Disabled when on first page", () => {
    // mockProducts length: 29
    const numPerPage = 12;
    render(
      <CartContext>
        <BrowserRouter>
          <GridContainer
            pagination={numPerPage}
            productInfo={mockProducts}
            theTitle="Product List"
          ></GridContainer>
        </BrowserRouter>
      </CartContext>
    );
    const pagesControl = screen.getByTitle("previousPage");
    expect(pagesControl).toHaveAttribute("disabled");
  });

  test("Next button working as expected", () => {
    // mockProducts length 29    
    const numPerPage = 12;
    render(
      <CartContext>
        <BrowserRouter>
          <GridContainer
            pagination={numPerPage}
            productInfo={mockProducts}
            theTitle="Product List"
          ></GridContainer>
        </BrowserRouter>
      </CartContext>
    );
    const pageControlNext = screen.getByTitle("nextPage");
    fireEvent.click(pageControlNext);
    const pageControlNumber = screen.getByText("2");
    const pagesControlPrevious = screen.getByTitle("previousPage");
    expect(pageControlNumber).toHaveAttribute("disabled");
    expect(pagesControlPrevious).not.toHaveAttribute("disabled");
  });

  test("Prev button working as expected", () => {
    // mockProducts length 29
    const numPerPage = 12;
    render(
      <CartContext>
        <BrowserRouter>
          <GridContainer
            pagination={numPerPage}
            productInfo={mockProducts}
            theTitle="Product List"
          ></GridContainer>
        </BrowserRouter>
      </CartContext>
    );
    const pagesControlPrevious = screen.getByTitle("previousPage");
    const pageControlNumberTwo = screen.getByText("2");
    const pageControlNumberThree = screen.getByText("3");

    expect(pagesControlPrevious).toHaveAttribute("disabled");
    
    fireEvent.click(pageControlNumberThree);
    expect(pagesControlPrevious).not.toHaveAttribute("disabled");

    fireEvent.click(pagesControlPrevious);
    expect(pageControlNumberTwo).toHaveAttribute("disabled");
  });

  test("Next button disabled when user is on last page", () => {
    // mockProducts length 29
    const numPerPage = 12;
    render(
      <CartContext>
        <BrowserRouter>
          <GridContainer
            pagination={numPerPage}
            productInfo={mockProducts}
            theTitle="Product List"
          ></GridContainer>
        </BrowserRouter>
      </CartContext>
    );
    const pageControlNext = screen.getByTitle("nextPage");
    const pageControlNumberThree = screen.getByText("3");

    expect(pageControlNext).not.toHaveAttribute("disabled");
    
    fireEvent.click(pageControlNumberThree);
    expect(pageControlNext).toHaveAttribute("disabled");
  });


});
