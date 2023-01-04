import "./Button.scss";

const Button = ({ buttonText, buttonName, onClick }) => {
  let buttonClass = `button button--${buttonName}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default Button;
