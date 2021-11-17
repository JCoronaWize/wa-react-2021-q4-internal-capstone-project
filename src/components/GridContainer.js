import "../Home.css";
import data from "../mocks/en-us/featured-products.json";


import ProductCard from "./ProductCard";
import { Grid, GridTitle } from "./GridContainer.style";


const GridContainer = ({theTitle}) => {
  return (
    <Grid>
        <GridTitle>{theTitle}</GridTitle>    
    <GridContainer>
      {data.results.map((item, index) => (
        <ProductCard key={index} imgSrc={item.data.mainimage.url} productName={item.data.name}></ProductCard>
      ))}
    </GridContainer>
    </Grid>
  );
};
export default GridContainer;
