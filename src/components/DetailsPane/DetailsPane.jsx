import "./DetailsPane.scss";
import Button from "../Button/Button";
import placeHolderImage from "../../assets/images/cafe-placeholder.jpg";
const DetailsPane = ({
  onClick,
  card: {
    _id,
    description,
    weekdayOpening,
    weekendOpening,
    name,
    address,
    price,
  },
}) => {
  return (
    <div className="details-pane" key={_id}>
      <div className="details-pane__container">
        <div className="details-pane__header">
          <h2>{name}</h2>
          <Button buttonText="✖" buttonName="close" onClick={onClick} />
        </div>
        <p className="details-pane__text">{description}</p>
        <p className="details-pane__text">{weekdayOpening}</p>
        <p className="details-pane__text">{weekendOpening}</p>
        <p className="details-pane__text">{address}</p>
        <p className="details-pane__text">{price}</p>
        <div className="details-pane__images-container">
          <img
            className="details-pane__image"
            src={placeHolderImage}
            alt={`an image from ${name}'s website`}
          />
          <img
            className="details-pane__image"
            src={placeHolderImage}
            alt={`an image from ${name}'s website`}
          />
        </div>
        <div className="details-pane__save-btn-container">
          <Button buttonText="Save" buttonName="save" />
        </div>
      </div>
    </div>
  );
};

export default DetailsPane;
