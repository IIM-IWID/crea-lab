import Homepage from "./pages/home";
import Project from "./pages/project";
import Stock from "./pages/stock";
import Calendar from "./pages/calendar";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
