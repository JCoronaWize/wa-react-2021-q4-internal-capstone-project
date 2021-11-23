import { useEffect, useState } from "react";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";
import GridContainer from "../components/GridContainer";
import { getCategoriesData, getFeaturedProductsData } from "../dataFetch";

export const StyledProductPage = styled.section`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 850px) {
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
  padding: 0.4em 0;
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

export const StyledLoader = styled.div`
  display: block;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.4);

  div.spin {
    display: block;
    position: absolute;
    top: 50vh;
    left: 50vw;
    width: 100px;
    height: 100px;
    background-color: #9cb053;
    animation-name: spin;
    animation-duration: 6000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`;

const categoriesInfo = getCategoriesData();
const productInfo = getFeaturedProductsData();
const ProductList = () => {
  const [filtProducts, setFiltProducts] = useState(productInfo);
  const [appliedFilters, setAppliedFilters] = useState([]);
  const [displayLoader, setDisplayLoader] = useState(false);
  const adjustFilter = (value) => {
    let filters = [];
    if (appliedFilters.find((el) => el === value)) {
      filters = appliedFilters.filter((el) => el !== value);
      setAppliedFilters(filters);
    } else {
      filters = [...appliedFilters, value];
      setAppliedFilters(filters);
    }
    applyFilters(filters);
  };

  const applyFilters = (filters) => {
    let newList = [...productInfo];
    if (filters.length > 0) {
      newList = productInfo.filter((el) =>
        filters.find((filt) => {
          return filt.toLowerCase() === el.category_name.toLowerCase();
        })
      );
    }
    setFiltProducts(newList);
  };

  useEffect(() => {
    setDisplayLoader(true);
    setTimeout(() => {
      setDisplayLoader(false);
    }, 2000);
  }, []);

  return (
    <>
      {displayLoader && (
        <StyledLoader>
          <div className="spin"></div>
        </StyledLoader>
      )}
      <StyledProductPage>
        <StyledSidebar>
          <h3>Filter:</h3>
          {/* ADAPT ELEMENTS TO BE TO BOOLEAN, ADD LINK TO THE CHECKED LOGIC TO CHANGE COLOR */}
          {categoriesInfo.map((item, index) => (
            <SidebarLink
              key={index}
              onClick={() => {
                adjustFilter(item.name);
              }}
            >
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
          <h1>Product List 🛍️</h1>
          <GridContainer productInfo={filtProducts}></GridContainer>
        </MainProductList>
      </StyledProductPage>
    </>
  );
};

export default ProductList;
