import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CampusSyncCaseStudy from './pages/CampusSyncCaseStudy';
import JarvisCaseStudy from './pages/JarvisCaseStudy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/campussync" element={<CampusSyncCaseStudy />} />
        <Route path="/projects/jarvis" element={<JarvisCaseStudy />} />
      </Routes>
    </Router>
  );
}

export default App;
