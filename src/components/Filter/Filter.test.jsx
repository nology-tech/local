import { customRender } from "../../utils/testUtils";
import { screen } from "@testing-library/react";
import Filter from "./Filter";
import userEvent from "@testing-library/user-event";

const mockData = ["FOOD & DRINK", "CULTURE", "OTHER"];

it("should render the filter component", () => {
  const mockFunction = jest.fn();
  const { container } = customRender(
    <Filter favArray={mockData} setallCardsArr={mockFunction} />
  );
  expect(container).toMatchSnapshot();
});

it("should call the filter function when user select the filter options", () => {
  const mockFunction = jest.fn();
  customRender(<Filter favArray={mockData} setallCardsArr={mockFunction} />);

  const filterButton = screen.getByText("FOOD & DRINK");
  userEvent.click(filterButton);

  expect(mockFunction).toBeCalled();
});
