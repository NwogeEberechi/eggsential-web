import React from 'react';
const fishProducts = [{
  name: 'Atlantic Salmon',
  image: 'https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80',
  description: 'Our Atlantic Salmon is raised in spacious tanks with carefully controlled conditions to ensure optimal health and flavor.',
  features: ['Rich in Omega-3', 'No antibiotics', 'Sustainably raised']
}, {
  name: 'Rainbow Trout',
  image: 'https://images.unsplash.com/photo-1611171711791-b34fa42e9fc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  description: 'Our Rainbow Trout thrive in our cold, fresh water systems, producing firm, flavorful fillets with a clean taste.',
  features: ['Mild flavor', 'Versatile cooking', 'High in protein']
}, {
  name: 'Tilapia',
  image: 'https://images.unsplash.com/photo-1628504672403-ebc52d8f6ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  description: 'Our Tilapia is raised in a carefully monitored environment to ensure consistent quality and a clean, mild taste.',
  features: ['Low in fat', 'Highly sustainable', 'Year-round availability']
}];
const ProductsSection = () => {
  return <section id="products" className="py-16 bg-blue-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Fish</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-4"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We raise multiple species of fish using sustainable practices to
            ensure the highest quality and freshest taste.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fishProducts.map((fish, index) => <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="h-56 overflow-hidden">
                <img src={fish.image} alt={fish.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {fish.name}
                </h3>
                <p className="text-gray-600 mb-4">{fish.description}</p>
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">
                    Features:
                  </h4>
                  <ul className="space-y-1">
                    {fish.features.map((feature, idx) => <li key={idx} className="text-gray-600 text-sm flex items-center">
                        <span className="mr-2 text-blue-600">•</span> {feature}
                      </li>)}
                  </ul>
                </div>
              </div>
              <div className="px-6 pb-6">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium">
                  Learn More
                </button>
              </div>
            </div>)}
        </div>
        <div className="text-center mt-12">
          <button className="bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-600 px-6 py-3 rounded-md font-medium transition-colors">
            View All Fish Species
          </button>
        </div>
      </div>
    </section>;
};
export default ProductsSection;