import "./ManageAccount.scss";
import Layout from "../../components/Layout/Layout";

import Button from "../../components/Button/Button";

const ManageAccount = () => {
  return (
    <Layout isManageAccount={true} isWithMenu={true}>
      <div className="manage-account">
        <h1 className="manage-account__heading">Account</h1>
        <div className="manage-account__button-container">
          <Button buttonName="account account--signout" buttonText="Sign Out" />
          <Button
            buttonName="account account--update-details"
            buttonText="Update details"
          />
        </div>
        <Button
          buttonName="account account--delete"
          buttonText="Delete Account"
        />
      </div>
    </Layout>
  );
};
export default ManageAccount;
