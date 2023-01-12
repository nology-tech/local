import Button from "../../components/Button/Button";
import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";

const List = () => {
  return (
    <>
      <Layout isWithMenu={true}>
        <h1>List</h1>
        <Link to="*">
          <Button buttonName="map-navigation" buttonText="Map View" />
        </Link>
      </Layout>
    </>
  );
};
export default List;
