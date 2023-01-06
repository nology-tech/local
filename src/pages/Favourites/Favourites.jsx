import BusinessCard from "../../components/BusinessCard/BusinessCard";
import Layout from "../../components/Layout/Layout";
import favArray from "../../data/favourites/favourites";

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
      <BusinessCard businessCardArray={favArray} />
    </Layout>
  );
};

export default Favourites;
