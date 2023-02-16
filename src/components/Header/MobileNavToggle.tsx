import { useState } from "react";

type MobileNavToggleProps = {
  isMenuOpen: boolean;
  handleToggleMenu: () => void;
};

const MobileNavToggle: React.FC<MobileNavToggleProps> = ({ isMenuOpen, handleToggleMenu }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <button
      tabIndex={0}
      className="mobile__nav-toggle"
      aria-expanded={isMenuOpen}
      aria-controls="primary-navigation"
      onClick={handleToggleMenu}
    >
      <span className="sr-only">Menu</span>
    </button>
  );
};

export default MobileNavToggle;
