import "./Menu.scss";
import Layout from "../../components/Layout/Layout";
import logo from "../../images/logo.svg";
import about from "../../images/about.svg";
import account from "../../images/account.svg";
import arrow from "../../images/arrow.svg";
import contact from "../../images/contact.svg";
import discover from "../../images/discover.svg";
import favourites from "../../images/favourites.svg";
import home from "../../images/home.svg";
import closeBtn from "../../images/close-btn.svg";

const Menu = ({ toggleMenu }) => {
  return (
    <Layout>
      <div className="menu">
        <div className="menu-header">
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
          <img className="menu-logo" src={home} alt="Home Logo" />
          <h2>Home</h2>
          <img className="menu-arrow" src={arrow} alt="Arrow" />
        </div>
        <div className="menu-search">
          <div>
            <img className="menu-logo" src={discover} alt="Discover Logo" />
            <h2>Discover</h2>
            <img className="menu-arrow" src={arrow} alt="Arrow" />
          </div>
          <div>
            <img className="menu-logo" src={favourites} alt="Home Logo" />
            <h2>Favourites</h2>
            <img className="menu-arrow" src={arrow} alt="Arrow" />
          </div>
        </div>
        <div className="menu-info">
          <div>
            <img className="menu-logo" src={account} alt="Account Logo" />
            <h2>Manage Account</h2>
            <img className="menu-arrow" src={arrow} alt="Arrow" />
          </div>
          <div>
            <img className="menu-logo" src={about} alt="About Logo" />
            <h2>About</h2>
            <img className="menu-arrow" src={arrow} alt="Arrow" />
          </div>
        </div>
        <div className="menu-contact">
          <img className="menu-logo" src={contact} alt="Contact Logo" />
          <h2>Contact</h2>
          <img className="menu-arrow" src={arrow} alt="Arrow" />
        </div>
      </div>
    </Layout>
  );
};

export default Menu;
