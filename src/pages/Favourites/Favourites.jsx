import { useContext, useState } from "react";
import { handleUserFavouritesUpdate } from "../../api/userService";
import Card from "../../components/Card/Card";
import DropDown from "../../components/DropDown/DropDown";
import Filter from "../../components/Filter/Filter";
import Layout from "../../components/Layout/Layout";
import UserContext from "../../context/UserContext";
import "./Favourites.scss";

const Favourites = () => {
  const { user } = useContext(UserContext);
  const [allCardsArr, setAllCardsArr] = useState(user?.favourites ?? []);

  if (user === null) {
    return <p>loading...</p>;
  }
  const userFavouriteLocations = () => {
    let baseArray = ["All"];
    const currentUserFavourites = user.favourites.map((favourite) => {
      return favourite.location.city;
    });
    return baseArray.concat(currentUserFavourites);
  };
  const handleRemoveFavourites = (cardId) => {
    const updatedUserFavourites = user.favourites.filter(
      (element) => element._id !== cardId
    );
    setAllCardsArr(updatedUserFavourites);
    handleUserFavouritesUpdate(updatedUserFavourites, user);
  };

  const onChange = (location) => {
    console.log(location);
  };

  return (
    <Layout isWithMenu={true}>
      <main className="favourites__container">
        <DropDown onChange={onChange} options={userFavouriteLocations()} />

        <Filter favArray={user.favourites} setAllCardsArr={setAllCardsArr} />
        <Card
          isWithAddress={true}
          cardArray={allCardsArr}
          primaryButtonOnClick={handleRemoveFavourites}
        />
      </main>
    </Layout>
  );
};
export default Favourites;
