const Hero = () => {
  return (
    <section className="h-screen w-full bg-gradient-to-br from-slate-100 to-slate-300">
      <div className=" mx-auto h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">
          
          {/* Text Section */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Build Something{" "}
              <span className="text-indigo-600">Beautiful</span>
            </h1>

            <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-lg">
              Create modern, fast, and visually stunning web experiences with
              React and Tailwind CSS.
            </p>

            <div className="flex gap-4">
              <button className="px-8 py-4 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition shadow-lg">
                Get Started
              </button>

              <button className="px-8 py-4 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center md:justify-end">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Hero"
              className="w-full max-w-xl rounded-3xl shadow-2xl object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
