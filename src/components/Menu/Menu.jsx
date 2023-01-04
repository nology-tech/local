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
      <div>
        <img src={closeBtn} alt="Close Button" onClick={toggleMenu} />
        <img src={logo} alt="App Logo" />
        <h1>LOCAL</h1>
        <img src={home} alt="Home Logo" />
        <h2>Home</h2>
        <img src={arrow} alt="Arrow" />
        <img src={discover} alt="Discover Logo" />
        <h2>Discover</h2>
        <img src={arrow} alt="Arrow" />
        <img src={favourites} alt="Home Logo" />
        <h2>Favourites</h2>
        <img src={arrow} alt="Arrow" />
        <img src={account} alt="Account Logo" />
        <h2>Manage Account</h2>
        <img src={arrow} alt="Arrow" />
        <img src={about} alt="About Logo" />
        <h2>About</h2>
        <img src={arrow} alt="Arrow" />
        <img src={contact} alt="Contact Logo" />
        <h2>Contact</h2>
        <img src={arrow} alt="Arrow" />
      </div>
    </Layout>
  );
};

export default Menu;
