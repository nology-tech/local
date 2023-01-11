import Layout from "../../components/Layout/Layout";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import Carousel from "../../components/Carousel/Carousel";
import Card from "../../components/Card/Card";

const Home = () => {
  const { user } = useContext(UserContext);
  if (user === null) {
    return <p>loading...</p>;
  }
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
      <Carousel componentToDisplay={<Card cardArray={user.favourites} />} />
    </Layout>
  );
};
export default Home;
