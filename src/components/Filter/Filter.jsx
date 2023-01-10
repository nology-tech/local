import "./Filter.scss";
import Button from "../Button/Button";
import { useEffect, useState } from "react";

const Filter = ({ favArray = [] }) => {
  const [foodDrinkFilter, setFoodDrinkFilter] = useState(false);
  const [cultureFilter, setCultureFilter] = useState(false);
  const [otherFilter, setOtherFilter] = useState(false);
  const [allCardsArr, setallCardsArr] = useState(favArray);

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
    console.log(foodDrinkFilter, cultureFilter, otherFilter);
    const filteredArr = favArray.filter(
      (fav) =>
        (foodDrinkFilter ? fav.category.includes("Food & Drink") : true) &&
        (cultureFilter ? fav.category.includes("Culture") : true) &&
        (otherFilter ? fav.category.includes("Other") : true)
    );
    return setallCardsArr(filteredArr);
  };

  useEffect(() => {
    filteredCard(foodDrinkFilter, cultureFilter, otherFilter);
  }, [foodDrinkFilter, cultureFilter, otherFilter]);

  const FavCardJSX = allCardsArr.map((card) => {
    return (
      <div key={card.id}>
        <h2>{card.name}</h2>
        <p>{card.description}</p>
        <p>{card.address}</p>
        <p>{card.category}</p>
      </div>
    );
  });

  return (
    <div>
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
      {FavCardJSX}
    </div>
  );
};

export default Filter;
