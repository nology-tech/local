import Home from "../../pages/Home/Home";
import { customRender } from "../../utils/testUtils";
import { screen } from "@testing-library/react";
import HomeListView from "../HomeListView/HomeListView";
import userEvent from "@testing-library/user-event";

it("should render a button on the screen", () => {
  customRender(<Home />);

  const buttononscreen = screen.getByRole("button", { name: "-" });

  expect(buttononscreen).toBeInTheDocument();
});

it("should render the text on the display", () => {
  const { container } = customRender(<Home />);

  expect(container).toMatchSnapshot();
});

it("should render the list view page when a user clicks list view", () => {
  customRender(<Home />);
  const { container } = customRender(<HomeListView />);
  const listViewLink = screen.getByText("List View");
  userEvent.click(listViewLink);
  expect(container).toBeInTheDocument();
});
