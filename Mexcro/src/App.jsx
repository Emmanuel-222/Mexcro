import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Talent from "./components/Talent";
import Recruiter from "./components/Recruiter";
import Pathway from "./components/Pathway";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Pathway />} />
          <Route path="/recruiter" element={<Recruiter />} />
          <Route path="/talent" element={<Talent />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
