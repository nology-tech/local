import "./Layout.scss";
import Menu from "../Menu/Menu";
import MenuIcon from "../MenuIcon/MenuIcon";
import { useState } from "react";

const Layout = ({ children, isWithMenu }) => {
  if (!isWithMenu) {
    return <div className="layout">{children}</div>;
  }

  //Layout with Menu Icon
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    console.log("here");
  };

  return (
    <>
      <div className="layout">
        {showMenu && (
          <>
            <div className="menu__shadow"></div>
            <div className="layout__menu">
              <Menu toggleMenu={toggleMenu} />
            </div>
          </>
        )}
        {!showMenu && <MenuIcon toggleMenu={toggleMenu} />}
        {children}
      </div>
    </>
  );
};
export default Layout;
