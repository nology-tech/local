import "./Filter.scss";
import Button from "../Button/Button";
import favArray from "../../data/favourites";
import { useState } from "react";

const Filter = () => {
  const [foodDrinkFilter, setFoodDrinkFilter] = useState(false);
  const [cultureFilter, setCultureFilter] = useState(false);
  const [otherFilter, setOtherFilter] = useState(false);

  const handleClickFoodDrink = (event) => {
    const userClick = event.target.value;
    setFoodDrinkFilter(userClick);
    console.log(userClick);
  };

  const handleClickCulture = (event) => {
    const userClick = event.target.value;
    setCultureFilter(userClick);
    console.log(userClick);
  };

  const handleClickOther = (event) => {
    const userClick = event.target.value;
    setOtherFilter(userClick);
    console.log(userClick);
  };

  const favFilter = favArray.filter((fav) => {
    if (foodDrinkFilter) {
      return fav.category.includes("Food & Drink");
    } else if (cultureFilter) {
      return fav.category.includes("Culture");
    } else if (otherFilter) {
      return fav.category.includes("Other");
    }
  });

  return (
    <div>
      <Button
        buttonText={"FOOD & DRINK"}
        buttonName="filter"
        onClick={handleClickFoodDrink}
      />
      <Button
        buttonText={"CULTURE"}
        buttonName="filter"
        onClick={handleClickCulture}
      />
      <Button
        buttonText={"OTHER"}
        buttonName="filter"
        onClick={handleClickOther}
      />
    </div>
  );
};

export default Filter;
