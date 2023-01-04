import FavouritesCard from "./FavouritesCard";
import { customRender } from "../../utils/testUtils";

it("should render the text on the display", () => {
  const { container } = customRender(
    <FavouritesCard/>
  );

  expect(container).toMatchSnapshot();
});
