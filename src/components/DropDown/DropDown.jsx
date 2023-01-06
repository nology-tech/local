import "./DropDown.scss";
import triangle from "../../assets/icons/triangleUpsideDown.svg";
import { useState } from "react";

const DropDown = ({ options = [], onChange }) => {
  const [dropDownActive, setDropDownActive] = useState(false);
  const [activeLocation, setActiveLocation] = useState("All");

  const handleDropDownActive = () => {
    setDropDownActive(!dropDownActive);
  };

  const handleActiveLocation = (location) => {
    onChange(location);
    setActiveLocation(`${location}`);
  };

  const applyActiveClassDiv = dropDownActive
    ? "dropdown__item dropdown__item--primary dropdown__item--primary--active"
    : "dropdown__item dropdown__item--primary";

  const applyActiveClassArrow = dropDownActive
    ? "dropdown__arrow arrow-active"
    : "dropdown__arrow";

  return (
    <div className="dropdown">
      <div role="select" tabIndex={0} className={applyActiveClassDiv}>
        <p className="dropdown__item-name dropdown__item-name--primary">
          {activeLocation}
        </p>
        <div
          className={"dropdown__image-container"}
          role="button"
          tabIndex={0}
          onClick={handleDropDownActive}
        >
          <img
            className={applyActiveClassArrow}
            src={triangle}
            alt="triangle"
          />
        </div>
      </div>
      {dropDownActive &&
        options.map((location) => (
          <div
            key={location}
            role="option"
            tabIndex={0}
            className="dropdown__item dropdown__item--secondary"
            onClick={() => handleActiveLocation(location)}
          >
            <p className="dropdown__item-name">{location}</p>
          </div>
        ))}
    </div>
  );
};

export default DropDown;
