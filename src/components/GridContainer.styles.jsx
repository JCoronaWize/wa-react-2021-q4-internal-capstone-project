import styled from "styled-components";
export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
  background-color: #ffffff;
  color: rgb(0, 0, 0);
`;

export const GridTitle = styled.h3`
  justify-content: center;
  font-size: 2em;
  margin: 2em 0 1em 0;
`;

export const GridCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  background-color: #ffffff;
  color: rgb(0, 0, 0);
`;

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 1em;
  text-decoration: none;
  margin: 2em 0 1em 0;
`;

export const PagintationControl = styled.a`
  text-decoration: none;
  font-size: 1em;
  padding: .4em .8em;
  margin: 0 .8em;
  cursor: pointer;
  &:hover{
    font-weight: 700;
  }
`;