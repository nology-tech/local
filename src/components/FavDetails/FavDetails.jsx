const FavDetails = () => {
  const arrayDetails = [
    {
      id: "0",
      name: "Ruebens Coffee Shop",
      paragraph:
        "Mom and Pop chain serving sandwhiches and stuff. Poppy seed bagels are nice as are seaseme seed bagel e.t.c.",
      weekdayOpening: "MON-FRI : 9:00 - 19:00",
      weekendOpening: "Sat : 10:00 - 15:00",
      place: "123 Fake Street, Covent Garden, London",
      price: "££",
      image: " IMAGE INSERT HERE ",
    },
  ];

  const showDetails = arrayDetails.map((modal) => {
    return (
      <div key={modal.id}>
        <h2>{modal.name}</h2>
        <p>{modal.paragraph}</p>
        <p>{modal.weekdayOpening}</p>
        <p>{modal.weekendOpening}</p>
        <p>{modal.place}</p>
        <p>{modal.price}</p>
        <p>{modal.image}</p>
        <div>
          <DetailsButton />
        </div>
      </div>
    );
  });
  return showDetails;
};
