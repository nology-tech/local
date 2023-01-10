import { customRender } from "../../utils/testUtils";
import Carousel from "../Carousel/Carousel";

it("should render the text on the display", () => {
  const { container } = customRender(<Carousel />);

  expect(container).toMatchSnapshot();
});

it("should recieve an array of components and render them on the screen", () => {
  const mockComponents = ["<p>test</p>", "<p>other test</p>"];
  const { container } = customRender(
    <Carousel componentToDisplay={mockComponents} />
  );
  mockComponents.forEach((element) => {
    expect(container).toBeInTheDocument();
  });
});
