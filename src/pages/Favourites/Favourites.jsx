import BusinessCard from "../../components/BusinessCard/BusinessCard";
import Layout from "../../components/Layout/Layout";
import favArray from "../../data/favourites/favourites";

const Favourites = () => {
  return (
    <Layout isWithMenu={true}>
      <BusinessCard businessCardArray={favArray} />
    </Layout>
  );
};

export default Favourites;
