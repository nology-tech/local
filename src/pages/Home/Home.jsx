import Button from "../../components/Button/Button";
import Layout from "../../components/Layout/Layout";
import Carousel from "../../components/Carousel/Carousel";
import Card from "../../components/Card/Card";
import TextField from "../../components/TextField/TextField";
import "./Home.scss";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { getInRadius } from "../../api/placeService";
import MapIcon from "../../assets/icons/mapMarkerIcon.svg";
import Filter from "../../components/Filter/Filter";
import { handleAddToUserFavourites } from "../../api/userService";
import UserContext from "../../context/UserContext";

const Home = () => {
  const { user } = useContext(UserContext);
  const [businessArr, setBusinessArr] = useState([]);
  const [searchPostCode, setSearchPostCode] = useState("");
  const [allCardsArr, setAllCardsArr] = useState(businessArr ?? []);

  if (businessArr === null) {
    return <p>loading...</p>;
  }

  const handleSearchInput = (event) => {
    const useSearchInput = event.target.value;
    setSearchPostCode(useSearchInput);
  };

  useEffect(() => {
    getData(searchPostCode);
  }, [searchPostCode]);

  const getData = async (searchPostCode) => {
    if (searchPostCode !== "") {
      const data = await getInRadius(searchPostCode, 5);
      setBusinessArr(data);
    }
  };

  const handleSaveToFavourites = (cardId) => {
    handleAddToUserFavourites(cardId, user);
  };

  return (
    <Layout isWithMenu={true}>
      <div className="home__search--bar-container">
        <img
          className="home__map-icon"
          src={MapIcon}
          type="image/svg+xml"
          alt="an icon of a map marker"
        />

        <TextField
          uniqueId="location-search-bar"
          inputType="text"
          modifier="location-search-bar"
          placeholderText="Search by Postcode"
          onChange={handleSearchInput}
        />
      </div>
      <Filter favArray={allCardsArr} setAllCardsArr={setAllCardsArr} />
      <div className="home__map-buttons">
        <Link to="./list-view" className="home__link--list-view">
          <Button buttonName="map-navigation" buttonText="List View" />
        </Link>
        <Button buttonName="map-navigation-zoom" buttonText="+" />
        <Button buttonName="map-navigation-zoom" buttonText="-" />
      </div>
      {allCardsArr?.length > 1 && (
        <Carousel
          componentToDisplay={
            <Card
              cardArray={allCardsArr}
              page="home"
              primaryButtonOnClick={handleSaveToFavourites}
            />
          }
        />
      )}
    </Layout>
  );
};
export default Home;
