import "./DetailsPane.scss";
import Button from "../Button/Button";

const DetailsPane = ({ onClick, card, buttonName, buttonText }) => {
  return (
    <div className="details-pane" key={card.id}>
      <div className="details-pane__container">
        <div className="details-pane__header">
          <h2>{card.name}</h2>
          <Button buttonText="✖" buttonName="close" onClick={onClick} />
        </div>
        <p>{card.description}</p>
        <p>{card.weekdayOpening}</p>
        <p>{card.weekendOpening}</p>
        <p>{card.address}</p>
        <p>{card.price}</p>
        <p>{card.image}</p>
        <div className="details-pane__save-btn-container">
          <Button
            buttonText={buttonText}
            buttonName={buttonName}
            page="favourites"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsPane;
