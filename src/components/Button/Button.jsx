import "./Button.scss";

const Button = ({ buttonText, isSecondary }) => {
  let buttonStyle = "button";

  if (isSecondary) {
    buttonStyle += "--enter";
  } else {
    buttonStyle = "button";
  }

  return <button className={buttonStyle}>{buttonText}</button>;
};

export default Button;
