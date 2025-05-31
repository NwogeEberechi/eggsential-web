import React from "react";
import { BUSINESS_INFO } from "./constants";
import SEO from "./SEO";
import { trackWhatsAppClick, trackPhoneCall } from "../utils/analytics";
import LazyImage from "./LazyImage";

const Header = () => {
  return (
    <>
      <SEO />
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <LazyImage
                src="https://uploadthingy.s3.us-west-1.amazonaws.com/uHHZkK4yqAyZroPUKE2piY/pasted-image.jpg"
                alt={BUSINESS_INFO.name}
                className="h-12 w-auto"
                skeletonClassName="h-12 w-12 bg-gray-200 animate-pulse rounded"
              />
              <span className="text-2xl font-bold text-gray-900">
                {BUSINESS_INFO.name}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1.5 relative group"
                onClick={() => trackWhatsAppClick("Buy Eggs Button - Header")}
                aria-label="Chat us on WhatsApp"
              >
                Buy Eggs
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  Chat us on WhatsApp
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: BUSINESS_INFO.name,
          url: "https://fresheggsmarket.com",
          logo: "https://fresheggsmarket.com/logo.jpg",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: BUSINESS_INFO.phone,
            contactType: "customer service",
            availableLanguage: ["English"],
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Lagos",
            addressCountry: "Nigeria",
          },
        })}
      </script>
    </>
  );
};

export default Header;
