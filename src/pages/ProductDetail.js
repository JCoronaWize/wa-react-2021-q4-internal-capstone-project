import { useParams } from "react-router";
import CardCaroussel from "../components/CardCaroussel";
import MainButton from "../components/MainButton";
import { useCategoriesList } from "../dataFetch";

const Home = () => {
  const { productId } = useParams();
  const {
    data: categoriesData,
    isLoading: categoriesLoading,
    error: categoriesError,
  } = useCategoriesList();
  return (
    <>
      <div>
        <h1>The product Page</h1>
        <p>Prodcut Main image {productId}</p>
      </div>

      {categoriesLoading && <div>...Loading Cat</div>}
      {!categoriesLoading && !categoriesError && (
        <>
          <CardCaroussel cardInfos={categoriesData}></CardCaroussel>
        </>
      )}

      <MainButton to="/products">View all Products</MainButton>
    </>
  );
};
export default Home;
