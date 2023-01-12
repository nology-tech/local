import { useState } from "react";
import Button from "../Button/Button";
import DetailsPane from "../DetailsPane/DetailsPane";
import "./Card.scss";
import cardCategories from "../../data/favourites/cardCategoryData/cardCategories";

const Card = ({ cardArray = [], primaryButtonOnClick }) => {
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

  const showCards = cardArray.map((card) => {
    const description = getDescription(card?.description, card?.website);

    return (
      <div className="card" key={card._id}>
        <div className="card__header-container">
          <h2
            className={`card__heading card__heading--${
              cardCategories[card.category].categoryName ??
              cardCategories["Other"].categoryName
            }`}
          >
            {card.placename}
          </h2>
          <div className="card__image-container">
            <img
              src={cardCategories[card.category].image}
              alt=""
              className="card__image"
            />
          </div>
        </div>
        <p className="card__text">{description}</p>
        <p className="card__text card__text--adress">{card.address}</p>
        <div className="card__buttons-container">
          <Button
            buttonName="details"
            buttonText="Details"
            onClick={() => setActiveDetails(card)}
          />
          <Button
            buttonName="remove"
            buttonText="Remove"
            onClick={() => primaryButtonOnClick(card._id)}
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
        />
      )}
    </>
  );
};

export default Card;
