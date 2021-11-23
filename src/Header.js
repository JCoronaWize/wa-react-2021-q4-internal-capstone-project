import logo from "./the-logo.png";
import {
  TopNav,
  NavItemsContainer,
  NavItem,
  SearchField,
  TopNavLink,
  LogoHeader,
} from "./Header.styled";
import { FaShoppingCart } from "react-icons/fa";

const Header = ({current, onNavClick}) => {

    const triggerParentNav = (event, to) => {
      event.preventDefault()
      onNavClick(to)
    }

  return (
    <header>
      {/* Crear nav como otro elemento */}
      <TopNav>
        <a href="./" onClick={(event) => {triggerParentNav(event, '/')}}>
          <LogoHeader src={logo} alt="logo" />
        </a>

        <NavItemsContainer>
          <NavItem>
            <SearchField
              className="search"
              disabled
              type="text"
              placeholder="Looking for..."
            />
          </NavItem>
          <NavItem>
            <TopNavLink href="./">
              <FaShoppingCart />
            </TopNavLink>
          </NavItem>
        </NavItemsContainer>
      </TopNav>
    </header>
  );
};
export default Header;
