import "../Home.css";
import CategoryCard from "./CategoryCard";
import data from "../mocks/en-us/product-categories.json";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import styled from "styled-components";

const Caroussel = styled.section`
  background-color: rgba(0, 0, 0, 0.1);
  color: white;
  height: 16em;
  padding: 1em 0;
  div {
    display: flex;
    background-color: rgba(0, 0, 0, 0.1);
    color: white;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    width: 100%;
    height: 100%;
    align-items: center;
  }

  .arrow {
    /* color: #647a32; */
    color: rgba(0, 0, 0, 0);
    z-index: 1000;
    position: absolute;
    cursor: pointer;
    font-size: 3em;
    top: 15em;
  }
  .arrow:hover {
    color: rgba(0, 0, 0, 0.7);
  }
  .left {
    right: 0.2em;
  }
  .right {
    left: 0.2em;
  }
`;
const CardCaroussel = () => {
  return (
    <Caroussel>
      <FaArrowCircleLeft
        className="arrow right"
        onClick={() => {
          document.getElementById("the_slider").scrollLeft -= 500;
        }}
      ></FaArrowCircleLeft>
      <FaArrowCircleRight
        className="arrow left"
        onClick={() => {
          document.getElementById("the_slider").scrollLeft += 500;
        }}
      ></FaArrowCircleRight>
      <div id="the_slider">
        {data.results.map((item) => (
          <CategoryCard
            key={item.id}
            imgSrc={item.data.main_image.url}
            categoryName={item.data.name}
          ></CategoryCard>
        ))}
      </div>
    </Caroussel>
  );
};
export default CardCaroussel;
