import Layout from "./Layout";
import { customRender } from "../../utils/testUtils";
import userEvent from "@testing-library/user-event";

it("should render the layout component", () => {
  const { container } = customRender(
    <Layout>
      <p>Hello there</p>
    </Layout>
  );

  expect(container).toMatchSnapshot();
});

it("should apply a different class when the menu is open/closed", () => {
  const { container } = customRender(<Layout isWithMenu={true} />);

  const menu = container.querySelector(".layout__menu");

  expect(menu).toHaveClass("menu-closed");

  const toggleButton = container.querySelector(".menu-icon__container");

  userEvent.click(toggleButton);

  expect(menu).toHaveClass("menu-open");
});
