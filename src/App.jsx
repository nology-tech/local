import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Favourites from "./pages/Favourites/Favourites";
import "./styles/main.scss";
import Menu from "../../components/Menu/Menu";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
};

export default App;
