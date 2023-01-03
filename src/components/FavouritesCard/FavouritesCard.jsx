import "./FavouritesCard.scss";

const FavouritesCard = () => {
  const arrayFav = [
    {
      id: "0",
      name: "Smith & Sons",
      paragraph: "Mom and Pop chain serving sandwhiches",
      place: "32 Camden Hill, Eeling, London",
    },
    {
      id: "1",
      name: "Dirty Onion",
      paragraph: "Irish Bar, Great guines on tap. Live music on saturdays.",
      place: "36 Lamden Hill, Eeling, London",
    },
    {
      id: "2",
      name: "Gunners art gallery",
      paragraph: "Mom and Pop chain serving sandwhiches",
      place: "112 Backden Hill, Eeling, London",
    },
  ];

  const newFav = arrayFav.map((card) => {
    return (
      <div key={card.id}>
        <h2>{card.name}</h2>
        <p>{card.paragraph}</p>
        <p>{card.place}</p>
      </div>
    );
  });
  return newFav;
};

export default FavouritesCard;
