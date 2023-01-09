import Header from "./Header";
import { customRender } from "../../utils/testUtils";
import { screen } from "@testing-library/react";

it("should render the header on the page", () => {
  const { container } = customRender(<Header />);

  const textField = screen.getByText("LOCAL");

  expect(container).toMatchSnapshot();
});
