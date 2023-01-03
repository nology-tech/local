import React from "react";
import "./FavouritesCard.scss";

const FavouritesCard = () => {
  const array_fav = [
    {
      name: "Smith & Sons",
      paragraph: "Mom and Pop chain serving sandwhiches",
      place: "32 Camden Hill, Eeling, London",
    },
    {
      name: "Dirty Onion",
      paragraph: "Irish Bar, Great guines on tap. Live music on saturdays.",
      place: "36 Lamden Hill, Eeling, London",
    },
    {
      name: "Gunners art gallery",
      paragraph: "Mom and Pop chain serving sandwhiches",
      place: "112 Backden Hill, Eeling, London",
    },
  ];

  console.log(array_fav);
  return (
    <div>
      <button>Save</button>
      <button>Detail</button>
    </div>
  );
};

export default FavouritesCard;
