import "./Button.scss";

const Button = ({ buttonText, buttonName, functionToCall }) => {
  let buttonClass = `button button--${buttonName}`;

  return (
    <button className={buttonClass} onClick={functionToCall}>
      {buttonText}
    </button>
  );
};

export default Button;
