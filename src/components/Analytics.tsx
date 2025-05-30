import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initGA, trackPageView } from "../utils/analytics";

const Analytics: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics
    initGA();
  }, []);

  useEffect(() => {
    // Track page views
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null; // This component doesn't render anything
};

export default Analytics;
