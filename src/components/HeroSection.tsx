import React, { Component } from "react";
import {
  PhoneIcon,
  MapPinIcon,
  InstagramIcon,
  FacebookIcon,
} from "lucide-react";
import heroImage from "../assets/hero.png";
import logo from "../assets/logo.jpg";
import giftImage from "../assets/gift-bags.jpg";
import depotImage from "../assets/depot.jpg";
import { BUSINESS_INFO } from "./constants";
import { trackWhatsAppClick } from "../utils/analytics";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Main Content */}
        <div className="text-center mb-16">
          <div className="bg-yellow-100 text-yellow-800 px-6 py-3 rounded-full inline-block mb-8 text-lg">
            Opening June 6th, 2025
          </div>
          <h1 className="text-6xl sm:text-7xl font-bold text-gray-900 leading-tight mb-8">
            Fresh Eggs in Bulk
            <span className="block mt-4 text-[#FFC107]">At Farm Prices</span>
          </h1>
          <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            We sell farm-fresh eggs in bulk at the best prices in Lagos.
            Wholesale and retail available.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white px-12 py-6 rounded-full text-2xl font-semibold transition-all duration-300 inline-flex items-center justify-center gap-3"
              onClick={() =>
                trackWhatsAppClick("Buy Eggs Button - Hero Section")
              }
            >
              Buy Fresh Farm Eggs
            </a>
          </div>
        </div>
        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-8">
            <img
              // src="https://uploadthingy.s3.us-west-1.amazonaws.com/4EFGo3XSfJP1DFkkUoTCrk/pasted-image.png"
              src={heroImage}
              alt="Fresh Eggs Market Promotional"
              className="w-full rounded-2xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
            />
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Special Opening Offer
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                Get our exclusive gift bags with bulk orders! Limited time
                offer.
              </p>
              <img
                // src="https://uploadthingy.s3.us-west-1.amazonaws.com/pzDqo1dZcwFebqXGDS4KK8/pasted-image.jpg"
                src={giftImage}
                alt="Free gift bags for bulk buyers"
                className="w-40 mx-auto rounded-lg shadow-md"
              />
            </div>
          </div>
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <img
                // src="https://uploadthingy.s3.us-west-1.amazonaws.com/uHHZkK4yqAyZroPUKE2piY/pasted-image.jpg"
                src={logo}
                alt="Fresh Eggs Logo"
                className="w-40 mx-auto mb-6"
              />
              <p className="text-xl text-gray-700 text-center">
                Visit our new location at Spring Valley Estate
              </p>
            </div>
            <img
              // src="https://uploadthingy.s3.us-west-1.amazonaws.com/r2owZDNq3PbnoduV3VD1pN/pasted-image.jpg"
              src={giftImage}
              alt="Fresh Eggs Market Store"
              className="w-full rounded-2xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </div>
        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <a
            href="tel:+2349160007184"
            className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center group"
          >
            <PhoneIcon className="w-8 h-8 text-[#FFC107] mx-auto mb-4 transform group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Call Us
            </h3>
            <p className="text-lg text-gray-600">+234 916 000 7184</p>
          </a>
          <a
            href="mailto:fresheggsmarket@gmail.com"
            className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center group"
          >
            <MapPinIcon className="w-8 h-8 text-[#FFC107] mx-auto mb-4 transform group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Email Us
            </h3>
            <p className="text-lg text-gray-600">fresheggsmarket@gmail.com</p>
          </a>
          <a
            href="https://www.instagram.com/fresheggsmarket"
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center group"
          >
            <InstagramIcon className="w-8 h-8 text-[#FFC107] mx-auto mb-4 transform group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Instagram
            </h3>
            <p className="text-lg text-gray-600">@fresheggsmarket</p>
          </a>
          <a
            href="https://web.facebook.com/fresheggsmarket"
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center group"
          >
            <FacebookIcon className="w-8 h-8 text-[#FFC107] mx-auto mb-4 transform group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Facebook
            </h3>
            <p className="text-lg text-gray-600">Fresh Eggs Market</p>
          </a>
        </div>
        {/* Location */}
        <div className="text-center bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Visit Our Egg Depot
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Spring Valley Estate, Alasia Busstop,
            <br />
            Before LBS, Lekki-Epe Expway, Lagos
          </p>
          <img
            // src="https://uploadthingy.s3.us-west-1.amazonaws.com/r2owZDNq3PbnoduV3VD1pN/pasted-image.jpg"
            src={depotImage}
            alt="Fresh Eggs Market Store Location"
            className="w-full rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
