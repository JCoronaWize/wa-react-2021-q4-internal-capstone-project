import "../Home.css";
import ProductCard from "./ProductCard";
import { Grid, GridTitle, GridCardContainer } from "./GridContainer.styles";

const GridContainer = ({ productInfo, theTitle }) => {
  return (
    <Grid>
      <GridTitle>{theTitle}</GridTitle>
      <GridCardContainer>
        {productInfo.map((item, index) => (
          <ProductCard
            // key={index}
            // imgSrc={item.data.mainimage.url}
            // productName={item.data.name}
            key={index}
            productName={item.name}
            price={item.price}
            categoryName={item.category_name}
            imgSrc={item.img_src}
            imgAlt={item.img_alt}
          ></ProductCard>
        ))}
      </GridCardContainer>
    </Grid>
  );
};
export default GridContainer;
