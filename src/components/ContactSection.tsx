import React from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from 'lucide-react';
const ContactSection = () => {
  return <section id="contact" className="py-16 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-4"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our fish or want to place an order? We'd love
            to hear from you.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Send Us a Message
            </h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="your.email@example.com" />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input type="text" id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="How can we help you?" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Your message..."></textarea>
              </div>
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium w-full md:w-auto">
                Send Message
              </button>
            </form>
          </div>
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPinIcon className="text-blue-600 mr-3 h-6 w-6 flex-shrink-0" />
                  <span className="text-gray-600">
                    1234 Aquaculture Way
                    <br />
                    Fishville, CA 90210
                  </span>
                </div>
                <div className="flex items-center">
                  <PhoneIcon className="text-blue-600 mr-3 h-6 w-6 flex-shrink-0" />
                  <span className="text-gray-600">(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MailIcon className="text-blue-600 mr-3 h-6 w-6 flex-shrink-0" />
                  <span className="text-gray-600">info@aquaharvest.com</span>
                </div>
                <div className="flex items-start">
                  <ClockIcon className="text-blue-600 mr-3 h-6 w-6 flex-shrink-0" />
                  <div className="text-gray-600">
                    <p className="font-medium">Operating Hours:</p>
                    <p>Monday-Friday: 8am - 5pm</p>
                    <p>Saturday: 9am - 2pm</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-600 rounded-lg shadow-md p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">Farm Tours</h3>
              <p className="mb-4">
                Want to see how we raise our fish? We offer guided tours of our
                facilities every Wednesday and Saturday.
              </p>
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-2 rounded-md font-medium">
                Book a Tour
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-80 w-full bg-gray-300">
            {/* This would be replaced with an actual map in a production environment */}
            <div className="h-full w-full flex items-center justify-center bg-blue-100">
              <div className="text-center p-4">
                <MapPinIcon className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                <p className="text-gray-700 font-medium">
                  Interactive Map Would Be Here
                </p>
                <p className="text-gray-600 text-sm">
                  1234 Aquaculture Way, Fishville, CA 90210
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;