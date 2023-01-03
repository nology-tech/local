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

  return (
    <div>
      <div>
        <div>
          <h2>{array_fav.name}</h2>
          <img src="" alt="" />
        </div>
      </div>
      <p>description</p>
      <h2>Address</h2>
      <div>
        <button>Save</button>
        <button>Detail</button>
      </div>
    </div>
  );
};

export default FavouritesCard;
