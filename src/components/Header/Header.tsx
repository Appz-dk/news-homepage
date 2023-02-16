import { useState } from "react";
import MobileNavToggle from "./MobileNavToggle";
import Navbar from "./Navbar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="primary-header">
      <h1 className="logo">W.</h1>
      <MobileNavToggle isMenuOpen={isMenuOpen} handleToggleMenu={handleToggleMenu} />
      <nav>
        <Navbar isMenuOpen={isMenuOpen} />
      </nav>
    </header>
  );
};

export default Header;
