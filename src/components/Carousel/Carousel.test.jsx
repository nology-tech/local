import { customRender } from "../../utils/testUtils";
import Carousel from "../Carousel/Carousel";

it("should render the text on the display", () => {
  const { container } = customRender(<Carousel />);

  expect(container).toMatchSnapshot();
});
