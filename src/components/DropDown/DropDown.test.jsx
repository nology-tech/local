import DropDown from "./DropDown";
import { customRender } from "../../utils/testUtils";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const mockData = ["London", "Newcastle"];

it("should render the dropdown", () => {
  const { container } = customRender(<DropDown options={mockData} />);

  expect(container).toMatchSnapshot();
});

it("should call the function when user selects an option from the dropdown menu", () => {
  const mockFunction = jest.fn();
  customRender(<DropDown onChange={mockFunction} options={mockData} />);

  const dropDown = screen.getByRole("select");

  userEvent.click(dropDown);

  const dropDownOption = screen.getByText("London");

  userEvent.click(dropDownOption);

  expect(mockFunction).toBeCalled();
});
