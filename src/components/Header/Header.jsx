import AppLogo from "../../assets/images/AppLogo.svg";
import BackButton from "../../assets/images/BackButton.svg";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <img src={BackButton} alt="" />
      <div className="header__container">
        <div className="header__logo-title">
          <img src={AppLogo} alt="" />
          <h1>LOCAL</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
