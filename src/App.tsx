import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Analytics from "./components/Analytics";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WhatsAppButton from "./components/WhatsAppButton";

const App: React.FC = () => {
  return (
    <Router>
      <Analytics />
      <Header />
      <div className="min-h-screen bg-white">
        <main>
          <HeroSection />
        </main>
        <WhatsAppButton />
      </div>
    </Router>
  );
};

export default App;
