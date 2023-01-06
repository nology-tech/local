import Layout from "../../components/Layout/Layout";
import logo from "../../assets/images/AppLogo.svg";
import TextField from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";
import "./SignIn.scss";

const SignIn = () => {
  return (
    <Layout>
      <div className="sign-in">
        <div className="sign-in__intro">
          <img className="sign-in__logo" src={logo} alt="App Logo" />
          <h1>LOCAL</h1>
          <p>Bringing local business to local people</p>
        </div>
        <div className="sign-in__input-field">
          <TextField
            uniqueInputFieldName="signinUserName"
            inputType="text"
            labelHeader="Username"
            modifier="signin"
          />
          <TextField
            uniqueInputFieldName="signinPassword"
            inputType="text"
            labelHeader="Password"
            modifier="signin"
          />
          <div className="sign-in__buttons">
            <Button buttonText={"Sign in"} buttonName="signin" />
            <Button buttonText={"Sign in with Google"} buttonName="signin" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;
