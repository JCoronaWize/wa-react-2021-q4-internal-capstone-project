import Header from "./Header";
import Footer from "./Footer";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import SearchResults from "./pages/Search";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
`;

const Content = () => {
  return (
    <>
      <Header></Header>
      <StyledMain>
        <Routes>
        <Route path="/products" element={<ProductList></ProductList>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
          <Route
            path="/search"
            element={<SearchResults></SearchResults>}
          ></Route>
          <Route
            path="/product/:productId"
            element={<ProductDetail></ProductDetail>}
          ></Route>
          {/* <Route path="/products?:category" element={<ProductList></ProductList>}></Route> */}
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
        </Routes>
      </StyledMain>
      <Footer></Footer>
    </>
  );
};

export default Content;
