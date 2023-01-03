import "./FavouritesCard.scss";
import { useEffect } from "react";

const FavouritesCard = () => {
  useEffect(() => {
    // only runs once
    newFav();
  }, []);

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

  const newFav = array_fav.map((card) => {
    console.log(card);
    return card;
  });
};

export default FavouritesCard;
