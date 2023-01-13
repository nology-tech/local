import "./TextField.scss";

const TextField = ({
  uniqueId,
  inputType,
  labelHeader,
  modifier,
  onChange,
  placeholderText,
}) => {
  const inputClassName = modifier
    ? `text-field__input text-field__input--${modifier}`
    : "text-field__input";
  const textFieldClassName = modifier
    ? `text-field text-field--${modifier}`
    : "text-field";
  const textFieldLabelClassName = modifier
    ? `text-field__label text-field__label--${modifier}`
    : "text-field__label";

  return (
    <div className={textFieldClassName}>
      <label htmlFor={uniqueId} className={textFieldLabelClassName}>
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
