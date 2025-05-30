import React from "react";
import logo from "../assets/logo.jpg";
const Header = () => {
  const whatsappNumber = "2349160007184";
  const message = "Hello! I want to buy eggs";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              // src="https://uploadthingy.s3.us-west-1.amazonaws.com/uHHZkK4yqAyZroPUKE2piY/pasted-image.jpg"
              src={logo}
              alt="Fresh Eggs Market"
              className="h-12 w-auto"
            />
            <span className="text-2xl font-bold text-gray-900">
              Fresh Eggs Market
            </span>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
          >
            Buy Eggs
          </a>
        </div>
      </div>
    </header>
  );
};
export default Header;
