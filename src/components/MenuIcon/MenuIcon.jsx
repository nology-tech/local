import "./MenuIcon.scss";
import menu from "../../images/menu.svg";

const MenuIcon = ({ toggleMenu }) => {
  return (
    <img
      className="menu-icon"
      src={menu}
      alt="Menu icon"
      onClick={toggleMenu}
      role="button"
    />
  );
};

export default MenuIcon;
