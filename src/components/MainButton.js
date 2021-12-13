import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledButton = styled(Link)`
  display: flex;
  align-self: center;
  color: white;
  font-weight: 700;
  border: none;
  background-color: ${props => props.bgcolor ? props.bgcolor : 'rgba(80, 80, 80, 1)'};  
  text-transform: uppercase;
  margin: 1em;
  max-width: 350px;
  padding: 1em;
  font-size: .8em;
  border-radius: 0.4em;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: ${props => props.bgcolor ? props.bgcolor : 'rgba(80, 80, 80, 0.8)'};  
  }
`;

const MainButton = ({ children, to, bgcolor }) => {
  return <StyledButton bgcolor={bgcolor} to={to}>{children}</StyledButton>;
};

export default MainButton;
