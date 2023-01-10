import Home from "../../pages/Home/Home";
import { customRender } from "../../utils/testUtils";
import { screen } from "@testing-library/react";

it("should render a button on the screen", () => {
  customRender(<Home />);

  const buttononscreen = screen.getByText("List View");

  expect(buttononscreen).toBeInTheDocument();
});
