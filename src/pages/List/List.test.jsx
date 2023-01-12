import { customRender } from "../../utils/testUtils";
import { screen } from "@testing-library/react";
import List from "./List";

it("should render the text on the display", () => {
  const { container } = customRender(<List />);

  expect(container).toMatchSnapshot();
});

it("should render a button on the screen", () => {
  customRender(<List />);

  const buttononscreen = screen.getByRole("button", { name: "Map View" });

  expect(buttononscreen).toBeInTheDocument();
});
