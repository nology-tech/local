import "./Layout.scss";
import Menu from "../Menu/Menu";

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
    <div className="layout__menu">
      <Menu toggleMenu={toggleMenu} />
      {children}
    </div>
  );
};
export default Layout;
