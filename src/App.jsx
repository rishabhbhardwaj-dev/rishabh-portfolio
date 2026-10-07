import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EvoErpCaseStudy from './pages/EvoErpCaseStudy';
import CampusSyncCaseStudy from './pages/CampusSyncCaseStudy';
import JarvisCaseStudy from './pages/JarvisCaseStudy';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/evoerp" element={<EvoErpCaseStudy />} />
        <Route path="/projects/campussync" element={<CampusSyncCaseStudy />} />
        <Route path="/projects/jarvis" element={<JarvisCaseStudy />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Router>
  );
}

export default App;
