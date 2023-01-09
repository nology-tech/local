import Button from "../../components/Button/Button";
import { customRender } from "../../utils/testUtils";
import { screen } from "@testing-library/react";

it("should render a button on the screen", () => {
  customRender(<Button buttonImgClass={"discover-icon"} />);

  const buttononscreen = screen.getByRole("button");

  expect(buttononscreen).toBeInTheDocument();
});
