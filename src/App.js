import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/main/components/Home";
import HealthNews from "./pages/main/components/HealthNews";
import MedSearch from "./pages/main/components/MedSearch";
import Navigationbar from "./pages/main/components/Navigationbar";

function App() {
  return (
    <Router>
      <Navigationbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/healthnews" element={<HealthNews />} />
        <Route path="/medsearch" element={<MedSearch />} />
      </Routes>
    </Router>
  );
}

export default App;
