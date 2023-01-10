import FavouritesCard from "../../components/FavouritesCard/FavouritesCard";
import Layout from "../../components/Layout/Layout";
import DropDown from "../../components/DropDown/DropDown";

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

      <FavouritesCard />
    </Layout>
  );
};

export default Favourites;
