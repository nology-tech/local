import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const Enter = () => {
  return (
    <Layout>
      <div>
        <img className="logo" src="" alt="App Logo" />
        <h1>LOCAL</h1>
        <p>Bringing local business to local people</p>
        <Link to="/enter/signin">
          <Button buttonText={"Sign in"} />
        </Link>
        <Link to="/enter/signup">
          <Button buttonText={"Sign up"} />
        </Link>
      </div>
    </Layout>
  );
};

export default Enter;
