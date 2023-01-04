import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import menu from "../../images/menu.svg";
import Menu from "../../components/Menu/Menu";

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const homePage = (
    <div>
      <img src={menu} alt="Menu icon" onClick={toggleMenu} />
      <h1>Page Heading</h1>
      <h2>Section Heading</h2>
      <h3>Panel Heading</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non error
        dolor in nostrum minima odio a fuga saepe soluta adipisci perspiciatis
        maxime tempora, temporibus beatae voluptas repellat rerum. Dignissimos,
        necessitatibus.
      </p>
    </div>
  );

  return (
    <Layout>{showMenu ? <Menu toggleMenu={toggleMenu} /> : homePage}</Layout>
  );
};

export default Home;
