import Card from "../../components/Card/Card";
import Layout from "../../components/Layout/Layout";
import DropDown from "../../components/DropDown/DropDown";
import Filter from "../../components/Filter/Filter";
import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import { handleUserFavouritesUpdate } from "../../api/userService";

const Favourites = () => {
  const { user } = useContext(UserContext);
  const [allCardsArr, setAllCardsArr] = useState(user?.favourites ?? []);

  if (user === null) {
    return <p>loading...</p>;
  }

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
      <DropDown onChange={onChange} options={optionsArr} />
      <Filter favArray={user.favourites} setAllCardsArr={setAllCardsArr} />
      <Card
        cardArray={allCardsArr}
        primaryButtonOnClick={handleRemoveFavourites}
      />
    </Layout>
  );
};
export default Favourites;
