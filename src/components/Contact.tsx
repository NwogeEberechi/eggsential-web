import React from "react";
const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-8">
          Ready to Order?
        </h2>
        <p className="text-2xl text-gray-600 mb-12">
          Fill out the form below and we'll deliver fresh eggs to your doorstep
        </p>
        <form className="space-y-6 text-left">
          <div>
            <label
              htmlFor="name"
              className="block text-xl font-medium text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-6 py-4 text-xl border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-xl font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-6 py-4 text-xl border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="quantity"
              className="block text-xl font-medium text-gray-700 mb-2"
            >
              How many dozens?
            </label>
            <select
              id="quantity"
              className="w-full px-6 py-4 text-xl border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
            >
              <option>1 dozen</option>
              <option>2 dozens</option>
              <option>3 dozens</option>
              <option>4+ dozens</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-xl font-medium text-gray-700 mb-2"
            >
              Special requests
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-6 py-4 text-xl border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
              placeholder="Any special instructions..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-xl font-semibold px-8 py-4 rounded-full transition-colors"
          >
            Place Order
          </button>
        </form>
        <p className="mt-8 text-xl text-gray-600">
          Questions? Call us at 08136493007
        </p>
      </div>
    </section>
  );
};
export default Contact;
