import styled from "styled-components";
export const TopNav = styled.nav`
  display: flex;
  padding: 0.2em 0.2em;
  justify-content: space-between;
  align-items: center;
  font-size: 1em;
  background-color: #94b053;
`;

export const NavItemsContainer = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
`;
export const NavItem = styled.li`
  padding: 0 0.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  flex: 1;
`;

export const SearchField = styled.input`
  padding: 0.4em 1em;
  margin-right: 2em;
  font-size: 0.8em;
  border-radius: 2em;
  border: none;
  min-width: 10em;
`;
export const TopNavLink = styled.a`
  display: inline-block;
  padding: 10px 15px;
  text-decoration: none;
  color: white;
`;

export const LogoHeader = styled.img`
  max-height: 5em;
  @media only screen and (max-width: 850px) {
    max-height: 3em;
  }
`;
