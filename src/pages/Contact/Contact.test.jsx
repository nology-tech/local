import Contact from "./Contact";
import { customRender } from "../../utils/testUtils";

it("should render the layout component", () => {
  const { container } = customRender(
    <Layout>
      <p>Hello there</p>
    </Layout>
  );

  expect(container).toMatchSnapshot();
});
