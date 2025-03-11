import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import HomePage from "./pages/HomePage";
import ChooseFlight from "./pages/ChooseFlight";
import SelectedFlight from "./pages/SelectedFlight";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/choose-flight" element={<ChooseFlight />} />
        <Route path="/choose-flight/:id" element={<SelectedFlight />} />
      </Routes>
    </div>
  );
}

export default App;
