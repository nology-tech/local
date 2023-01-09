import BusinessCard from "../../components/BusinessCard/BusinessCard";
import Layout from "../../components/Layout/Layout";
import favArray from "../../data/favourites/favourites";
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
      <BusinessCard businessCardArray={favArray} />
    </Layout>
  );
};

export default Favourites;
