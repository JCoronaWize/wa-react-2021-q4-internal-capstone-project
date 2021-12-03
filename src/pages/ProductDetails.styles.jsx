import styled from "styled-components";

export const MainContent = styled.section`
  display: flex;
  flex-direction: row;
  max-width: 750px;
  /* background-color: pink; */
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 940px;
  /* background-color: pink; */
  margin: 1%;
  align-self: center;
`;

export const GalleryContainer = styled.div`
  display: flex;
  flex: 1 1 50%;
  background-color: white;
  margin: 1%;
  justify-content: center;
  align-items: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 40%;
  background-color: white;
  padding: 1em;
  justify-content: center;
  align-items: stretch;
  /* padding: 10%; */

  .info-container {
    display: flex;
    text-align: left;
    flex-direction: column;
    /* width: fill-available; */
    flex: 1 1 1;
    margin: 1%;
    padding: 3%;
    background-color: rgba(0,0,0,.2);
    justify-content: flex-start;
    align-items: flex-start;
  }
  ul{
      list-style: none;
      display: flex;
  }

  li{
      font-size: .8em;
      text-decoration: none;
      border: 1px solid black;
      border-radius: 1em;
      padding: .4em .8em;
      margin: 0 .2em;
  }
`;

export const InfoLabel = styled.label`
    margin: .2em 0;
    font-style: normal;
    font-weight: 700;
`