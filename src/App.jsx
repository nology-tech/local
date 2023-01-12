import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Favourites from "./pages/Favourites/Favourites";
import "./styles/main.scss";
import NewUser from "./pages/NewUser/NewUser";
import About from "./pages/About/About";
import Enter from "./pages/Enter/Enter";
import SignUp from "./pages/SignUp/SignUp";
import Contact from "./pages/Contact/Contact";
import SignIn from "./pages/SignIn/SignIn";
import ManageAccount from "./pages/ManageAccount/ManageAccount";
import HomeListView from "./pages/HomeListView/HomeListView";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/list-view" element={<HomeListView />} />
      <Route path="/new" element={<NewUser />} />
      <Route path="/enter" element={<Enter />} />
      <Route path="/account" element={<ManageAccount />} />
      <Route path="/enter/signin" element={<SignIn />} />
      <Route path="/enter/signup" element={<SignUp />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App;
