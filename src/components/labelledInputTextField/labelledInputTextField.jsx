import "./labelledInputTextField.scss";

const LabelledInputTextField = ({
  uniqueInputFieldHtmlName,
  inputType,
  labelHeader,
  inputLarge,
}) => {
  let inputClassName = "labelled-input-text-field__input";

  if (inputLarge) {
    inputClassName = "labelled-input-text-field__input input-large";
  } else {
    inputClassName = "labelled-input-text-field__input";
  }

  return (
    <>
      <div className="labelled-input-text-field">
        <label
          htmlFor={uniqueInputFieldHtmlName}
          className="labelled-input-text-field__label"
        >
          {labelHeader}
        </label>
        <input
          id={uniqueInputFieldHtmlName}
          type={inputType}
          className={inputClassName}
        />
      </div>
    </>
  );
};

export default LabelledInputTextField;
