import Layout from "../../components/Layout/Layout";
import LabelledInputTextField from "../../components/labelledInputTextField/labelledInputTextField";
import Button from "../../components/button/Button";

const Home = () => {
  return (
    <>
      <Layout>
        <h1>Page Heading</h1>
        <h2>Section Heading</h2>
        <h3>Panel Heading</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non error
          dolor in nostrum minima odio a fuga saepe soluta adipisci perspiciatis
          maxime tempora, temporibus beatae voluptas repellat rerum.
          Dignissimos, necessitatibus.
        </p>
      </Layout>
      <LabelledInputTextField
        uniqueInputFieldName="contactName"
        inputType="text"
        labelHeader="name"
      />
      <Button buttonText={"SEND"} buttonContact={true} />
    </>
  );
};

export default Home;
