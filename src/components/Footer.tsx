import React from 'react';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-blue-900 text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">AquaHarvest</h3>
            <p className="text-blue-100 mb-4">
              Sustainable fish farming for a better tomorrow. Quality seafood
              raised with care for our environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white">
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-blue-200 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-blue-200 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="text-blue-200 hover:text-white">
                  Our Fish
                </a>
              </li>
              <li>
                <a href="#sustainability" className="text-blue-200 hover:text-white">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#contact" className="text-blue-200 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Fish Species</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-200 hover:text-white">
                  Atlantic Salmon
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white">
                  Rainbow Trout
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white">
                  Tilapia
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white">
                  Barramundi
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white">
                  Arctic Char
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-blue-100 mb-4">
              Subscribe to receive updates about our products and promotions.
            </p>
            <form>
              <div className="flex">
                <input type="email" placeholder="Your email" className="px-4 py-2 w-full rounded-l-md text-gray-900 focus:ring-blue-500 focus:border-blue-500" />
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm">
            &copy; {new Date().getFullYear()} AquaHarvest Fish Farm. All rights
            reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <a href="#" className="text-blue-200 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;