import "./textField.scss";

const TextField = ({ uniqueId, inputType, labelHeader, inputLarge }) => {
  let inputClassName = "text-field__input";

  if (inputLarge) {
    inputClassName = "text-field__input text-field__input--large";
  }

  return (
    <div className="text-field">
      <label htmlFor={uniqueId} className="text-field__label">
        {labelHeader}
      </label>
      <input id={uniqueId} type={inputType} className={inputClassName} />
    </div>
  );
};

export default TextField;
