import Button from "../../components/Button/Button";
import Layout from "../../components/Layout/Layout";
import Carousel from "../../components/Carousel/Carousel";
import Card from "../../components/Card/Card";
import TextField from "../../components/TextField/TextField";
import "./Home.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getInRadius } from "../../api/placeService";
import MapIcon from "../../assets/icons/mapMarkerIcon.svg";
// import Filter from "../../components/Filter/Filter";

const Home = () => {
  const [businessArr, setBusinessArr] = useState([]);
  const [searchPostCode, setSearchPostCode] = useState("");

  if (businessArr === null) {
    return <p>loading...</p>;
  }

  // const [allCardsArr, setAllCardsArr] = useState(businessArr);

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

  return (
    <Layout isWithMenu={true}>
      <div className="home">
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
        </div>

        {/* <Filter favArray={businessArr} setAllCardsArr={setAllCardsArr} /> */}
        <div>
          <div className="home__map-buttons">
            <Button buttonName="map-navigation-zoom" buttonText="+" />
            <Button buttonName="map-navigation-zoom" buttonText="-" />
            <Link to="./list-view" className="home__link--list-view">
              <Button buttonName="map-navigation" buttonText="List View" />
            </Link>
          </div>
          {businessArr?.length > 1 && (
            <Carousel
              componentToDisplay={<Card cardArray={businessArr} page="home" />}
            />
          )}
        </div>
      </div>
    </Layout>
  );
};
export default Home;
