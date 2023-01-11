import "./Menu.scss";
import logo from "../../images/logo.svg";
import about from "../../images/about.svg";
import account from "../../images/account.svg";
import arrow from "../../images/arrow.svg";
import contact from "../../images/contact.svg";
import discover from "../../images/discover.svg";
import favourites from "../../images/favourites.svg";
import home from "../../images/home.svg";
import closeBtn from "../../images/close-btn.svg";
import { Link } from "react-router-dom";

const Menu = ({ toggleMenu }) => {
  return (
    <div className="menu">
      <div className="menu__header">
        <img className="menu__app-logo" src={logo} alt="App Logo" />
        <h1 className="menu__app-title">LOCAL</h1>
        <img
          className="menu__close"
          src={closeBtn}
          alt="Close Button"
          onClick={toggleMenu}
        />
      </div>
      <div className="menu__home">
        <Link className="menu__link" to="/home">
          <div className="menu__page">
            <img className="menu__logo" src={home} alt="Home Logo" />
            <h2 className="menu__option">Home</h2>
            <img className="menu__arrow" src={arrow} alt="Arrow" />
          </div>
        </Link>
      </div>
      <div className="menu__search">
        <Link className="menu__link" to="/discover">
          <div className="menu__page ">
            <img className="menu__logo" src={discover} alt="Discover Logo" />
            <h2 className="menu__option">Discover</h2>
            <img className="menu__arrow" src={arrow} alt="Arrow" />
          </div>
        </Link>
        <Link className="menu__link" to="/favourites">
          <div className="menu__page">
            <img className="menu__logo" src={favourites} alt="Home Logo" />
            <h2 className="menu__option">Favourites</h2>
            <img className="menu__arrow" src={arrow} alt="Arrow" />
          </div>
        </Link>
        <Link className="menu__link" to="/account">
          <div className="menu__page">
            <img className="menu__logo" src={account} alt="Account Logo" />
            <h2 className="menu__option">Manage Account</h2>
            <img className="menu__arrow" src={arrow} alt="Arrow" />
          </div>
        </Link>
      </div>
      <div className="menu__about">
        <Link className="menu__link" to="/about">
          <div className="menu__page">
            <img className="menu__logo" src={about} alt="About Logo" />
            <h2 className="menu__option">About</h2>
            <img className="menu__arrow" src={arrow} alt="Arrow" />
          </div>
        </Link>
      </div>
      <div className="menu__contact">
        <Link className="menu__link" to="/contact">
          <div className="menu__page">
            <img className="menu__logo" src={contact} alt="Contact Logo" />
            <h2 className="menu__option">Contact</h2>
            <img className="menu__arrow" src={arrow} alt="Arrow" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
