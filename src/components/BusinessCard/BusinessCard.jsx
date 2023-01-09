import { useState } from "react";
import Button from "../Button/Button";
import DetailsPane from "../DetailsPane/DetailsPane";

const BusinessCard = ({ businessCardArray }) => {
  const [activeDetails, setActiveDetails] = useState(null);
  const showCards = businessCardArray.map((card) => {
    return (
      <div key={card._id}>
        <h2>{card.name}</h2>
        <p>{card.description}</p>
        <p>{card.address}</p>
        <div>
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
