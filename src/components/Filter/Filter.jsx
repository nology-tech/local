import "./Filter.scss";
import Button from "../Button/Button";
import favArray from "../../data/favourites";
import { useEffect, useState } from "react";

const Filter = () => {
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
      {FavCardJSX}
    </div>
  );
};

export default Filter;
