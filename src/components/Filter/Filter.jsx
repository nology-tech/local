import "./Filter.scss";
import Button from "../Button/Button";
import favArray from "../../data/favourites";
import { useState } from "react";

const Filter = () => {
  const [foodDrinkFilter, setFoodDrinkFilter] = useState(false);
  const [cultureFilter, setCultureFilter] = useState(false);
  const [otherFilter, setOtherFilter] = useState(false);

  const handleClickFoodDrink = () => {
    setFoodDrinkFilter(!foodDrinkFilter);
  };

  const handleClickCulture = () => {
    setCultureFilter(!cultureFilter);
  };

  const handleClickOther = () => {
    setOtherFilter(!otherFilter);
  };

  const favFilter = favArray.filter((fav) => {
    if (foodDrinkFilter === true) {
      return fav.category.includes("Food & Drink");
    } else if (cultureFilter === true) {
      return fav.category.includes("Culture");
    } else if (otherFilter === true) {
      return fav.category.includes("Other");
    }
  });

  const FavCardJSX = favFilter.map((card) => {
    return (
      <div key={card.id}>
        <h2>{card.name}</h2>
        <p>{card.description}</p>
        <p>{card.address}</p>
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
