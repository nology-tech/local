import Home from "../../pages/Home/Home";

import { customRender } from "../../utils/testUtils";

it("should render the text on the display", () => {
  const { container } = customRender(<Home />);

  expect(container).toMatchSnapshot();
});
