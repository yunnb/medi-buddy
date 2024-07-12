import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HealthNews from "./pages/HealthNews";
import DetailPage from "./pages/DetailPage";
import MedSearch from "./pages/MedSearch/MedSearch";
import Navigationbar from "./components/common/Navigationbar";

function App() {
  return (
    <Router>
      <Navigationbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/healthnews" element={<HealthNews />} />
        <Route path="/medsearch" element={<MedSearch />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
