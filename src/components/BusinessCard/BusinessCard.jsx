import { useState } from "react";
import Button from "../Button/Button";
import DetailsPane from "../DetailsPane/DetailsPane";
import "./BusinessCard.scss";
import cardCategories from "../../data/favourites/cardCategoryData/cardCategories";

const BusinessCard = ({ businessCardArray }) => {
  const [activeDetails, setActiveDetails] = useState(null);

  const showCards = businessCardArray.map((card) => (
    <div className="card" key={card._id}>
      <div className="card__header-container">
        <h2
          className={`card__heading card__heading--${
            cardCategories[card.category].categoryName
          }`}
        >
          {card.name}
        </h2>
        <div className="card__image-container">
          <img
            src={cardCategories[card.category].image}
            alt=""
            className="card__image"
          />
        </div>
      </div>
      <p className="card__text">{card.description}</p>
      <p className="card__text card__text--adress">{card.address}</p>
      <div className="card__buttons-container">
        <Button
          buttonName="details"
          buttonText="Details"
          onClick={() => setActiveDetails(card)}
        />
        <Button buttonName="remove" buttonText="Remove" />
      </div>
    </div>
  ));
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

export default BusinessCard;
