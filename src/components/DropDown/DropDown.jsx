import "./DropDown.scss";
import triangle from "../../assets/icons/triangleUpsideDown.svg";

import { useState } from "react";

const DropDown = () => {
  // state to change whether drop down is displayed or not - changes class of image to rotate the arrow and class of primary div to change borders
  const [dropdownActive, setDropdownActive] = useState(false);
  // state to track the active location selected - This defaults to all so that without any option being clicked all is displayed as the text
  const [activeLocation, setActiveLocation] = useState("All");

  const handleDropDownActive = () => {
    console.log("hi");
    setDropdownActive(!dropdownActive);
  };
  const handleActiveLocation = (location) => {
    console.log(location);
    setActiveLocation(`${location}`);
  };

  const applyActiveClassDiv = dropdownActive
    ? "dropdown__item dropdown__item--primary dropdown__item--primary--active"
    : "dropdown__item dropdown__item--primary";

  const applyActiveClassArrow = dropdownActive
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
          <img className={applyActiveClassArrow} src={triangle} alt="" />
        </div>
      </div>
      {dropdownActive && (
        <>
          <div
            role="option"
            tabIndex={0}
            className="dropdown__item dropdown__item--secondary"
            onClick={() => handleActiveLocation("liverpool")}
          >
            <p className="dropdown__item-name">liverpool</p>
          </div>
          <div className="dropdown__item dropdown__item--secondary">
            <p className="dropdown__item-name">london</p>
          </div>
          <div className="dropdown__item dropdown__item--secondary">
            <p className="dropdown__item-name">edinburgh</p>
          </div>
        </>
      )}
    </div>
  );
};
export default DropDown;

//steps to do next

// Filter locaiton results arry [1,2,3,4,45,5,67,]
// user click on 3
// 3 then is placed where all currently is, function the does resultsarray.push("all")
// 4. if i then clicked 4- resultsarray.shift(3)
// 4. if option clicked = all then remove all from results arry and put current value into array.

// replace hardcoded shit with props.
//  split the cuurrent component into container - default value shown ie all + an imported component with props -
