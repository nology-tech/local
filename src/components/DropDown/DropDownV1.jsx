const [dropDownActive, setDropDownActive] = useState(false);
let dropDownClass = "dropdown__link dropdown__link--primary";
("dropdown__link dropdown__link--primary menu-active");
const handleDropDownActive = () => {
  console.log("hi");
  setDropDownActive(!dropDownActive);
  if (dropDownActive) {
    dropDownClass += " menu-active";
  } else {
    dropDownClass = "dropdown__link dropdown__link--primary";
  }
  return dropDownClass;
};
