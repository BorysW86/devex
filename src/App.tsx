import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import WhatIsDevEx from './pages/WhatIsDevEx';
import KeyAreas from './pages/KeyAreas';
import MetricsPage from './pages/MetricsPage';

function App() {
  // Initialize theme
  useTheme();

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/what-is-devex" element={<WhatIsDevEx />} />
            <Route path="/key-areas" element={<KeyAreas />} />
            <Route path="/metrics" element={<MetricsPage />} />
            <Route path="/case-studies" element={<div className="p-8 text-center">Case Studies page coming soon</div>} />
            <Route path="/getting-started" element={<div className="p-8 text-center">Getting Started page coming soon</div>} />
            <Route path="/templates" element={<div className="p-8 text-center">Templates page coming soon</div>} />
            <Route path="/resources" element={<div className="p-8 text-center">Resources page coming soon</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;