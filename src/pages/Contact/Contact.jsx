import Layout from "../../components/Layout/Layout";
import LabelledInputTextField from "../../components/labelledInputTextField/labelledInputTextField";
import Button from "../../components/button/Button";
import "./contact.scss";

const Contact = () => {
  return (
    <>
      <Layout>
        <main className="contact-container">
          <form className="contact-form">
            <h1 className="contact-form__header">Contact</h1>
            <p className="contact-form__paragraph">
              We would lvoe to ehar from you and take your feedback on board.
            </p>
            <LabelledInputTextField
              uniqueInputFieldName="contactName"
              inputType="text"
              labelHeader="name"
            />
            <LabelledInputTextField
              uniqueInputFieldName="contactEmail"
              inputType="email"
              labelHeader="email"
            />
            <LabelledInputTextField
              uniqueInputFieldName="contactMessage"
              inputType="text"
              labelHeader="message"
              inputLarge={true}
            />
            <Button buttonText={"SEND"} buttonContact={true} />
          </form>
        </main>
      </Layout>
    </>
  );
};

export default Contact;
