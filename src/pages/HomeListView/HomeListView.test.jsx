import { customRender } from "../../utils/testUtils";
import HomeListView from "./HomeListView";
import Home from "../Home/Home";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

it("should render the text on the display", () => {
  const { container } = customRender(<HomeListView />);

  expect(container).toMatchSnapshot();
});

it("should render the home page when a user clicks map-view", () => {
  customRender(<HomeListView />);
  const { container } = customRender(<Home />);
  const mapViewLink = screen.getByText("Map View");
  userEvent.click(mapViewLink);
  expect(container).toBeInTheDocument();
});
