import Layout from "../../components/Layout/Layout";
import Carousel from "../../components/Carousel/Carousel";
import Card from "../../components/Card/Card";
import { useEffect, useState } from "react";
import { getInRadius } from "../../api/placeService";

const Home = () => {
  const [businessArr, setBusinessArr] = useState([]);

  if (businessArr === null) {
    return <p>loading...</p>;
  }

  const getData = async () => {
    const data = await getInRadius("CH451HE", 5);
    setBusinessArr(data);
  };
  console.log(businessArr);

  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout isWithMenu={true}>
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
