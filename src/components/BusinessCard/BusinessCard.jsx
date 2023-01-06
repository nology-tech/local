import { useState } from "react";
import Button from "../Button/Button";
import DetailsPane from "../DetailsPane/DetailsPane";
import "./BusinessCard.scss";
import Fork from "../../assets/images/forkIcon.svg";

const BusinessCard = ({ businessCardArray }) => {
  const [activeDetails, setActiveDetails] = useState(null);

  const showCards = businessCardArray.map((card) => {
    return (
      <div className="card" key={card.id}>
        <div className="card__header-container">
          <h2 className="card__heading">{card.name}</h2>
          <div className="card__image-container">
            <img src={Fork} alt="" className="card__image" />
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
          <Button buttonName="delete" buttonText="Delete" />
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
