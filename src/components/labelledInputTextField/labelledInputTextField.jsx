import "./labelledInputTextField.scss";

const LabelledInputTextField = ({
  uniqueInputFieldHtmlName,
  inputType,
  labelHeader,
}) => {
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
          className="labelled-input-text-field__input"
        />
      </div>
    </>
  );
};

export default LabelledInputTextField;
