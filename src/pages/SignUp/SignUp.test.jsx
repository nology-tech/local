import { customRender } from "../../utils/testUtils";
import SignUp from "./SignUp";

it("should render the text on the display", () => {
  const { container } = customRender(<SignUp />);

  expect(container).toMatchSnapshot();
});
