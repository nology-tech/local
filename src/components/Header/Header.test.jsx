import Header from "./Header";
import { customRender } from "../../utils/testUtils";
import { screen } from "@testing-library/react";

it("should render the header on the page", () => {
  customRender(<Header />);

  const textField = screen.getByText("LOCAL");

  expect(textField).toBeInTheDocument();
});

describe("test css", () => {
  it("test font size", () => {
    customRender(<Header />);
    const title = screen.getByText("LOCAL");
    expect(title).toHaveStyle("font-size: 2em");
  });
});
