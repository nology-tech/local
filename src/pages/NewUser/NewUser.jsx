import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./NewUser.scss";
import logo from "../../assets/images/AppLogo.svg";

const NewUser = () => {
  return (
    <Layout>
      <div className="newuser">
        <div className="newuser__description">
          <img className="newuser__logo" src={logo} alt="App Logo" />
          <h1>LOCAL</h1>
          <p className="newuser__description--content">
            Bringing local business to local people
          </p>
        </div>
        <div className="newuser__buttons">
          <Link to="/">
            <Button buttonText={"Get Started"} buttonName="enter" />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NewUser;
