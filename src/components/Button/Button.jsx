import "./Button.scss";

const Button = ({
  buttonText,
  buttonName,
  onClick,
  buttonImgUrl,
  buttonImgAlt,
  buttonImgClass,
}) => {
  let buttonClass = `button button--${buttonName}`;
  let buttonImageName = `button--image--${buttonImgClass}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {buttonText}
      <img className={buttonImageName} src={buttonImgUrl} alt={buttonImgAlt} />
    </button>
  );
};

export default Button;
