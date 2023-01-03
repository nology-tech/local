import Layout from "../../components/Layout/Layout";
import LabelledInputTextField from "../../components/labelledInputTextField/labelledInputTextField";

const Contact = () => {
  return (
    <>
      <Layout>
        <LabelledInputTextField
          uniqueInputFieldName="contactName"
          inputType="text"
          labelHeader="name"
        />
      </Layout>
    </>
  );
};
export default Contact;
