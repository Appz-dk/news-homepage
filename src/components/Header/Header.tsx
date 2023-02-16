import { useState } from "react";
import MobileNavToggle from "./MobileNavToggle";
import Navbar from "./Navbar";
import logo from "../../assets/images/logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="primary-header">
      <div className="logo">
        <img src={logo} alt="logo - The letter W followed by a punctuation in a large font size" />
      </div>
      <MobileNavToggle isMenuOpen={isMenuOpen} handleToggleMenu={handleToggleMenu} />
      <nav>
        <Navbar isMenuOpen={isMenuOpen} />
      </nav>
    </header>
  );
};

export default Header;
