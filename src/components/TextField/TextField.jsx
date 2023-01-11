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

  let labelClassName = "text-field__label";

  if (modifier) {
    labelClassName = `text-field__label text-field__label--${modifier}`;
  }

  return (
    <div className="text-field">
      <label htmlFor={uniqueId} className={labelClassName}>
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
