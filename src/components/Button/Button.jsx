import "./Button.scss";

const Button = ({
  buttonText,
  buttonName,
  onClick,
  // buttonImgUrl,
  // buttonImgAlt,
  // buttonImgClass,
}) => {
  let buttonClass = `button button--${buttonName}`;
  // let buttonImageName = `button__${buttonImgClass}`;
  // let buttonImageUrl = `${buttonImgUrl}`;

  // const buttonImage = () => {
  //   if (typeof buttonImageUrl == "defined") {
  //     return (
  //       <img
  //         className={buttonImageName}
  //         src={buttonImageUrl}
  //         alt={buttonImgAlt}
  //       />
  //     );
  //   }
  // };

  return (
    <button className={buttonClass} onClick={onClick}>
      {buttonText}
      {/* {buttonImage} */}
    </button>
  );
};

export default Button;
