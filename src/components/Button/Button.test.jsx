import Button from "./Button";
import { customRender } from "../../utils/testUtils";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

it("should render the button page", () => {
  const { container } = customRender(<Button />);

  expect(container).toMatchSnapshot();
});

it("should call the functions within onclick when user clicks", () => {
  const mockFunction = jest.fn();
  customRender(<Button onClick={mockFunction} />);

  const button = screen.getByRole("button");

  userEvent.click(button);

  expect(mockFunction).toBeCalled();
});
