import { NavLink } from "react-router-dom";


export const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/vehicles">Vehicles</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header;

