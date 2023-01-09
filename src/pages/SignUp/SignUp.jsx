import Layout from "../../components/Layout/Layout";
import logo from "../../assets/images/AppLogo.svg";
import TextField from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";
import "./SignUp.scss";

const SignUp = () => {
  return (
    <Layout>
      <div className="sign-up">
        <div className="sign-up__intro">
          <img className="sign-up__logo" src={logo} alt="App Logo" />
          <h1>LOCAL</h1>
          <p>Bringing local business to local people</p>
        </div>
        <div className="sign-up__input-field">
          <TextField
            uniqueInputFieldName="signupUserName"
            inputType="text"
            labelHeader="First name"
            modifier="signup"
          />
          <TextField
            uniqueInputFieldName="signupPassword"
            inputType="text"
            labelHeader="Last name"
            modifier="signup"
          />
          <TextField
            uniqueInputFieldName="signupUserName"
            inputType="text"
            labelHeader="Username"
            modifier="signup"
          />
          <TextField
            uniqueInputFieldName="signupUserName"
            inputType="text"
            labelHeader="Email"
            modifier="signup"
          />
          <TextField
            uniqueInputFieldName="signupUserName"
            inputType="text"
            labelHeader="Confirm email"
            modifier="signup"
          />
          <TextField
            uniqueInputFieldName="signupUserName"
            inputType="text"
            labelHeader="Password"
            modifier="signup"
          />
          <TextField
            uniqueInputFieldName="signupUserName"
            inputType="text"
            labelHeader="Retype password"
            modifier="signup"
          />
          <div className="sign-up__buttons">
            <Button buttonText={"Sign up"} buttonName="signup" />
            <Button buttonText={"Sign up with Google"} buttonName="signup" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
