import { useContext } from "react";
import UserContext from "../../context/UserContext";
// import BusinessCard from "../BusinessCard/BusinessCard";
import "./Carousel.scss";

const Carousel = ({ componentToDisplay }) => {
  const { user } = useContext(UserContext);
  if (user === null) {
    return <p>loading...</p>;
  }
  //   const { componentArr } = props;

  //   const [counter, setCounter] = useState(0);

  //   const handleIncrement = () => {
  //     if (counter === componentArr.length - 1) {
  //       setCounter(0);
  //     } else {
  //       setCounter(counter + 1);
  //     }
  //   };

  //   const handleDecrement = () => {
  //     if (counter === 0) {
  //       setCounter(componentArr.length - 1);
  //     } else {
  //       setCounter(counter - 1);
  //     }
  //   };

  return (
    <div className="carousel">
      {componentToDisplay}
      {/* <BusinessCard businessCardArray={user.favourites} /> */}
    </div>
  );
};

export default Carousel;
