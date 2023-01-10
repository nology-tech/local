import "./MenuIcon.scss";
import menu from "../../images/menu.svg";

const MenuIcon = ({ toggleMenu }) => {
  return (
    <img
      className="hamburger-menu hamburger-menu--header"
      src={menu}
      alt="Menu icon"
      onClick={toggleMenu}
      role="button"
    />
  );
};

export default MenuIcon;
