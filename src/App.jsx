import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Favourites from "./pages/Favourites/Favourites";
import "./styles/main.scss";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/favourites" element={<Favourites />} />
    </Routes>
  );
};

export default App;
