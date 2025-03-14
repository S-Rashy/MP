import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import ComingSoon from "./Components/ComingSoon";
import Play from "./Components/Player/play";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/player" element={<Play />} />
      </Routes>
    </Router>
  );
};

export default App;
