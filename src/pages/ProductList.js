import { useEffect, useState } from "react";
// import styled from "styled-components";
// import { FaCheckCircle } from "react-icons/fa";
import GridContainer from "../components/GridContainer";
import { useCategoriesList, useProducts } from "../dataFetch";
import { useLocation, useNavigate } from "react-router-dom";
import SimpleButton from "../components/StyledButton";

import { StyledLoader, StyledProductPage, StyledSidebar, SidebarLink, StyledFilterChecked, MainProductList } from "./ProductList.styles"

const ProductList = (props) => {
  const locationPath = useLocation().pathname;
  const locationQuery = useLocation().search;
  const navigate = useNavigate();
  const bfilters = new URLSearchParams(decodeURIComponent(locationQuery)).get(
    "category"
  );
  // const bsearch = new URLSearchParams(decodeURIComponent(locationQuery)).get(
  //   "search"
  // );
  const bfiltersArray =
    bfilters && bfilters.length > 0 ? bfilters.split(",") : [];
  const [appliedFilters, setAppliedFilters] = useState(
    bfiltersArray.length > 0 ? bfiltersArray : []
  );
  const [displayLoader, setDisplayLoader] = useState(false);
  const {
    data: categoriesData,
    isLoading: categoriesLoading,
    error: categoriesError,
  } = useCategoriesList();

  const {
    data: productsData,
    isLoading: productsLoading,
    error: productsError,
  } = useProducts(appliedFilters);

  const adjustFilter = (value) => {
    let filters = [...appliedFilters];
    if (appliedFilters.find((el) => value.find((slugEl) => el === slugEl))) {
      value.map((slugEl) => (filters = filters.filter((el) => el !== slugEl)));
      setAppliedFilters(filters);
    } else {
      filters = [...appliedFilters, ...value];
      setAppliedFilters(filters);
    }
    applyFilters(filters);
  };

  const applyFilters = (filters) => {
    let searchParam = "";
    let uriCat = filters.length > 0 ? `category=${filters.toString()}` : ``;
    // let uriSearch = bsearch ? `search=${bsearch}` : ``;

    searchParam = uriCat;
    // searchParam = `${searchParam}${uriSearch}`;
    navigate(`${locationPath}?${searchParam}`);
  };

  const removeAllFilters = () => {
    setAppliedFilters([]);
    applyFilters([]);
  };

  useEffect(() => {
    setDisplayLoader(true);
    setTimeout(() => {
      setDisplayLoader(false);
    }, 2000);
  }, [productsData]);

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
          {categoriesLoading && <div>...Loading Cat</div>}
          {!categoriesLoading && !categoriesError && (
            <>
              {categoriesData.map((item, index) => (
                <SidebarLink  title="sidebar-filter-el"
                  key={index}
                  highlightColor={Boolean(
                    appliedFilters.find((el) =>
                      item.slugs.find((slugEl) => el === slugEl)
                    )
                  )}
                  onClick={() => {
                    adjustFilter(item.slugs);
                  }}
                >
                  {appliedFilters.find((el) =>
                    item.slugs.find((slugEl) => el === slugEl)
                  ) ? (
                    <StyledFilterChecked checked />
                  ) : (
                    <StyledFilterChecked />
                  )}
                  {item.name}
                </SidebarLink>
              ))}
            </>
          )}
          {appliedFilters.length > 0 && (
            <SimpleButton
              clickAction={() => {
                removeAllFilters();
              }}
            >
              Clear filters
            </SimpleButton>
          )}
        </StyledSidebar>
        <MainProductList title="product-list">
          {productsLoading && <div>...Loading Products</div>}
          {!productsLoading && !productsError && (
            <>
              <GridContainer
                pagination={12}
                productInfo={productsData}
                theTitle="Product List"
              ></GridContainer>
            </>
          )}
        </MainProductList>
      </StyledProductPage>
    </>
  );
};

export default ProductList;
