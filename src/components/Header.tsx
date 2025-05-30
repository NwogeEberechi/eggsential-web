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
            <div className="flex items-center gap-3">
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
                href={`tel:${BUSINESS_INFO.phone}`}
                className="text-gray-600 hover:text-gray-900 transition-colors"
                onClick={trackPhoneCall}
              >
                {BUSINESS_INFO.phone}
              </a>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
                onClick={() => trackWhatsAppClick("Buy Eggs Button - Header")}
              >
                Buy Eggs
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
