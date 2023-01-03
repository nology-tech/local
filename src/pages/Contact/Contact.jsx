import Layout from "../../components/Layout/Layout";
import Button from "../../components/button/Button";
import "./contact.scss";
import TextField from "../../components/TextField/TextField";

const Contact = () => {
  return (
    <Layout>
      <main className="contact">
        <h1>Contact</h1>
        <p>We would love to hear from you and take your feedback on board.</p>
        <form className="contact__form">
          <TextField
            uniqueInputFieldName="contactName"
            inputType="text"
            labelHeader="name"
          />
          <TextField
            uniqueInputFieldName="contactEmail"
            inputType="email"
            labelHeader="email"
          />
          <TextField
            uniqueInputFieldName="contactMessage"
            inputType="text"
            labelHeader="message"
            inputLarge={true}
          />
          <Button buttonText={"SEND"} buttonName="contact" />
        </form>
      </main>
    </Layout>
  );
};

export default Contact;
