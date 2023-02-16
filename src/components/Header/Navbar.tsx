import { useState } from "react";

const navItems = ["Home", "New", "Popular", "Trending", "Categories"];

type NavbarProps = {
  isMenuOpen: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen }) => {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <ul className="primary-navigation" data-menuopen={isMenuOpen}>
      {navItems.map((item) => (
        <li key={item} className="nav__item">
          <a tabIndex={0}>{item}</a>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
