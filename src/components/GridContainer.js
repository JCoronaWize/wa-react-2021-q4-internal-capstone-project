import "../Home.css";
import data from "../mocks/en-us/featured-products.json";
import styled from "styled-components";
import ProductCard from "./ProductCard";

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-around;
    background-color: #ffffff;
    color: rgb(0, 0, 0);
    div{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-around;
        background-color: #ffffff;
        color: rgb(0, 0, 0);       
    }
    h3 {
        justify-content: center;
        font-size: 2em;
        margin: 2em 0 1em 0;
    }
`

const GridContainer = ({theTitle}) => {
  return (
    <Grid>
        <h3>{theTitle}</h3>    
    <div>
      {data.results.map((item, index) => (
        <ProductCard key={index} imgSrc={item.data.mainimage.url} productName={item.data.name}></ProductCard>
      ))}
    </div>
    </Grid>
  );
};
export default GridContainer;
