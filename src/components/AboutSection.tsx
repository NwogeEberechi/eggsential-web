import React from 'react';
import { DropletIcon, LeafIcon, FishIcon } from 'lucide-react';
const AboutSection = () => {
  return <section id="about" className="py-16 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            About AquaHarvest
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Story
            </h3>
            <p className="text-gray-600 mb-4">
              Founded in 2005, AquaHarvest began with a simple mission: to
              produce high-quality fish through sustainable aquaculture
              practices. What started as a small family operation has grown into
              one of the region's most respected fish farms.
            </p>
            <p className="text-gray-600 mb-4">
              We believe in working with nature, not against it. Our
              recirculating aquaculture systems minimize water usage while
              creating optimal conditions for our fish to thrive without
              antibiotics or harmful chemicals.
            </p>
            <p className="text-gray-600">
              Today, we supply restaurants, markets, and families with fresh,
              locally-raised fish that you can feel good about eating.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1581262208435-41726149a759?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="Fish farm facility with workers" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <DropletIcon className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Clean Water Systems
            </h3>
            <p className="text-gray-600">
              Our advanced filtration systems ensure clean water for our fish
              while minimizing environmental impact.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <LeafIcon className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Sustainable Practices
            </h3>
            <p className="text-gray-600">
              From feed selection to waste management, sustainability is at the
              core of everything we do.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <FishIcon className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Premium Fish
            </h3>
            <p className="text-gray-600">
              We raise a variety of species in optimal conditions to ensure the
              highest quality and taste.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;