import React, { Component } from "react";
import { MessageCircleIcon } from "lucide-react";
const WhatsAppButton = () => {
  const whatsappNumber = "+2349160007184";
  const message = "Hello! I'm interested in buying eggs.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-[#25D366] hover:bg-[#128C7E] text-white p-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-50 flex items-center justify-center"
    >
      <MessageCircleIcon size={36} />
    </a>
  );
};
export default WhatsAppButton;
