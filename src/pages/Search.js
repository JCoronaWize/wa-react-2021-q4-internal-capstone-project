import { useEffect, useState } from "react";
import GridContainer from "../components/GridContainer";
import { useProductSearch } from "../dataFetch";
import { useLocation } from "react-router-dom";
import { StyledLoader, StyledProductPage, MainProductList } from "./ProductList";

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
              {/* {console.log("filtro prodcutos", productsData)} */}
              {/* <div>{JSON.stringify(test)}</div> */}
              <GridContainer
                pagination={20}
                productInfo={productsData}
                theTitle="Search Results"
              ></GridContainer>
            </>
          )}
        </MainProductList>
      </StyledProductPage>
    </>
  );
};

export default SearchResults;
