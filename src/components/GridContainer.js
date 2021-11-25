import "../Home.css";
import ProductCard from "./ProductCard";
import {
  Grid,
  GridTitle,
  GridCardContainer,
  PaginationContainer,
  PagintationControl,
} from "./GridContainer.styles";

const GridContainer = ({ productInfo, theTitle, pagination }) => {
  return (
    <Grid>
      <GridTitle>{theTitle}</GridTitle>
      <GridCardContainer>
        {productInfo.map((item, index) => (
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
          <PagintationControl
            href="./"
            onClick={(event) => event.preventDefault()}
          >
            Prev
          </PagintationControl>
          <div>
            <PagintationControl
              href="./"
              onClick={(event) => event.preventDefault()}
            >
              {" "}
              1
            </PagintationControl>
          </div>
          <PagintationControl
            href="./"
            onClick={(event) => event.preventDefault()}
          >
            Next
          </PagintationControl>
        </PaginationContainer>
      )}
    </Grid>
  );
};
export default GridContainer;
