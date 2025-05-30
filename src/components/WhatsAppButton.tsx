import React, { Component } from "react";
import { MessageCircleIcon } from "lucide-react";
import { whatsappUrl } from "./constants";
const WhatsAppButton = () => {
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
