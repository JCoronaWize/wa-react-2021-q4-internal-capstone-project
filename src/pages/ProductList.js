import { useState } from "react/cjs/react.development";
import styled from "styled-components";
import GridContainer from "../components/GridContainer";
import { getCategoriesData, getFeaturedProductsData } from "../dataFetch";

export const StyledProductPage = styled.section`
  display: flex;
  flex-direction: row;
`;

export const StyledSidebar = styled.aside`
  height: 100%; /* Full-height: remove this if you want "auto" height */
  display: flex;
  flex-direction: column;
  flex: 0 1 300px;
  background-color: #111; /* Black */
  padding: 20px 0;
`;
export const SidebarLink = styled.a`
  display: flex;
  flex-direction: column;
  flex: 1 0 80%;
  padding: 6px 8px 6px 16px;
  cursor: pointer;
  text-decoration: none;
  font-size: 1em;
  color: #818181;
  display: block;
  :hover {
    color: #f1f1f1;
  }
`;
export const MainProductList = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 90vh;
`;
const categoriesInfo = getCategoriesData();
const productInfo = getFeaturedProductsData() ;
const ProductList = () => {

  const [filtProducts, setFiltProducts] = useState(productInfo)
  const [appliedFilters, setAppliedFilters] = useState([])

  



  return (
    <StyledProductPage>
      <StyledSidebar>
        {categoriesInfo.map((item) => 
        <SidebarLink>{ 1 ? <span>❎</span> :  <span>⬜</span>}{item.name}</SidebarLink>)}
      </StyledSidebar>
      <MainProductList>
        <h1>This is the product List 🛍️</h1>
        <GridContainer productInfo={filtProducts} ></GridContainer>
      </MainProductList>
    </StyledProductPage>
  );
};

export default ProductList;
