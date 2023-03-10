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
  customRender(<Card cardArray={favArray} page="favourites" />);
  //get the button
  const button = screen.getAllByText("Details");
  //on click of the button
  userEvent.click(button[0]);

  const closeButton = screen.getAllByText("✖");
  //expect the details pane to appear
  expect(closeButton[0]).toBeInTheDocument();
});

it("should call the functions within onclick when user clicks", () => {
  const mockFunction = jest.fn();
  customRender(
    <Card
      cardArray={favArray}
      primaryButtonOnClick={mockFunction}
      page="favourites"
    />
  );

  const button = screen.getAllByRole("button", { name: /Remove/i });

  userEvent.click(button[0]);

  expect(mockFunction).toBeCalled();
});
