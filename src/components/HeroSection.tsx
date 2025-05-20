const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 min-h-[90vh] flex items-center">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl sm:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Fresh Eggs,
              <span className="block">
                Straight from
                <span className="text-yellow-500"> Our Farm</span>
              </span>
            </h1>
            <p className="text-2xl text-gray-600 mb-8">
              Laid daily by our happy, free-range hens. Taste the difference of
              truly fresh eggs.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-full text-xl font-semibold transition-colors"
              >
                Order Your Eggs
              </a>
              <a
                href="#learn"
                className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-4 rounded-full text-xl font-semibold transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-full h-full bg-yellow-200 rounded-3xl -z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1506976785307-8732e854ad03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2348&q=80"
              alt="Fresh farm eggs in a rustic setting"
              className="rounded-3xl shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
