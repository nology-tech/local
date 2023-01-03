import FavouritesCard from "./FavouritesCard";
import { customRender } from "../../utils/testUtils";

it("should render the text on the display", () => {
  const { container } = customRender(
    <FavouritesCard>
      <p>Hello there</p>
    </FavouritesCard>
  );

  expect(container).toMatchSnapshot();
});
