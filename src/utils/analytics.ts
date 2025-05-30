// Google Analytics Measurement ID
export const GA_MEASUREMENT_ID = "G-3Q2KQWNZ6V"; // Replace with your actual GA4 Measurement ID

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== "undefined") {
    // Load Google Analytics script
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", GA_MEASUREMENT_ID);
  }
};

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label: string,
  value?: number
) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track WhatsApp clicks
export const trackWhatsAppClick = () => {
  trackEvent("click", "WhatsApp", "Buy Eggs Button");
};

// Track phone calls
export const trackPhoneCall = () => {
  trackEvent("click", "Phone", "Call Business");
};

// Track product views
export const trackProductView = (productType: "retail" | "wholesale") => {
  trackEvent("view", "Product", productType);
};
