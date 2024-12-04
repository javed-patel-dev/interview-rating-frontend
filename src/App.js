import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import PendingCandidate from "./pages/pendingCandidate";
import RejectedCandidate from "./pages/rejectedCandidate";
import SelectedCandidate from "./pages/selectedCandidate";

function App() {
  return (
    <Router>
      <div className="w-full p-10">
        <h1 className=" w-full text-center">Candidate Management</h1>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/pending" element={<PendingCandidate />} />
          <Route path="/selected" element={<SelectedCandidate />} />
          <Route path="/rejected" element={<RejectedCandidate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
