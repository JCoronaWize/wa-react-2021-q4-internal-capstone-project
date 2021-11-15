import "../Home.css";
import data from "../mocks/en-us/featured-products.json";
import styled from "styled-components";
import ProductCard from "./ProductCard";

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    background-color: #ffffff;
    color: rgb(0, 0, 0);
`

const GridContainer = () => {
  return (
    <Grid>
      {data.results.map((item) => (
        <ProductCard imgSrc={item.data.mainimage.url} productName={item.data.name}></ProductCard>
      ))}
    </Grid>
  );
};
export default GridContainer;
