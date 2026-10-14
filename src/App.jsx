import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SobrePage from './pages/SobrePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactosPage from './pages/ContactosPage';
import ProjectDetailPage from './pages/ProjectDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/projetos" element={<ProjectsPage />} />
        <Route path="/contactos" element={<ContactosPage />} />
        <Route path="/projeto/:id" element={<ProjectDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
