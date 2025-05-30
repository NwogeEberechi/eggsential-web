export const BUSINESS_INFO = {
  name: "Fresh Eggs Market",
  phone: "+2349160007184",
  whatsappMessage: "Hello! I'm interested in buying eggs.",
  whatsappUrl: `https://wa.me/+2349160007184?text=${encodeURIComponent(
    "Hello! I'm interested in buying eggs."
  )}`,
  address: "Lagos, Nigeria",
  email: "contact@fresheggsmarket.com",
  socialMedia: {
    facebook: "https://facebook.com/fresheggsmarket",
    instagram: "https://instagram.com/fresheggsmarket",
    twitter: "https://twitter.com/fresheggsmarket",
  },
};

export const PRODUCTS = {
  retail: {
    name: "Retail Eggs",
    description:
      "Fresh eggs available in smaller quantities for individual customers",
    price: "₦1,200 per crate",
    features: [
      "Premium quality eggs",
      "Same day delivery",
      "Free delivery for orders above ₦5,000",
    ],
  },
  wholesale: {
    name: "Wholesale Eggs",
    description: "Bulk egg supply for businesses and large orders",
    price: "Contact for wholesale prices",
    features: [
      "Competitive wholesale prices",
      "Regular supply guaranteed",
      "Flexible payment terms",
      "Nationwide delivery",
    ],
  },
};
