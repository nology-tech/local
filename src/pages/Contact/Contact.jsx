import Layout from "../../components/Layout/Layout";
import LabelledInputTextField from "../../components/labelledInputTextField/labelledInputTextField";
import Button from "../../components/button/Button";

const Contact = () => {
  return (
    <>
      <Layout>
        <LabelledInputTextField
          uniqueInputFieldName="contactName"
          inputType="text"
          labelHeader="name"
        />
        <Button buttonText={"SEND"} buttonContact={true} />
      </Layout>
    </>
  );
};
export default Contact;
