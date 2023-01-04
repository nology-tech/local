import Contact from "./Contact";
import { customRender } from "../../utils/testUtils";

it("should render contact page", () => {
  const { container } = customRender(<Contact />);

  expect(container).toMatchSnapshot();
});
