import { useEffect, useState } from "react";
import GridContainer from "../components/GridContainer";
import { useProductSearch } from "../dataFetch";
import { useLocation } from "react-router-dom";
import {
  StyledLoader,
  StyledProductPage,
  MainProductList,
} from "./ProductList.styles";

const SearchResults = (props) => {
  const locationQuery = useLocation().search;

  const bsearch = new URLSearchParams(decodeURIComponent(locationQuery)).get(
    "q"
  );
  const [displayLoader, setDisplayLoader] = useState(false);
  const {
    data: productsData,
    isLoading: productsLoading,
    error: productsError,
  } = useProductSearch(bsearch);

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
        <MainProductList>
          {productsLoading && <div>...Loading Products</div>}
          {!productsLoading && !productsError && (
            <>
              <GridContainer
                pagination={20}
                productInfo={productsData}
                theTitle="Search Results"
                showShortDesc
              ></GridContainer>
            </>
          )}
        </MainProductList>
      </StyledProductPage>
    </>
  );
};

export default SearchResults;
