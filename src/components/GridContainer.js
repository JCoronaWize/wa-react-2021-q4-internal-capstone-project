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

const GridContainer = ({ productInfo, theTitle, pagination }) => {

  const elPerPage = pagination ? 12 : 100;  
  const [currPage, setCurrPage] = useState(1);
  const [pages] = useState(Math.ceil(productInfo.length / elPerPage))

  const [genPagination] = useState([...Array(pages).keys()]); 

  const changePage = (event, newPage) => {
    setCurrPage(newPage + 1)
  }
  const nextPage = () => {
    setCurrPage((page) => page + 1);
  } 
  const previousPage = () => {
    setCurrPage((page) => page - 1);
  }   

  const getPaginatedData = () => {
    const startIndex = currPage * elPerPage - elPerPage;
    const endIndex = startIndex + elPerPage;
    return productInfo.slice(startIndex, endIndex);
  };


  return (
    <Grid>
      <GridTitle>{theTitle}</GridTitle>
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
          ></ProductCard>
        ))}
      </GridCardContainer>
      {pagination && (
        <PaginationContainer>
          <PagintationControl as="button"
          disabled={Boolean(currPage === 1)}
            href="./"
            onClick={(event) => previousPage(event)}
          >
            Prev
          </PagintationControl>
          <div>
            {/* MAXIMUM 12 products */}
            {genPagination.map((page,index) => (
            <PagintationControl as="button"
            disabled={Boolean(currPage === page + 1)}
                // style = { page === currPage  ? {color: 'pink'} : `` }
                href="./"
                key={index}
                onClick={(event) => changePage(event, page)}
              > {page+1} </PagintationControl>

              ))}
            {/* <PagintationControl as="button"
              href="./"
              onClick={(event) => event.preventDefault()}
            >
              {" "}
              2
            </PagintationControl>             */}
          </div>
          <PagintationControl as="button"
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
