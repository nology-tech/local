import AppLogo from "../../assets/images/AppLogo.svg";
import BackButton from "../../assets/images/BackButton.svg";
import "./Header.scss";
import MenuIcon from "../MenuIcon/MenuIcon";
import { Link } from "react-router-dom";

const Header = ({ toggleMenu, isManageAccount }) => {
  const headerClassName = isManageAccount
    ? "header header__manage-account"
    : "header";
  return (
    <div className={headerClassName}>
      <Link to="/*" className="header__link--home">
        <img src={BackButton} alt="an Icon of an backwards facing arrow" />
      </Link>
      <div className="header__container">
        <div className="header__logo-title">
          <img src={AppLogo} alt="an image showing the Local logo" />
          <h1 className="header__title-local">LOCAL</h1>
        </div>
      </div>
      <MenuIcon toggleMenu={toggleMenu} />
    </div>
  );
};

export default Header;
