import { customRender } from "../../utils/testUtils";
import HomeListView from "./HomeListView";

it("should render the text on the display", () => {
  const { container } = customRender(<HomeListView />);

  expect(container).toMatchSnapshot();
});
