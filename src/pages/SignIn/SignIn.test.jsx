import { customRender } from "../../utils/testUtils";
import SignIn from "./SignIn";

it("should render the text on the display", () => {
  const { container } = customRender(<SignIn />);

  expect(container).toMatchSnapshot();
});
