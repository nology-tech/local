import Button from "../../components/Button/Button";
import Layout from "../../components/Layout/Layout";
import Carousel from "../../components/Carousel/Carousel";
import Card from "../../components/Card/Card";
import TextField from "../../components/TextField/TextField";
import { useEffect, useState } from "react";
import { getInRadius } from "../../api/placeService";

const Home = () => {
  const [businessArr, setBusinessArr] = useState([]);
  const [searchPostCode, setSearchPostCode] = useState("");

  if (businessArr === null) {
    return <p>loading...</p>;
  }

  const handleSearchInput = (event) => {
    const useSearchInput = event.target.value;
    setSearchPostCode(useSearchInput);
  };
  console.log(searchPostCode);

  useEffect(() => {
    getData(searchPostCode);
  }, [searchPostCode]);

  const getData = async (searchPostCode) => {
    // if (searchPostCode !== "") {
    const data = await getInRadius({ searchPostCode }, 5);
    setBusinessArr(data);
    // }
  };
  console.log(businessArr[0]);

  return (
    <Layout isWithMenu={true}>
      <div className="home-list-view__search--bar-container">
        {/* <img
          className="home-list-view__map-icon"
          src={MapIcon}
          type="image/svg+xml"
          alt="an icon of a map marker"
        /> */}

        <TextField
          uniqueId="location-search-bar"
          inputType="text"
          modifier="location-search-bar"
          placeholderText="Tooting, London, GB"
          onChange={handleSearchInput}
        />
      </div>

      <div className="home__map-buttons">
        <Button buttonName="map-navigation-zoom" buttonText="+" />
        <Button buttonName="map-navigation-zoom" buttonText="-" />
        <Button buttonName="map-navigation" buttonText="List View" />
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
        <Carousel componentToDisplay={<Card cardArray={businessArr} />} />
      )}
    </Layout>
  );
};
export default Home;
