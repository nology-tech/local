import "./Button.scss";

const Button = ({ buttonText, isEnterBtn }) => {
  let buttonStyle = "button";

  if (isEnterBtn) {
    buttonStyle += "-enter";
  } else {
    buttonStyle = "button";
  }

  return <button className={buttonStyle}>{buttonText}</button>;
};

export default Button;
