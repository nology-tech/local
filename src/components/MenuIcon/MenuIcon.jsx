import "./MenuIcon.scss";
import menu from "../../images/menu.svg";

const MenuIcon = ({ toggleMenu }) => {
  return <img src={menu} alt="Menu icon" onClick={toggleMenu} />;
};

export default MenuIcon;
