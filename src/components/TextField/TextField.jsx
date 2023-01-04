import "./TextField.scss";

const TextField = ({
  uniqueId,
  inputType,
  labelHeader,
  modifier,
  onChange,
}) => {
  let inputClassName = "text-field__input";

  if (modifier) {
    inputClassName = `text-field__input text-field__input--${modifier}`;
  }

  return (
    <div className="text-field">
      <label htmlFor={uniqueId} className="text-field__label">
        {labelHeader}
      </label>
      <input
        id={uniqueId}
        type={inputType}
        className={inputClassName}
        onChange={onChange}
      />
    </div>
  );
};

export default TextField;
