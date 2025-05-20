import React from 'react';
import { RecycleIcon, DropletIcon, LeafIcon, SunIcon } from 'lucide-react';
const SustainabilitySection = () => {
  return <section id="sustainability" className="py-16 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Our Commitment to Sustainability
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-4"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We believe in responsible aquaculture that protects our environment
            while producing healthy, delicious fish.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Eco-Friendly Practices
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <RecycleIcon className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">
                    Recirculating Aquaculture Systems
                  </h4>
                  <p className="text-gray-600 mt-1">
                    Our RAS technology recycles 99% of the water we use,
                    dramatically reducing water consumption while maintaining
                    optimal conditions for our fish.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <DropletIcon className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">
                    Water Conservation
                  </h4>
                  <p className="text-gray-600 mt-1">
                    Our farm uses just 1% of the water required by conventional
                    fish farming methods, making our operation highly
                    water-efficient.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <LeafIcon className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">
                    Responsible Feed
                  </h4>
                  <p className="text-gray-600 mt-1">
                    We use sustainably sourced feed with optimized formulations
                    to reduce waste and environmental impact.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <SunIcon className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">
                    Renewable Energy
                  </h4>
                  <p className="text-gray-600 mt-1">
                    Our facilities increasingly run on solar power, reducing our
                    carbon footprint and moving toward carbon neutrality.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-200 rounded-full z-0"></div>
              <img src="https://images.unsplash.com/photo-1628138580225-9f3c08f5df3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Sustainable fish farming practices" className="rounded-lg shadow-xl relative z-10" />
            </div>
          </div>
        </div>
        <div className="mt-16 bg-blue-600 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Our Sustainability Certifications
          </h3>
          <p className="mb-6 max-w-2xl mx-auto">
            We're proud to maintain the highest standards in sustainable
            aquaculture, verified by leading certification bodies.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white p-4 rounded-lg">
              <img src="https://placehold.co/120x80/e2e8f0/1e40af?text=ASC+Certified" alt="ASC Certification" className="h-12" />
            </div>
            <div className="bg-white p-4 rounded-lg">
              <img src="https://placehold.co/120x80/e2e8f0/1e40af?text=BAP+Certified" alt="BAP Certification" className="h-12" />
            </div>
            <div className="bg-white p-4 rounded-lg">
              <img src="https://placehold.co/120x80/e2e8f0/1e40af?text=Organic" alt="Organic Certification" className="h-12" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default SustainabilitySection;