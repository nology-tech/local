import Layout from "./Layout";
import { customRender } from "../../utils/testUtils";
import { act } from "react-dom/test-utils";

it("should render the layout component", () => {
  const { container } = customRender(
    <Layout>
      <p>Hello there</p>
    </Layout>
  );

  expect(container).toMatchSnapshot();
});

it("should apply a different class when the menu is open/closed", () => {
  const { container } = customRender(
    <Layout isWithMenu={true} showMenu={false} />
  );

  const menu = container.querySelector(".layout__menu");

  expect(menu).toHaveClass("menu-closed");
});
