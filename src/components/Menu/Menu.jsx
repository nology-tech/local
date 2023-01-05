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
    <>
      <div className="menu">
        <div className="menu__header">
          <img className="menu-appLogo" src={logo} alt="App Logo" />
          <h1 className="h1">LOCAL</h1>
          <img
            className="menu-close"
            src={closeBtn}
            alt="Close Button"
            onClick={toggleMenu}
          />
        </div>
        <div className="menu-home">
          <Link className="menu__link" to="/home">
            <div className="menu__page">
              <img className="menu-logo" src={home} alt="Home Logo" />
              <h2>Home</h2>
              <img className="menu-arrow" src={arrow} alt="Arrow" />
            </div>
          </Link>
        </div>
        <div className="menu-search">
          <Link className="menu__link" to="/discover">
            <div className="menu__page ">
              <img className="menu-logo" src={discover} alt="Discover Logo" />
              <h2>Discover</h2>
              <img className="menu-arrow" src={arrow} alt="Arrow" />
            </div>
          </Link>
          <Link className="menu__link" to="/favourites">
            <div className="menu__page">
              <img className="menu-logo" src={favourites} alt="Home Logo" />
              <h2>Favourites</h2>
              <img className="menu-arrow" src={arrow} alt="Arrow" />
            </div>
          </Link>
        </div>
        <div className="menu-info">
          <Link className="menu__link" to="/account">
            <div className="menu__page">
              <img className="menu-logo" src={account} alt="Account Logo" />
              <h2>Manage Account</h2>
              <img className="menu-arrow" src={arrow} alt="Arrow" />
            </div>
          </Link>
          <Link className="menu__link" to="/about">
            <div className="menu__page">
              <img className="menu-logo" src={about} alt="About Logo" />
              <h2>About</h2>
              <img className="menu-arrow" src={arrow} alt="Arrow" />
            </div>
          </Link>
        </div>
        <div className="menu-contact">
          <Link className="menu__link" to="/contact">
            <div className="menu__page">
              <img className="menu-logo" src={contact} alt="Contact Logo" />
              <h2>Contact</h2>
              <img className="menu-arrow" src={arrow} alt="Arrow" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Menu;
