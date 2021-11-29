import { useParams } from "react-router-dom";
import AddCartButton from "../components/AddCartButton";
import MainButton from "../components/MainButton";
import SwiperGallery from "../components/SwiperGallery"
import { useProductDetailed } from "../dataFetch";
import {
  ContentContainer,
  GalleryContainer,
  InfoLabel,
  MainContainer,
} from "./ProductDetails.styles";

const Home = () => {
  const { productId } = useParams();
  const {
    data: productData,
    isLoading: productLoading,
    error: productError,
    // test,
  } = useProductDetailed(productId);

  return (
    <>
      {/* <p>hello</p>
      <div>{JSON.stringify(theParams)}sss</div>
      <div>{JSON.stringify(theLocation)}</div> */}
      {productLoading && <div>...Loading Cat</div>}

      {!productLoading && !productError && (
        <MainContainer>
          {/* {productId} */}
          <GalleryContainer>
          <SwiperGallery imagesData={productData[0].images}></SwiperGallery>
          </GalleryContainer>
          <ContentContainer>
            <div className="info-container">
              {/* {JSON.stringify(productData)} */}
              <InfoLabel htmlFor="">{productData[0].name}</InfoLabel>
              <InfoLabel htmlFor="">$ {productData[0].price} US</InfoLabel>
              <InfoLabel htmlFor="">SKU: {productData[0].sku}</InfoLabel>
              <InfoLabel htmlFor="">
                Category: {productData[0].category_name.toUpperCase()}
              </InfoLabel>
              <span>Quantity: </span>
              <input
                style={{ fontSize: "1.2em" }}
                type="number"
                min="0"
                max={productData[0].stock}
              />
              <AddCartButton></AddCartButton>
              <ul>
                <InfoLabel>Tags:</InfoLabel>
                <li>{"Tag1"}</li>
                <li>{"Tag2"}</li>
                <li>{"Tag3"}</li>
              </ul>
            </div>
            <div className="info-container">
              <InfoLabel>Description: </InfoLabel>
              <p>{productData[0].description}</p>
              <InfoLabel>Specifications: </InfoLabel>
              <table>
                <thead>
                  <tr>
                    <th>SPEC</th>
                    <th>NAME</th>
                  </tr>
                </thead>
                <tbody>
                  {productData[0].specs.map((item, index) => (
                    <tr key={index}>
                      <td>{item.spec_name}</td>
                      <td>{item.spec_value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ContentContainer>
        </MainContainer>
      )}

      <MainButton to="/products">View all Products</MainButton>
    </>
  );
};
export default Home;
