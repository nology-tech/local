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
  const handleUpdateDropDownCardsUpdate = (location) => {
    let dropDownFilteredArray = [];
    if (location == "All") {
      setAllCardsArr(user.favourites);
    } else {
      dropDownFilteredArray = user.favourites.filter(
        (element) => element.location.city === location
      );
      setAllCardsArr(dropDownFilteredArray);
    }
  };
  if (user === null) {
    return <p>loading...</p>;
  }
  const getDropDownMenuOptions = () => {
    const userFavouritesLocationArray = user.favourites.map((favourite) => {
      return favourite.location.city;
    });
    const uniqueUserFavouritesLocationArray = [
      ...new Set(userFavouritesLocationArray),
    ];

    const dropDownOptions = [
      "All",
      ...uniqueUserFavouritesLocationArray.sort(),
    ];
    return dropDownOptions;
  };
  const handleRemoveFavourites = (card) => {
    const updatedUserFavourites = user.favourites.filter(
      (element) => element._id !== card._id
    );
    setAllCardsArr(updatedUserFavourites);
    handleUserFavouritesUpdate(updatedUserFavourites, user);
  };

  return (
    <Layout isWithMenu={true}>
      <main className="favourites__container">
        <DropDown
          onChange={handleUpdateDropDownCardsUpdate}
          options={getDropDownMenuOptions()}
        />

        <Filter favArray={user.favourites} setAllCardsArr={setAllCardsArr} />
        <Card
          isWithAddress={true}
          cardArray={allCardsArr}
          primaryButtonOnClick={handleRemoveFavourites}
          page="favourites"
        />
      </main>
    </Layout>
  );
};
export default Favourites;
