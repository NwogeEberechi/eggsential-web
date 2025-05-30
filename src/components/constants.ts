const whatsappNumber = "2349160007184";
const message = "Hello! I want to buy eggs";
export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  message
)}`;
