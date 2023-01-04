import TextField from "./TextField";
import { customRender } from "../../utils/testUtils";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

it("should render the TextField component", () => {
  const { container } = customRender(<TextField />);

  expect(container).toMatchSnapshot();
});

it("should call the function when user types in input box", () => {
  const mockFunction = jest.fn();
  customRender(
    <TextField onChange={mockFunction} labelHeader="jim" uniqueId="tracey" />
  );

  const textField = screen.getByLabelText("jim");

  userEvent.type(textField, "hi");

  expect(mockFunction).toBeCalled();
});
