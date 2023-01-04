import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Favourites from "./pages/Favourites/Favourites";
import "./styles/main.scss";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App;
