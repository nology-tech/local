import "./Menu.scss";
import logo from "../../images/logo.svg";
import about from "../../images/about.svg";
import account from "../../images/account.svg";
import arrow from "../../images/arrow.svg";
import contact from "../../images/contact.svg";
import discover from "../../images/discover.svg";
import favourites from "../../images/favourites.svg";
import home from "../../images/home.svg";
import menu from "../../images/menu.svg";

const Menu = () => {
  return (
    <div>
      <img src={logo} alt="App Logo" />
      <title>LOCAL</title>
      <img src={home} alt="Home Logo" />
      <h2>Home</h2>
      <img src={arrow} alt="Arrow" />
      <img src={discover} alt="Discover Logo" />
      <h2>Discover</h2>
      <img src={arrow} alt="Arrow" />
      <img src={favourites} alt="Home Logo" />
      <h2>Home</h2>
      <img src={arrow} alt="Arrow" />
      <img src={home} alt="Home Logo" />
      <h2>Home</h2>
      <img src={arrow} alt="Arrow" />
      <img src={home} alt="Home Logo" />
      <h2>Home</h2>
      <img src={arrow} alt="Arrow" />
      <img src={home} alt="Home Logo" />
      <h2>Home</h2>
      <img src={arrow} alt="Arrow" />
    </div>
  );
};

export default Menu;
