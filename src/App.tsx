import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Contact from './components/Contact';
export function App() {
  return <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <Features />
        <Contact />
      </main>
    </div>;
}