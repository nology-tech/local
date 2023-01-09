import NewUser from "./NewUser";
import { customRender } from "../../utils/testUtils";
import Button from "../../components/Button/Button";
import { screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
it("should render NewUser page", () => {
  const { container } = customRender(<NewUser />);

  expect(container).toMatchSnapshot();
});

it("should render the content of the page and the button when user clicks", () => {
  const mockFunction = jest.fn();

  customRender(<Button onClick={mockFunction} />);

  const button = screen.getByRole("button");
  userEvent.click(button);

  expect(mockFunction).toBeCalled();
});
