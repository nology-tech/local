import "./ManageAccount.scss";
import Layout from "../../components/Layout/Layout";

import Button from "../../components/Button/Button";

const ManageAccount = () => {
  return (
    <Layout isManageAccount={true} isWithMenu={true}>
      <div className="manage-account">
        <h1 className="manage-account__heading">Account</h1>
        <div className="manage-account__button-container">
          <div className="manage-account__buttons-updateAccount">
            <Button
              buttonName="account button--signout"
              buttonText="Sign Out"
            />
            <Button
              buttonName="account button--update-details"
              buttonText="Update details"
            />
          </div>
          <div className="manage-account__buttons-deleteAccount">
            <Button
              buttonName="account button--deleteAccount"
              buttonText="Delete Account"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ManageAccount;
