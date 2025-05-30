import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Fresh Eggs Market - Premium Quality Eggs in Nigeria",
  description = "Buy fresh, high-quality eggs in bulk and retail. We deliver premium eggs across Nigeria. Best prices for wholesale and retail egg purchases.",
  keywords = "fresh eggs, bulk eggs, wholesale eggs, retail eggs, Nigeria eggs, farm fresh eggs, egg supplier, egg delivery",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Fresh Eggs Market" />
    </Helmet>
  );
};

export default SEO;
