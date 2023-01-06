import BusinessCard from "./BusinessCard";
import { customRender } from "../../utils/testUtils";
import { Screen } from "@testing-library/react";

it("should render the text on the display", () => {
  const { container } = customRender(<BusinessCard />);

  expect(container).toMatchSnapshot();
});

it("should check if the click of the details button shows the details pane"),
  () => {
    const { container } = customRender(<BusinessCard />);
    const button = screen.getByRole("button");

    userEvent.click(button);
    expect(container);
  };
