import styled from "styled-components";
const Slide = ({ id, active, key, srcImg, altText, description }) => {
  const SlideStyle = styled.div`
    display: ${active ? 'flex' : 'none'};
    height: inherit;
    background-image: url("${srcImg} no-repeat center center");
    background-repeat: no-repeat;
    background-size: cover;
    align-items: flex-end;
    p {
      margin: 0;
      display: flex;
      flex: 1;
      justify-content: flex-end;
      align-items: flex-end;
      padding: 2em;
      font-size: 1.5em;
      min-height: 3em;
      color: white;
      background-color: rgba(0, 0, 0, 0.6);
    }
  `;
  return (
    <SlideStyle id={id} key={key} srcImg altText>
      <p>{description}</p>
    </SlideStyle>
  );
};
export default Slide;
