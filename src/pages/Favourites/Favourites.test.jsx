import DetailsPane from "../../components/DetailsPane/DetailsPane";
import { customRender } from "../../utils/testUtils";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Favourites from "./Favourites";

it("should render the text on the display", () => {
  const { container } = customRender(<Favourites />);

  expect(container).toMatchSnapshot();
});
