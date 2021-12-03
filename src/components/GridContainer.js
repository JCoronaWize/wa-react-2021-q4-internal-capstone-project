import "../Home.css";
import ProductCard from "./ProductCard";
import {
  Grid,
  GridTitle,
  GridCardContainer,
  PaginationContainer,
  PagintationControl,
} from "./GridContainer.styles";
import { useState } from "react";

const GridContainer = ({ productInfo, theTitle, pagination, showShortDesc }) => {
  const elPerPage = pagination ? pagination : 100;
  const [currPage, setCurrPage] = useState(1);
  const [pages] = useState(Math.ceil(productInfo.length / elPerPage));

  const [genPagination] = useState([...Array(pages).keys()]);

  const changePage = (event, newPage) => {
    setCurrPage(newPage + 1);
  };
  const nextPage = () => {
    setCurrPage((page) => page + 1);
  };
  const previousPage = () => {
    setCurrPage((page) => page - 1);
  };

  const getPaginatedData = () => {
    const startIndex = currPage * elPerPage - elPerPage;
    const endIndex = startIndex + elPerPage;
    return productInfo.slice(startIndex, endIndex);
  };

  return (
    <Grid>
      <GridTitle>{theTitle}</GridTitle>
      {productInfo.length === 0 && (
        <GridTitle as="h4">No Results were found</GridTitle>
      )}
      <GridCardContainer>
        {getPaginatedData().map((item, index) => (
          <ProductCard
            key={index}
            productId={item.id}
            productName={item.name}
            price={item.price}
            categoryName={item.category_name}
            imgSrc={item.img_src}
            imgAlt={item.img_alt}
            shortDesc={showShortDesc ? item.short_desc : ''}
          ></ProductCard>
        ))}
      </GridCardContainer>
      {pagination && (
        <PaginationContainer>
          <PagintationControl
            as="button"
            disabled={Boolean(currPage === 1)}
            href="./"
            onClick={(event) => previousPage(event)}
          >
            Prev
          </PagintationControl>
          <div>
            {genPagination.map((page, index) => (
              <PagintationControl
                as="button"
                disabled={Boolean(currPage === page + 1)}
                href="./"
                key={index}
                onClick={(event) => changePage(event, page)}
              >
                {" "}
                {page + 1}{" "}
              </PagintationControl>
            ))}
          </div>
          <PagintationControl
            as="button"
            disabled={Boolean(currPage + 1 >= pages)}
            href="./"
            onClick={(event) => nextPage(event)}
          >
            Next
          </PagintationControl>
        </PaginationContainer>
      )}
    </Grid>
  );
};
export default GridContainer;
