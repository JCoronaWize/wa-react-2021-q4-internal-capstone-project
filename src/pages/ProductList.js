import { useEffect, useState } from "react";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";
import GridContainer from "../components/GridContainer";
import { useCategoriesList, useProducts } from "../dataFetch";
import { useLocation, useNavigate } from "react-router-dom";
import SimpleButton from "../components/StyledButton";

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

const ProductList = (props) => {
  const locationPath = useLocation().pathname;
  const locationQuery = useLocation().search;
  const navigate = useNavigate();
  const bfilters = new URLSearchParams(decodeURIComponent(locationQuery)).get(
    "category"
  );
  const bsearch = new URLSearchParams(decodeURIComponent(locationQuery)).get(
    "search"
  );
  const bfiltersArray =
    bfilters && bfilters.length > 0 ? bfilters.split(",") : [];
  // console.log(bfilters);
  // console.log("make the search", bsearch);
  // console.log(bfiltersArray);

  // const [filtProducts, setFiltProducts] = useState([]);
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
    console.clear();
    // console.log("newValue", value);
    // console.log("currFilters", appliedFilters);
    let filters = [...appliedFilters];
    if (appliedFilters.find((el) => value.find((slugEl) => el === slugEl))) {
      value.map((slugEl) => (filters = filters.filter((el) => el !== slugEl)));
      setAppliedFilters(filters);
      // console.log("REMOVEE FILTER", filters);
    } else {
      filters = [...appliedFilters, ...value];
      setAppliedFilters(filters);
      // console.log("ADD TO FILTERS", filters);
    }
    applyFilters(filters);
  };

  const applyFilters = (filters) => {
    let searchParam = "";
    let uriCat = filters.length > 0 ? `category=${filters.toString()}` : ``;
    let uriSearch = bsearch ? `search=${`hello`}` : ``;

    searchParam = uriCat !== "" && uriSearch !== "" ? `${uriCat}&` : uriCat;
    searchParam = `${searchParam}${uriSearch}`;
    navigate(`${locationPath}?${searchParam}`);
  };

  const removeAllFilters = () => {
    console.log('REMOVE THE FILTERS NOW')
    setAppliedFilters([])
    applyFilters([])
  }

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
          {/* ADAPT ELEMENTS TO BE TO BOOLEAN, ADD LINK TO THE CHECKED LOGIC TO CHANGE COLOR */}
          {categoriesLoading && <div>...Loading Cat</div>}
          {!categoriesLoading && !categoriesError && (
            <>
              {/* {JSON.stringify(categoriesData[0])} */}
              {categoriesData.map((item, index) => (
                <SidebarLink
                  key={index}
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
            {appliedFilters.length > 0 && <SimpleButton clickAction={() => {removeAllFilters()}}>Clear filters</SimpleButton>}
        </StyledSidebar>
        <MainProductList>
          {productsLoading && <div>...Loading Products</div>}
          {!productsLoading && !productsError && (
            <>
              {/* {console.log("filtro prodcutos", productsData)} */}
              {/* <div>{JSON.stringify(test)}</div> */}
              <GridContainer
                pagination
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
