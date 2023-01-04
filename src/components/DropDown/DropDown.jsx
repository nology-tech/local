import "./DropDown.scss";

const DropDown = () => {
  return (
    <select name="dropdown" id="locations" className="dropdown">
      <option value="all" className="dropdown__option">
        All
      </option>
      <option value="london" className="dropdown__option">
        London
      </option>
      <option value="liverpool" className="dropdown__option">
        Liverpool
      </option>
    </select>
  );
};
export default DropDown;

// note to remove the route for the drop down and the import of it from there once done.
// need to update inital button name to be that of the selected location.
// need state that is changed on click that hides ie showMoreContent && {dropdown contet div}
// state on click needs to change img to transform 180 by application of class + change dropdown link primary to use the hover class variant of it.

// 1. state needs to change the class applied to the first link and also icon (onclick)
// 2. do props replacement for dynamic dropdown items list use - integrate api
