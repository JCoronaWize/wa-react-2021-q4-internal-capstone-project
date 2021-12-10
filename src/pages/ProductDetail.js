import { useParams } from "react-router-dom";
import AddCartButton from "../components/AddCartButton";
import MainButton from "../components/MainButton";
import SwiperGallery from "../components/SwiperGallery"
import { useCartState } from "../context/CartContext";
import { useProductDetailed } from "../dataFetch";
import {
  ContentContainer,
  GalleryContainer,
  InfoLabel,
  MainContainer,
} from "./ProductDetails.styles";

const ProdcuctsDetail = () => {
  const { productId } = useParams();
  const {
    data: productData,
    isLoading: productLoading,
    error: productError,
    // test,
  } = useProductDetailed(productId);
  const { state: globalCart } = useCartState();
 const productInCart = globalCart.cartProducts.find(item => item.id === productId)
 console.log(productInCart)
  return (
    <>
      {productLoading && <div>...Loading Cat</div>}

      {!productLoading && !productError && (
        <MainContainer>
          <GalleryContainer>
          <SwiperGallery imagesData={productData[0].images}></SwiperGallery>
          </GalleryContainer>
          <ContentContainer>
            <div className="info-container">
              <InfoLabel htmlFor="">{productData[0].name}</InfoLabel>
              <InfoLabel htmlFor="">$ {productData[0].price} US</InfoLabel>
              <InfoLabel htmlFor="">SKU: {productData[0].sku}</InfoLabel>
              <InfoLabel htmlFor="">
                Category: {productData[0].category_name.toUpperCase()}
              </InfoLabel>
              <AddCartButton prodData={productData[0]} currStock={productData[0].stock} theProductId={productData[0].id}></AddCartButton>

              <ul>
                <InfoLabel>Tags:</InfoLabel>
                {productData[0].tags.map((item,index) => (
                  <li key={index}>{item}</li>
                ))}
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
export default ProdcuctsDetail;
