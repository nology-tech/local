import "./DropDown.scss";
import arrowIcon from "../../assets/icons/Vector.svg";

const DropDown = () => {
  return (
    <div className="dropdown">
      <a href="#" className="dropdown__link">
        All <img src={arrowIcon} alt="" className="dropdown__icon" />
      </a>

      <div className="dropdown_content">
        <a href="#" className="dropdown__link dropdown__link--secondary">
          london
        </a>
        <a href="#" className="dropdown__link dropdown__link--secondary">
          liverpool
        </a>
      </div>
    </div>
  );
};
export default DropDown;

// note to remove the route for the drop down and the import of it from there once done.
// need to update inital button name to be that of the selected location.
// need state that is changed on click that hides ie showMoreContent && {dropdown contet div}
