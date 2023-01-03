import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./styles/main.scss";
import Enter from "./pages/Enter/Enter";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/enter" element={<Enter />} />
      <Route path="/enter/signin" element={<SignIn />} />
      <Route path="/enter/signup" element={<SignUp />} />
    </Routes>
  );
};

export default App;
