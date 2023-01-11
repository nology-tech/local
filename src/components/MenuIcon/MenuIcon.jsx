import "./MenuIcon.scss";

const MenuIcon = ({ toggleMenu }) => {
  return (
    <div className="menu-icon__container" onClick={toggleMenu} role="button">
      <svg
        className="menu-icon__icon"
        width="44"
        height="30"
        viewBox="0 0 44 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        alt="Menu-icon"
      >
        <path
          d="M0 30H44V25H0V30ZM0 17.5H44V12.5H0V17.5ZM0 0V5H44V0H22H0Z"
          fill="black"
        />
      </svg>
    </div>
  );
};

export default MenuIcon;
