import { useState } from "react";
import Button from "../Button/Button";
import DetailsPane from "../DetailsPane/DetailsPane";
import "./BusinessCard.scss";
import Fork from "../../assets/images/forkIcon.svg";
import Paint from "../../assets/images/paintIcon.svg";
import Other from "../../assets/images/other.svg";

const BusinessCard = ({ businessCardArray }) => {
  const [activeDetails, setActiveDetails] = useState(null);

  const showCards = businessCardArray.map((card) => {
    const getCardImage = (cardCategory) => {
      let cardImage = `${Other}`;
      if (cardCategory == "Food & Drink") {
        cardImage = `${Fork}`;
      } else if (cardCategory == "Culture") {
        cardImage = `${Paint}`;
      }
      return cardImage;
    };

    const getCardHeaderStyle = (cardCategory) => {
      let cardHeadingClass = `card__heading`;
      switch (cardCategory) {
        case "Food & Drink":
          cardHeadingClass = `card__heading card__heading--food`;
          break;
        case "Culture":
          cardHeadingClass = `card__heading card__heading--culture`;
          break;

        default:
          cardHeadingClass = `card__heading`;
          break;
      }
      return cardHeadingClass;
    };

    return (
      <div className="card" key={card.id}>
        <div className="card__header-container">
          <h2 className={getCardHeaderStyle(card.category)}>{card.name}</h2>
          <div className="card__image-container">
            <img
              src={getCardImage(card.category)}
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

export default BusinessCard;
