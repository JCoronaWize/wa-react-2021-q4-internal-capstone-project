import { useState } from "react/cjs/react.development";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";
import GridContainer from "../components/GridContainer";
import { getCategoriesData, getFeaturedProductsData } from "../dataFetch";

export const StyledProductPage = styled.section`
  display: flex;
  flex-direction: row;
  @media only screen and (max-device-width: 850px){
    flex-direction: column;
  }
`;

export const StyledSidebar = styled.aside`
  height: 100%; /* Full-height: remove this if you want "auto" height */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  width: 0 0 300px;
  background-color: #111; /* Black */
  padding: 20px 0;
`;
export const SidebarLink = styled.a`
  display: flex;
  flex-direction: column;
  flex: 0 1 auto;
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
  
  export const StyledFilterChecked = styled(FaCheckCircle)`
    color: ${(props) => (props.checked === true ? "green" : "grey")};
    font-size: 1em;
    margin: auto.5em;
  `;
export const MainProductList = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 90vh;
`;

const categoriesInfo = getCategoriesData();
const productInfo = getFeaturedProductsData();
const ProductList = () => {
  const [filtProducts, setFiltProducts] = useState([]);
  const [appliedFilters, setAppliedFilters] = useState([]);
  const adjustFilter = (value) => {
    let filters = []
    if(appliedFilters.find((el) => el === value)){
      filters = appliedFilters.filter(el => el !== value)
      setAppliedFilters(filters)
    }else{
      filters = [...appliedFilters, value]
      setAppliedFilters(filters)
    }
    applyFilters(filters)
  }

  const applyFilters = (filters) => {
    let newList = productInfo;
    if (filters.length > 0){
      newList = productInfo.filter(el => (
        filters.find((filt) => {
          return filt.toLowerCase() === el.category_name.toLowerCase()}))
        )
    }
    setFiltProducts(newList)
  }


  return (
    <StyledProductPage>
      <StyledSidebar>
        {categoriesInfo.map((item, index) => (
          <SidebarLink key={index} onClick={() => {adjustFilter(item.name) }}>
            {appliedFilters.find((el) => el === item.name) ? (
              <StyledFilterChecked checked />
            ) : (
              <StyledFilterChecked />
            )}
            {item.name}
          </SidebarLink>
        ))}
      </StyledSidebar>
      <MainProductList>
        <h1>This is the product List 🛍️</h1>
        <GridContainer productInfo={filtProducts}></GridContainer>
      </MainProductList>
    </StyledProductPage>
  );
};

export default ProductList;
