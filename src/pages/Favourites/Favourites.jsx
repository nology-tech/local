import Card from "../../components/Card/Card";
import Layout from "../../components/Layout/Layout";
import DropDown from "../../components/DropDown/DropDown";
import Filter from "../../components/Filter/Filter";
import favArray from "../../data/favourites";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

const Favourites = () => {
  const Favourites = () => {
    const { user } = useContext(UserContext);
    if (user === null) {
      return <p>loading...</p>;
    }
  };

  const optionsArr = [
    "All",
    "London",
    "Birmingham",
    "Chester",
    "Oxford",
    "Newcastle",
    "Liverpool",
  ];

  const onChange = (location) => {
    console.log(location);
  };

  return (
    <Layout isWithMenu={true}>
      <DropDown onChange={onChange} options={optionsArr} />
      <Filter favArray={favArray} />
      <Card cardArray={user.favourites} />
    </Layout>
  );
};
export default Favourites;
