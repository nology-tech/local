import "./FavDetails.scss";
import Button from "../Button/Button";

const FavDetails = ({ onClick, card }) => {
  return (
    <div className="favDetails" key={card.id}>
      <div className="favDetails__Container">
        <div className="favDetails__Header">
          <h2>{card.name}</h2>
          <Button buttonText="✖" buttonName="Close" onClick={onClick} />
        </div>
        <p>{card.description}</p>
        <p>{card.weekdayOpening}</p>
        <p>{card.weekendOpening}</p>
        <p>{card.address}</p>
        <p>{card.price}</p>
        <p>{card.image}</p>
        <div className="favDetails__SaveBtnContainer">
          <Button buttonText="Save" buttonName="Save" />
        </div>
      </div>
    </div>
  );
};

export default FavDetails;
