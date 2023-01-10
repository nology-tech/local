import AppLogo from "../../assets/images/AppLogo.svg";
import BackButton from "../../assets/images/BackButton.svg";
import "./Header.scss";
import MenuIcon from "../MenuIcon/MenuIcon";

const Header = ({ toggleMenu }) => {
  return (
    <div className="header">
      <img src={BackButton} alt="" />
      <div className="header__container">
        <div className="header__logo-title">
          <img src={AppLogo} alt="" />
          <h1 className="header__title-local">LOCAL</h1>
        </div>
      </div>
      <MenuIcon toggleMenu={toggleMenu} />
    </div>
  );
};

export default Header;
