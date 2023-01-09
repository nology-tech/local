import NewUser from "./NewUser";
import { customRender } from "../../utils/testUtils";
import { screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
it("should render NewUser page", () => {
  const { container } = customRender(<NewUser />);

  expect(container).toMatchSnapshot();
});

it("should render the content of the page and the newuser-button when user clicks", () => {
  customRender(<NewUser />);
  const button = screen.getByRole("button");
  userEvent.click(button);

  const newContent = screen.queryByText(
    "No matter where you are in the world Local shows you the best local bars, cafes, restaurants and shops"
  );
  expect(newContent).toBeInTheDocument();

  expect(button).toHaveTextContent("Continue");
});
