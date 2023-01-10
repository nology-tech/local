import { customRender } from "../../utils/testUtils";
import Carousel from "../Carousel/Carousel";

it("should render the text on the display", () => {
  const mockComponents = [<p>test</p>, <p>other test</p>];
  const { container } = customRender(
    <Carousel componentToDisplay={mockComponents} />
  );

  expect(container).toMatchSnapshot();
});
