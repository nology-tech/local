import "./FavDetails.scss";
import Button from "../Button/Button";
// import { useEffect } from "react";

const FavDetails = ({ onClick, favArray }) => {
  const showDetails = favArray.map((modal) => {
    return (
      <div className="favDetails" key={modal.id}>
        <div className="favDetails__Container">
          <div className="favDetails__Header">
            <h2>{modal.name}</h2>
            <Button buttonText="✖" buttonName="Close" onClick={onClick} />
          </div>
          <p>{modal.description}</p>
          <p>{modal.weekdayOpening}</p>
          <p>{modal.weekendOpening}</p>
          <p>{modal.address}</p>
          <p>{modal.price}</p>
          <p>{modal.image}</p>
          <div className="favDetails__SaveBtnContainer">
            <Button buttonText="Save" buttonName="Save" />
          </div>
        </div>
      </div>
    );
  });
  return showDetails;
};

export default FavDetails;
