import Logo from '../Logo/Logo.js';
import { HeaderNav, HeaderNavList, NavLinkElement } from './Header.styled.jsx';

const Header = () => {
  return (
    <HeaderNav>
      <Logo />
      <HeaderNavList>
        <li>
          <NavLinkElement to="/">Home</NavLinkElement>
        </li>
        <li>
          <NavLinkElement to="/vehicles">Catalog</NavLinkElement>
        </li>
      </HeaderNavList>
    </HeaderNav>
  );
};

export default Header;
