import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import TutorialPage from './components/tutorials/TutorialPage';
import PlaygroundPage from './components/playground/PlaygroundPage';
import SnippetsPage from './components/snippets/SnippetsPage';
import { AppProvider } from './context/AppContext';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <AppProvider>
        <div className="app-container min-h-screen bg-gray-900 text-cyan-50 flex flex-col">
          <Navbar />
          <main className="flex-grow container mx-auto px-4 py-8">
            <Routes>
              <Route path="/tutorials" element={<TutorialPage />} />
              <Route path="/playground" element={<PlaygroundPage />} />
              <Route path="/snippets" element={<SnippetsPage />} />
              <Route path="/" element={<Navigate to="/tutorials" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AppProvider>
    </Router>
  );
}

export default App;