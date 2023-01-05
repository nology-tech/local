import "./DetailsPane.scss";
import Button from "../Button/Button";

const DetailsPane = ({ onClick, card }) => {
  return (
    <div className="detailsPane" key={card.id}>
      <div className="detailsPane__Container">
        <div className="detailsPane__Header">
          <h2>{card.name}</h2>
          <Button buttonText="✖" buttonName="Close" onClick={onClick} />
        </div>
        <p>{card.description}</p>
        <p>{card.weekdayOpening}</p>
        <p>{card.weekendOpening}</p>
        <p>{card.address}</p>
        <p>{card.price}</p>
        <p>{card.image}</p>
        <div className="detailsPane__SaveBtnContainer">
          <Button buttonText="Save" buttonName="Save" />
        </div>
      </div>
    </div>
  );
};

export default DetailsPane;
