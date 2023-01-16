import Button from "../../components/Button/Button";
import Layout from "../../components/Layout/Layout";
import Carousel from "../../components/Carousel/Carousel";
import Card from "../../components/Card/Card";
import "./Home.scss";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { getInRadius } from "../../api/placeService";
import { handleAddToUserFavourites } from "../../api/userService";

import UserContext from "../../context/UserContext";

const Home = () => {
  const { user } = useContext(UserContext);
  const [businessArr, setBusinessArr] = useState([]);
  if (businessArr === null) {
    return <p>loading...</p>;
  }

  const getData = async () => {
    const data = await getInRadius("CH451HE", 5);
    setBusinessArr(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handlesaveToFavourites = (cardId) => {
    handleAddToUserFavourites(cardId, user);
  };

  return (
    <Layout isWithMenu={true}>
      <div className="home__map-buttons">
        <Button buttonName="map-navigation-zoom" buttonText="+" />
        <Button buttonName="map-navigation-zoom" buttonText="-" />
        <Link to="./list-view" className="home__link--list-view">
          <Button buttonName="map-navigation" buttonText="List View" />
        </Link>
      </div>

      <h1>Page Heading</h1>
      <h2>Section Heading</h2>
      <h3>Panel Heading</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non error
        dolor in nostrum minima odio a fuga saepe soluta adipisci perspiciatis
        maxime tempora, temporibus beatae voluptas repellat rerum. Dignissimos,
        necessitatibus.
      </p>
      {businessArr?.length > 1 && (
        <Carousel
          componentToDisplay={
            <Card
              cardArray={businessArr}
              page="home"
              primaryButtonOnClick={handlesaveToFavourites}
            />
          }
        />
      )}
    </Layout>
  );
};
export default Home;
