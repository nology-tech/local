import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Favourites from "./pages/Favourites/Favourites";
import "./styles/main.scss";
import Enter from "./pages/Enter/Enter";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/enter" element={<Enter />} />
      <Route path="/enter/signin" element={<SignIn />} />
      <Route path="/enter/signup" element={<SignUp />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/favourites" element={<Favourites />} />
    </Routes>
  );
};

export default App;
