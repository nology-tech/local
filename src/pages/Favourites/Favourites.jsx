import Card from "../../components/Card/Card";
import Layout from "../../components/Layout/Layout";
import DropDown from "../../components/DropDown/DropDown";
import Filter from "../../components/Filter/Filter";
import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import { handleUserFavouritesUpdate } from "../../api/userService";

const Favourites = () => {
  const { user } = useContext(UserContext);
  if (user === null) {
    return <p>loading...</p>;
  }

  const [allCardsArr, setAllCardsArr] = useState(user.favourites);

  const optionsArr = [
    "All",
    "London",
    "Birmingham",
    "Chester",
    "Oxford",
    "Newcastle",
    "Liverpool",
  ];

  const handleRemoveFavourites = (cardId) => {
    let localUserFavouritesArray = user.favourites;

    const updatedUserFavourites = localUserFavouritesArray.filter(
      (element) => element._id !== cardId
    );
    handleUserFavouritesUpdate(updatedUserFavourites, user.id);
  };

  const onChange = (location) => {
    console.log(location);
  };

  return (
    <Layout isWithMenu={true}>
      <DropDown onChange={onChange} options={optionsArr} />
      <Filter favArray={user.favourites} setAllCardsArr={setAllCardsArr} />
      <Card
        cardArray={allCardsArr}
        handleRemoveFavourites={handleRemoveFavourites}
      />
    </Layout>
  );
};
export default Favourites;
