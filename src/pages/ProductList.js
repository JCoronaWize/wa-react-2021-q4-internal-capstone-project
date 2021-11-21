import { useState } from "react";
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  min-width: 20%;
  background-color: #515151;
  padding: 20px 0;
  color: white;
  padding: 1em;
`;
export const SidebarLink = styled.a`
  display: block;
  padding: .4em 0;
  cursor: pointer;
  text-decoration: none;
  font-size: 1em;
  color: #b3b3b3;
  :hover {
    color: #f1f1f1;
  }
  `;
  
  export const StyledFilterChecked = styled(FaCheckCircle)`
    color: ${(props) => (props.checked === true ? "#9CB053" : "grey")};
    font-size: 1em;
    margin: 0 1em;
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
    let newList  = productInfo.filter(el => (
        filters.find((filt) => {
          return filt.toLowerCase() === el.category_name.toLowerCase()}))
        )
    setFiltProducts(newList)
  }


  return (
    <StyledProductPage>
      <StyledSidebar>
        <h3>Filter:</h3>
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
