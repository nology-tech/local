import FavouritesCard from "../../components/FavouritesCard/FavouritesCard";
import Layout from "../../components/Layout/Layout";
import DropDown from "../../components/DropDown/DropDown";
import Filter from "../../components/Filter/Filter";
import favArray from "../../data/favourites";

const Favourites = () => {
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
    <Layout>
      <DropDown onChange={onChange} options={optionsArr} />
      <Filter favArray={favArray} />
      <FavouritesCard />
    </Layout>
  );
};

export default Favourites;
