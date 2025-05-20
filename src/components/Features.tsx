import React from 'react';
import { SunIcon, LeafIcon, HeartIcon } from 'lucide-react';
const Features = () => {
  return <section id="learn" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-gray-900 text-center mb-16">
          Why Our Eggs Are Special
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <SunIcon className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Fresh Daily</h3>
            <p className="text-xl text-gray-600">
              Collected every morning, delivered the same day
            </p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <LeafIcon className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">100% Natural</h3>
            <p className="text-xl text-gray-600">
              No hormones, just healthy, happy hens
            </p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <HeartIcon className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Family Owned</h3>
            <p className="text-xl text-gray-600">
              Three generations of caring for chickens
            </p>
          </div>
        </div>
        <div className="mt-20 bg-white rounded-3xl p-12 text-center">
          <h3 className="text-4xl font-bold mb-6">
            From Our Farm to Your Table
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Every egg is hand-collected, cleaned, and carefully packed to ensure
            you get the best quality possible. We take pride in our eggs, and we
            know you'll taste the difference.
          </p>
          <img src="https://images.unsplash.com/photo-1509479100390-f83a8349e79c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" alt="Fresh eggs in a beautiful farm setting" className="rounded-2xl shadow-lg mx-auto" />
        </div>
      </div>
    </section>;
};
export default Features;