import Button from "../../components/Button/Button";
import Layout from "../../components/Layout/Layout";
import Carousel from "../../components/Carousel/Carousel";
import Card from "../../components/Card/Card";
import { useEffect, useState } from "react";
import "./Home.scss";

const Home = () => {
  const [businessArr, setBusinessArr] = useState([]);

  const getBusiness = async () => {
    let response = await fetch(
      "https://place-api.herokuapp.com/api/v1/places/locationsearch/CH451HE/5"
    );
    const data = await response.json();
    setBusinessArr(data);
  };

  useEffect(() => {
    getBusiness();
  }, []);

  if (businessArr === null) {
    return <p>loading...</p>;
  }

  return (
    <Layout isWithMenu={true}>
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
      {businessArr.data?.length > 1 && (
        <Carousel componentToDisplay={<Card cardArray={businessArr.data} />} />
      )}
    </Layout>
  );
};
export default Home;
