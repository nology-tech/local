import "./HomeListView.scss";
import Card from "../../components/Card/Card";
import Layout from "../../components/Layout/Layout";
import Filter from "../../components/Filter/Filter";
import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import TextField from "../../components/TextField/TextField";
import MapIcon from "../../assets/icons/mapMarkerIcon.svg";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import businessArr from "../Home/Home";
import handleSaveToFavourites from "../Home/Home";
const HomeListView = () => {
  const { user } = useContext(UserContext);
  if (user === null) {
    return <p>loading...</p>;
  }
  const [homeBusinessArray, sethomeBusinessArray] = useState(businessArr);

  return (
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
          placeholderText="e.g. CH451HE"
        />

        <Link to="../*" className="home-list-view__link--map-view">
          <Button buttonName="map-view" buttonText="Map View" />
        </Link>
      </div>

      <main className="home-list-view__container">
        <Filter
          favArray={homeBusinessArray}
          setAllCardsArr={sethomeBusinessArray}
        />
        <Card
          cardArray={homeBusinessArray}
          page="home-list-view"
          primaryButtonOnClick={handleSaveToFavourites}
        />
      </main>
    </Layout>
  );
};
export default HomeListView;
