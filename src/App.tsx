import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Operations from './components/Operations';
import Contact from './components/Contact';
import SaifPage from './pages/SaifPage';

function App() {
  return (
    <div className="bg-tactical-black min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            <Operations />
            <Contact />
          </main>
        } />
        <Route path="/saif-ibn-battuta" element={<SaifPage />} />
      </Routes>
      <footer className="bg-tactical-black text-white py-6">
        <div className="container mx-auto px-6 text-center font-military">
          <p>&copy; {new Date().getFullYear()} DELTA FORCE. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;