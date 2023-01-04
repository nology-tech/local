import "./Layout.scss";

const Layout = ({ children, menuLayout }) => {
  let className = "layout";

  if (menuLayout) {
    className += "__menu";
  } else {
    className = "layout";
  }

  return <div className={className}>{children}</div>;
};

export default Layout;
