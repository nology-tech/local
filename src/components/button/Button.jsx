import "./Button.scss";

const Button = ({ buttonText, buttonContact }) => {
  let buttonStyle = "button";

  if (buttonContact) {
    buttonStyle = "button-contact";
  } else {
    buttonStyle = "button";
  }

  return <button className={buttonStyle}>{buttonText}</button>;
};

export default Button;
