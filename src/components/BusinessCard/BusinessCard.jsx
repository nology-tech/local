import { useState } from "react";
import Button from "../Button/Button";
import DetailsPane from "../DetailsPane/DetailsPane";
import "./BusinessCard.scss";

const BusinessCard = () => {
  const [activeDetails, setActiveDetails] = useState(null);

  const favArray = [
    {
      id: "0",
      name: "Smith & Sons",
      description: "Mom and Pop chain serving sandwhiches",
      weekdayOpening: "MON-FRI : 9:00 - 19:00",
      weekendOpening: "Sat : 10:00 - 15:00",
      address: "32 Camden Hill, Eeling, London",
      price: "£££££",
      image: " INSERT IMAGE HERE ",
    },
    {
      id: "1",
      name: "Dirty Onion",
      description: "Irish Bar, Great guines on tap. Live music on saturdays.",
      weekdayOpening: "MON-FRI : 9:00 - 19:00",
      weekendOpening: "Sat : 10:00 - 15:00",
      address: "36 Lamden Hill, Eeling, London",
      price: "£",
      image: " INSERT IMAGE HERE ",
    },
    {
      id: "2",
      name: "Gunners art gallery",
      description: "I SELL ART & STUFF",
      weekdayOpening: "MON-FRI : 9:00 - 19:00",
      weekendOpening: "Sat : 10:00 - 15:00",
      address: "112 Backden Hill, Eeling, London",
      price: "£££",
      image: " INSERT IMAGE HERE ",
    },
  ];

  const showCards = favArray.map((card) => {
    return (
      <div key={card.id}>
        <h2>{card.name}</h2>
        <p>{card.description}</p>
        <p>{card.address}</p>
        <div>
          <Button
            buttonName="Details"
            buttonText="Details"
            onClick={() => setActiveDetails(card)}
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
      ;
    </>
  );
};

export default BusinessCard;
