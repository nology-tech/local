import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./styles/main.scss";
import Enter from "./pages/Enter/Enter";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/enter" element={<Enter />} />
    </Routes>
  );
};

export default App;
