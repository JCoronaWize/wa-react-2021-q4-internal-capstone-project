import logo from "./the-logo.png";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const TopNav = styled.nav`
    display: flex;
    padding: 0.2em 0.2em;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2em;
    background-color: #94b053;
    ul {
      list-style: none;
      display: flex;
      justify-content: flex-end;
    }

    li {
      padding: .5em 1em;
      display: flex;
      list-style: none;
      flex: 1;
    }
    input.search {
      padding: .4em 1em;
      font-size: .8em;
      border-radius: 2em;
      border: none;
      min-width: 30vw;
    }
    a {
      display: inline-block;
      padding: 10px 15px;
      text-decoration: none;
      color: white;
    }
  `;
  const LogoHeader = styled.a`
    margin: 0;
    padding: 0;
    img {
      max-height: 4em;      
    }
  `;

  return (
    <header>
      {/* Crear nav como otro elemento */}
      <TopNav>
        <LogoHeader href="./">
          <img src={logo} alt="logo" />
          </LogoHeader>

        <ul>
          <li>
            <input
              className="search"
              disabled
              type="text"
              placeholder="search something..."
            />
          </li>
          <li>
            <a href="./">
              <FaShoppingCart />
            </a>
          </li>
        </ul>
      </TopNav>
    </header>
  );
};
export default Header;
