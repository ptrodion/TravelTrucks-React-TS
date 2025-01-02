import { NavLink } from 'react-router-dom';
import LogoIcon from '../../assets/icons/LogoIcon/LogoIcon.js';
import { LogoStyled } from './Logo.styled.js';

const Logo = () => {
  return (
    <NavLink to="/">
      <LogoStyled>
        <LogoIcon />
      </LogoStyled>
    </NavLink>
  );
};

export default Logo;
