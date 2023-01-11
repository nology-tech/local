import "./Layout.scss";
import Menu from "../Menu/Menu";
import { useState } from "react";
import Header from "../Header/Header";

const Layout = ({ children, isWithMenu }) => {
  if (!isWithMenu) {
    return <div className="layout">{children}</div>;
  }

  //Layout with Menu Icon
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="layout">
      <Header toggleMenu={toggleMenu} />

      {showMenu && <div className="layout__menu--shadow"></div>}
      <div className={`layout__menu ${showMenu ? "menu-open" : "menu-closed"}`}>
        <Menu toggleMenu={toggleMenu} />
      </div>

      {children}
    </div>
  );
};
export default Layout;
