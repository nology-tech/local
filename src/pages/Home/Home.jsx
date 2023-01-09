import Button from "../../components/Button/Button";
import Layout from "../../components/Layout/Layout";
import discoverIcon from "../../assets/icons/discoverIcon.svg";
import plusIcon from "../../assets/icons/plusIcon.svg";
import minusIcon from "../../assets/icons/minusIcon.svg";

const Home = () => {
  return (
    <Layout isWithMenu={true}>
      <Button
        buttonName={"map-navigation"}
        buttonImgUrl={plusIcon}
        buttonImgClass={"discover-icon"}
      />
      <Button
        buttonName={"map-navigation"}
        buttonImgUrl={minusIcon}
        buttonImgClass={"discover-icon"}
      />
      <Button
        // buttonText={"D"}
        buttonName={"map-navigation"}
        buttonImgUrl={discoverIcon}
        buttonImgClass={"discover-icon"}
      />
      <h1>Page Heading</h1>
      <h2>Section Heading</h2>
      <h3>Panel Heading</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non error
        dolor in nostrum minima odio a fuga saepe soluta adipisci perspiciatis
        maxime tempora, temporibus beatae voluptas repellat rerum. Dignissimos,
        necessitatibus.
      </p>
    </Layout>
  );
};
export default Home;
