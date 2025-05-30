import React, { Component } from "react";
import { MessageCircleIcon } from "lucide-react";
import { BUSINESS_INFO } from "./constants";
import { trackWhatsAppClick } from "../utils/analytics";
const WhatsAppButton = () => {
  return (
    <a
      href={BUSINESS_INFO.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-[#25D366] hover:bg-[#128C7E] text-white p-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-50 flex items-center justify-center"
      onClick={() =>
        trackWhatsAppClick("WhatsApp Button - WhatsApp Icon Button")
      }
    >
      <MessageCircleIcon size={36} />
    </a>
  );
};
export default WhatsAppButton;
