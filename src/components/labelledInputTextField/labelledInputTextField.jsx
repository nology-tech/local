import "./labelledInputTextField.scss";

const LabelledInputTextField = () => {
  return (
    <>
      <div className="labelled-input-text-field">
        <label
          htmlFor="InputFieldName"
          className="labelled-input-text-field__label"
        >
          name
        </label>
        <input
          id="InputFieldName"
          type="text"
          className="labelled-input-text-field__input"
          name="InputFieldName"
          onChange="do this"
          value=""
        />
      </div>
    </>
  );
};

export default LabelledInputTextField;
