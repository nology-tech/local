import { customRender } from "../../utils/testUtils";
import { screen } from "@testing-library/react";
import Filter from "./Filter";
import userEvent from "@testing-library/user-event";
import favArray from "../../data/favourites/favourites";

const mockData = ["FOOD & DRINK", "CULTURE", "OTHER"];

it("should render the filter component", () => {
  const mockFunction = jest.fn();
  const { container } = customRender(
    <Filter favArray={mockData} setAllCardsArr={mockFunction} />
  );
  expect(container).toMatchSnapshot();
});

it("should call the filter function when user select the filter options", () => {
  const mockFunction = jest.fn();
  customRender(<Filter favArray={favArray} setAllCardsArr={mockFunction} />);

  const filterButton = screen.getByRole("button", { name: /other/i });
  userEvent.click(filterButton);

  expect(mockFunction).toBeCalled();
});
