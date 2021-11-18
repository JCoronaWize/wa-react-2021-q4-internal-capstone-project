import "../Home.css";
import data from "../mocks/en-us/featured-products.json";
import ProductCard from "./ProductCard";
import { Grid, GridTitle, GridCardContainer } from "./GridContainer.styles";

const GridContainer = ({ theTitle }) => {
  return (
    <Grid>
      <GridTitle>{theTitle}</GridTitle>
      <GridCardContainer>
        {data.results.map((item, index) => (
          <ProductCard
            key={index}
            imgSrc={item.data.mainimage.url}
            productName={item.data.name}
          ></ProductCard>
        ))}
      </GridCardContainer>
    </Grid>
  );
};
export default GridContainer;
