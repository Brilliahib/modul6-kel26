import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import LandingPage from "./pages/LandingPage";

// Components
import Header from "./components/header";

import "./App.css";

function App() {
  useEffect(() => {
    document.title = "Kelompok 26";
  }, []);
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
