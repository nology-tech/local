import Layout from "../../components/Layout/Layout";
import Button from "../../components/Button/Button";
import "./NewUser.scss";
import logo from "../../assets/images/AppLogo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const NewUser = () => {
  const [buttonText, setButtonText] = useState("Get Started");
  const [content, setContent] = useState(
    " Bringing local business to local people"
  );

  const buttonClicked = () => {
    if (buttonText == "Get Started") {
      setButtonText("Continue");
      setContent(
        "No matter where you are in the world Local shows you the best local bars, cafes, restaurants and shops"
      );
    } else if (buttonText == "Continue") {
      setButtonText("Sign Up");
      setContent(
        "Discover new places and curate your own personal list. Be a local anywhere"
      );
    }
  };

  const buttonJSX = (
    <Button
      onClick={buttonClicked}
      buttonText={buttonText}
      buttonName="enter"
    />
  );

  const signUpButtonJSX = (
    <>
      <Link to="/enter/signin">
        <Button
          onClick={buttonClicked}
          buttonText="Sign In"
          buttonName="enter"
        />
      </Link>
      <Link to="/enter/signup">
        <Button
          onClick={buttonClicked}
          buttonText={buttonText}
          buttonName="enter"
        />
      </Link>
    </>
  );

  return (
    <Layout>
      <div className="newuser">
        <div className="newuser__description">
          <div className="newuser__header">
            <img className="newuser__logo" src={logo} alt="App Logo" />
            <h1>LOCAL</h1>
          </div>

          <p className="newuser__description--content">{content}</p>
        </div>
        <div className="newuser__buttons">
          {buttonText == "Sign Up" ? signUpButtonJSX : buttonJSX}
        </div>
      </div>
    </Layout>
  );
};

export default NewUser;
