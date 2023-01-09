import DetailsPane from "./DetailsPane";
import { customRender } from "../../utils/testUtils";

it("should render the details pane on the display", () => {
  const testCard = {
    id: "0",
    name: "Smith and Sons",
    description: "A restaurant",
    weekdayOpening: "2",
    weedendOpening: "1",
    address: "A street",
    price: "£",
    image: "insert here",
  };
  const { container } = customRender(<DetailsPane card={testCard} />);

  expect(container).toMatchSnapshot();
});
