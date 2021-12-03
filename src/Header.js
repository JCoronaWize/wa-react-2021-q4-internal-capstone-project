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
import { Link } from "react-router-dom";
import SimpleButton from "./components/StyledButton";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const locationQuery = useLocation().search;
  const navigate = useNavigate();
  const bsearch = new URLSearchParams(decodeURIComponent(locationQuery)).get(
    "q"
  );
  const [searchTerm, setSearchTerm] = useState(bsearch ? bsearch : "");
  useEffect(() => {}, [searchTerm]);

  const doSearch = () => {
    const searchParam = searchTerm ? `q=${searchTerm}` : ``;
    navigate(`search?${searchParam}`);
  };

  return (
    <header>
      <TopNav>
        <Link to="/home">
          <LogoHeader src={logo} alt="logo" />
        </Link>

        <NavItemsContainer>
          <NavItem>
            <SearchField
              className="search"
              type="text"
              placeholder="Looking for..."
              // value={searchTerm}
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
            {searchTerm !== "" && (
              <SimpleButton clickAction={doSearch}>SEARCH</SimpleButton>
            )}
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
