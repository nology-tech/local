import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./styles/main.scss";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
