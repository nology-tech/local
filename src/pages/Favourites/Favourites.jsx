import Card from "../../components/Card/Card";
import Layout from "../../components/Layout/Layout";
import DropDown from "../../components/DropDown/DropDown";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import { handleUserFavouritesUpdate } from "../../api/userService";
const Favourites = () => {
  const { user } = useContext(UserContext);
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
      <Card
        cardArray={user.favourites}
        handleRemoveFavourites={handleRemoveFavourites}
      />
    </Layout>
  );
};
export default Favourites;
