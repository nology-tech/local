import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./Enter.scss";
import logo from "../../assets/images/AppLogo.svg";

const Enter = () => {
  return (
    <Layout>
      <div className="enter">
        <div className="enter__description">
          <img className="enter__logo" src={logo} alt="App Logo" />
          <h1>LOCAL</h1>
          <p>Bringing local business to local people</p>
        </div>
        <div className="enter__buttons">
          <Link to="/enter/signin">
            <Button buttonText={"Sign in"} buttonName="enter" />
          </Link>
          <Link to="/enter/signup">
            <Button buttonText={"Sign up"} buttonName="enter" />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Enter;
