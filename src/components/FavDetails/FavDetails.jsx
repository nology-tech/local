import "./FavDetails.scss";
import Button from "../Button/Button";
const FavDetails = ({ onClick }) => {
  const arrayDetails = [
    {
      id: "0",
      name: "1Ruebens Coffee Shop",
      paragraph:
        "Mom and Pop chain serving sandwhiches and stuff. Poppy seed bagels are nice as are seaseme seed bagel e.t.c.",
      weekdayOpening: "MON-FRI : 9:00 - 19:00",
      weekendOpening: "Sat : 10:00 - 15:00",
      place: "123 Fake Street, Covent Garden, London",
      price: "££",
      image: " IMAGE INSERT HERE ",
    },
    {
      id: "1",
      name: "2Ruebens Hot Choccy Shop",
      paragraph:
        "Mom and Pop chain serving sandwhiches and stuff. Poppy seed bagels are nice as are seaseme seed bagel e.t.c.",
      weekdayOpening: "MON-FRI : 9:00 - 19:00",
      weekendOpening: "Sat : 10:00 - 15:00",
      place: "123 Fake Street, Covent Garden, London",
      price: "££",
      image: " IMAGE INSERT HERE ",
    },
    {
      id: "2",
      name: "3Ruebens Shop",
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
      <div className="favDetails" key={modal.id}>
        <div className="favDetails__Container">
          <div className="favDetails__Header">
            <h2>{modal.name}</h2>
            <Button buttonText="X" buttonName="Close" onClick={onClick} />
          </div>
          <p>{modal.paragraph}</p>
          <p>{modal.weekdayOpening}</p>
          <p>{modal.weekendOpening}</p>
          <p>{modal.place}</p>
          <p>{modal.price}</p>
          <p>{modal.image}</p>
          <div>
            <Button buttonText="Save" buttonName="Save" />
          </div>
        </div>
      </div>
    );
  });
  return showDetails;
};

export default FavDetails;
