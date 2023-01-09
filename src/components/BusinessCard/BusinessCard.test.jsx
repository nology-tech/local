import { customRender } from "../../utils/testUtils";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BusinessCard from "./BusinessCard";
import favArray from "../../data/favourites/favourites";

it("should render the text on the display", () => {
  const { container } = customRender(
    <BusinessCard businessCardArray={favArray} />
  );

  expect(container).toMatchSnapshot();
});

it("should check if the click of the details button shows the details pane", () => {
  //load the page
  customRender(<BusinessCard businessCardArray={favArray} />);
  //get the button
  const button = screen.getAllByRole("button");
  //on click of the button
  userEvent.click(button[0]);
  const saveButton = screen.getByText("Save");
  //expect the details pane to appear
  expect(saveButton).toBeInTheDocument();
});

// 1. assert
it("each card should have the correct styling applied", () => {
  // 2. arrange
  customRender(<componentName />);
  // change getByRole to text etc if required
  const componentName = screen.getByRole("componentIdentifier/role/label");
  // 3. act
  expect(heading).toMatchSnapshot();
});
