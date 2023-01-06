import Header from "./Header";
import { customRender } from "../../utils/testUtils";

it("should render the header on the page", () => {
  const { container } = customRender(<Header />);
  expect(container).toMatchSnapshot();
});
