import "./Filter.scss";
import Button from "../Button/Button";
import { useEffect, useState } from "react";

const Filter = ({ favArray = [], setAllCardsArr }) => {
  const [foodDrinkFilter, setFoodDrinkFilter] = useState(false);
  const [cultureFilter, setCultureFilter] = useState(false);
  const [otherFilter, setOtherFilter] = useState(false);

  //when use the filter component, need to import below code to filter the cards in page(see Favourite Page for usage)
  // const [allCardsArr, setAllCardsArr] = useState(favArray);

  const handleClickFoodDrink = () => {
    setFoodDrinkFilter(!foodDrinkFilter);
  };

  const handleClickCulture = () => {
    setCultureFilter(!cultureFilter);
  };

  const handleClickOther = () => {
    setOtherFilter(!otherFilter);
  };

  const applyFoodDrinkFilter = foodDrinkFilter ? "filter--active" : "filter";
  const applyCultureFilter = cultureFilter ? "filter--active" : "filter";
  const applyOtherFilter = otherFilter ? "filter--active" : "filter";

  const filteredCard = (foodDrinkFilter, cultureFilter, otherFilter) => {
    const filteredArr = favArray.filter(
      (fav) =>
        (foodDrinkFilter ? fav.category.includes("Food & Drink") : true) &&
        (cultureFilter ? fav.category.includes("Culture") : true) &&
        (otherFilter ? fav.category.includes("Other") : true)
    );
    return setAllCardsArr(filteredArr);
  };

  useEffect(() => {
    filteredCard(foodDrinkFilter, cultureFilter, otherFilter);
  }, [foodDrinkFilter, cultureFilter, otherFilter]);

  return (
    <div className="filter__list">
      <Button
        buttonText={"FOOD & DRINK"}
        buttonName={applyFoodDrinkFilter}
        onClick={handleClickFoodDrink}
      />
      <Button
        buttonText={"CULTURE"}
        buttonName={applyCultureFilter}
        onClick={handleClickCulture}
      />
      <Button
        buttonText={"OTHER"}
        buttonName={applyOtherFilter}
        onClick={handleClickOther}
      />
    </div>
  );
};

export default Filter;
