import Home from "../../pages/Home/Home";
import TextField from "../../components/TextField/TextField";
import { customRender } from "../../utils/testUtils";
import { screen } from "@testing-library/react";

it("should render a button on the screen", () => {
  customRender(<Home />);

  const buttononscreen = screen.getByRole("button", { name: "-" });

  expect(buttononscreen).toBeInTheDocument();
});

it("should render the text on the display", () => {
  const { container } = customRender(<Home />);

  expect(container).toMatchSnapshot();
});
