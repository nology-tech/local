import DropDown from "./DropDown";
import { customRender } from "../../utils/testUtils";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

it("should render the dropDown", () => {
  const { container } = customRender(<DropDown />);

  expect(container).toMatchSnapshot();
});

it("should call the functions within onchange when user selects an option", () => {
  const mockFunction = jest.fn();
  customRender(<DropDown onChange={mockFunction} />);

  const dropDown = screen.getByRole("button");

  userEvent.click(dropDown);

  expect(mockFunction).toBeCalled();
});
