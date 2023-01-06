import DropDown from "./DropDown";
import { customRender } from "../../utils/testUtils";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

it("should render the dropdown", () => {
  const { container } = customRender(<DropDown />);

  expect(container).toMatchSnapshot();
});

it("should call the function when user selects an option from the dropdown menu", () => {
  const mockFunction = jest.fn();
  const mockData = ["London", "Newcastle"];
  customRender(<DropDown onChange={mockFunction} options={mockData} />);

  const dropDown = screen.getByRole("select");

  userEvent.click(dropDown);

  const dropDownOption = screen.getByText("London");

  userEvent.click(dropDownOption);

  expect(mockFunction).toBeCalled();
});
