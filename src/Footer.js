import styled from 'styled-components';
import './Home.css';

const StyledFooter = styled.footer`
  background-color: #94B053;
  color: white;
  padding: 2em 0;
`
const Footer = () => {
    return(
        <StyledFooter>
        <h3>Ecommerce Name 2021</h3>
        <p>Ecommerce created during Wizeline’s Academy React Bootcamp</p>
      </StyledFooter>
    )
  }
  export default Footer