import "./TextField.scss";

const TextField = ({
  uniqueId,
  inputType,
  labelHeader,
  modifier,
  onChange,
  placeholderText,
}) => {
  let inputClassName = "text-field__input";

  if (modifier) {
    inputClassName = `text-field__input text-field__input--${modifier}`;
  }

  return (
    <div className={`text-field text-field--${modifier}`}>
      <label
        htmlFor={uniqueId}
        className={`text-field__label text-field__label--${modifier}`}
      >
        {labelHeader}
      </label>
      <input
        id={uniqueId}
        type={inputType}
        className={inputClassName}
        onChange={onChange}
        placeholder={placeholderText}
      />
    </div>
  );
};

export default TextField;
