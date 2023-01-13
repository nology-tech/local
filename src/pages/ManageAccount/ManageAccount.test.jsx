import { customRender } from "../../utils/testUtils";
import ManageAccount from "./ManageAccount";

it("should render the text on the display", () => {
  const { container } = customRender(<ManageAccount />);

  expect(container).toMatchSnapshot();
});
