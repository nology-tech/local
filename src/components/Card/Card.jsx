import { useState } from "react";
import cardCategories from "../../data/favourites/cardCategoryData/cardCategories";
import Button from "../Button/Button";
import DetailsPane from "../DetailsPane/DetailsPane";

import "./Card.scss";

const Card = ({
  cardArray = [],
  isWithAddress,
  primaryButtonOnClick,
  page,
}) => {
  const [activeDetails, setActiveDetails] = useState(null);

  const getDescription = (description, website) => {
    if (!description)
      return `No description, try ${
        website ?? "searching the name and postcode"
      }`;

    if (activeDetails) return description;

    const lastSentenceIndex = description.indexOf(".", 2) + 1;
    const shortenedDescription = description.substring(0, lastSentenceIndex);

    return shortenedDescription;
  };

  const cardClassName = page ? `card card--${page}` : "card";
  const getButtonType = (page, isButtonText) => {
    const isFavouritesPage = page === "Favourites" ? "remove" : "save";
    let buttonName = isFavouritesPage;
    let buttonText =
      isFavouritesPage.charAt(0).toUpperCase() + isFavouritesPage.slice(1);

    return isButtonText ? buttonText : buttonName;
  };

  const showCards = cardArray.map((card) => {
    const handleButtonData = page ? card : "card._id";
    const description = getDescription(card?.description, card?.website);
    return (
      <div className={cardClassName} key={card._id}>
        <div className="card__header-container">
          <h2
            className={`card__heading card__heading--${
              cardCategories[card.category]?.categoryName ??
              cardCategories["Other"].categoryName
            }`}
          >
            {card.placename}
          </h2>
          <div className="card__image-container">
            <img
              src={cardCategories[card.category]?.image}
              alt=""
              className="card__image"
            />
          </div>
        </div>
        <p className="card__text">{description}</p>
        {isWithAddress && (
          <p className="card__text card__text--adress">{card.address}</p>
        )}
        <div className="card__buttons-container">
          <Button
            buttonName="details"
            buttonText="Details"
            onClick={() => setActiveDetails(card)}
          />
          <Button
            buttonName={getButtonType(page)}
            buttonText={getButtonType(page, true)}
            onClick={() => primaryButtonOnClick(handleButtonData)}
          />
        </div>
      </div>
    );
  });
  return (
    <>
      {showCards}
      {activeDetails && (
        <DetailsPane
          card={activeDetails}
          onClick={() => setActiveDetails(null)}
          buttonName={getButtonType(page)}
          buttonText={getButtonType(page, true)}
        />
      )}
    </>
  );
};

export default Card;
