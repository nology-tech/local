import Button from "../../components/Button/Button";
import Layout from "../../components/Layout/Layout";
import Carousel from "../../components/Carousel/Carousel";
import Card from "../../components/Card/Card";
import TextField from "../../components/TextField/TextField";
import "./Home.scss";
import { useEffect, useState, useContext } from "react";
import { getInRadius } from "../../api/placeService";
import { handleAddToUserFavourites } from "../../api/userService";
import Filter from "../../components/Filter/Filter";
import UserContext from "../../context/UserContext";
import MapIcon from "../../assets/icons/mapMarkerIcon.svg";

const Home = () => {
  const { user } = useContext(UserContext);
  const [businessArr, setBusinessArr] = useState([]);
  const [searchPostCode, setSearchPostCode] = useState("B5 4");
  const [isMapView, setIsMapView] = useState(true);
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

  const handleSaveToFavourites = (card) => {
    handleAddToUserFavourites(card, user);
  };

  return (
    <>
      {isMapView && (
        <>
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

            <div className="home__map-buttons">
              <Button buttonName="map-navigation-zoom" buttonText="+" />
              <Button buttonName="map-navigation-zoom" buttonText="-" />
              <Button
                buttonName="map-navigation"
                buttonText="List View"
                onClick={() => setIsMapView(false)}
              />
            </div>

            <h1>Page Heading</h1>
            <h2>Section Heading</h2>
            <h3>Panel Heading</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
              error dolor in nostrum minima odio a fuga saepe soluta adipisci
              perspiciatis maxime tempora, temporibus beatae voluptas repellat
              rerum. Dignissimos, necessitatibus.
            </p>
            {businessArr?.length > 1 && (
              <Carousel
                componentToDisplay={
                  <Card
                    cardArray={businessArr}
                    page="home"
                    primaryButtonOnClick={handleSaveToFavourites}
                  />
                }
              />
            )}
          </Layout>
        </>
      )}
      ;
      {!isMapView && (
        <>
          <Layout isWithMenu={true}>
            <div className="home-list-view__search--bar-container">
              <img
                className="home-list-view__map-icon"
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

              <Button
                buttonName="map-view"
                buttonText="Map View"
                onClick={() => setIsMapView(true)}
              />
            </div>

            <main className="home-list-view__container">
              <Filter favArray={businessArr} setAllCardsArr={setBusinessArr} />
              <Card
                cardArray={businessArr}
                page="home-list-view"
                primaryButtonOnClick={handleSaveToFavourites}
              />
            </main>
          </Layout>
        </>
      )}
      ;
    </>
  );
};
export default Home;
