import About from "./About";
import { customRender } from "../../utils/testUtils";

it("should render About page", () => {
  const { container } = customRender(<About />);

  expect(container).toMatchSnapshot();
});
