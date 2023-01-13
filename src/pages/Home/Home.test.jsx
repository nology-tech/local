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

it("should render the input field", () => {
  customRender(<Home />);

  const textField = screen.getByRole("input", { id: "location-search-bar" });

  expect(textField).toBeInTheDocument();
});

it("should call the url when user input the Postcode", () => {
  const mockFunction = jest.fn();

  customRender(
    <TextField
      uniqueId="location-search-bar"
      inputType="text"
      modifier="location-search-bar"
      placeholderText="Search by Postcode"
      onChange={mockFunction}
    />
  );

  const textField = screen.getByRole("textfield");
  userEvent.type(textField, "CH451HE");

  expect(mockFunction).toBeCalled();
});
