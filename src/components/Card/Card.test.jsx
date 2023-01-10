import { customRender } from "../../utils/testUtils";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Card from "./Card";
import favArray from "../../data/favourites/favourites";

it("should render the text on the display", () => {
  const { container } = customRender(<Card cardArray={favArray} />);

  expect(container).toMatchSnapshot();
});

it("should check if the click of the details button shows the details pane", () => {
  //load the page
  customRender(<Card cardArray={favArray} />);
  //get the button
  const button = screen.getAllByRole("button");
  //on click of the button
  userEvent.click(button[0]);
  const saveButton = screen.getByText("Save");
  //expect the details pane to appear
  expect(saveButton).toBeInTheDocument();
});
