import logo from "./the-logo.png";
import { TopNav, NavItemsContainer, NavItem, SearchField, TopNavLink, LogoHeader} from "./Header.styled";
import { FaShoppingCart } from "react-icons/fa";

// const TopNav = styled.nav`
//   display: flex;
//   padding: 0.2em 0.2em;
//   justify-content: space-between;
//   align-items: center;
//   font-size: 1.2em;
//   background-color: #94b053;
// `;

// const NavItemsContainer = styled.ul`
//   list-style: none;
//   display: flex;
//   justify-content: flex-end;
// `;
// const NavItem = styled.li`
//   padding: 0.5em 1em;
//   display: flex;
//   list-style: none;
//   flex: 1;
// `;

// const SearchField = styled.input`
//   padding: 0.4em 1em;
//   font-size: 0.8em;
//   border-radius: 2em;
//   border: none;
//   min-width: 30vw;
// `;
// const TopNavLink = styled.a`
//   display: inline-block;
//   padding: 10px 15px;
//   text-decoration: none;
//   color: white;
// `;

// const LogoHeader = styled.img`
//   max-height: 4em;
// `;
const Header = () => {
  return (
    <header>
      {/* Crear nav como otro elemento */}
      <TopNav>
        <a href="./">
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
