import { customRender } from "../../utils/testUtils";
import Favourites from "./Favourites";

it("should render the text on the display", () => {
  const { container } = customRender(<Favourites />);

  expect(container).toMatchSnapshot();
});
