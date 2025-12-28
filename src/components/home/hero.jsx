import heroimg from "./assets/hero-img.svg";
const Hero = () => {
  return (
    <section className="h-screen p-4 w-full bg-[#000000] from-slate-100 to-slate-300">
      <div className=" mx-auto h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center w-full">
          {/* Text Section */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Your Next Car Is Just a Click Away
            </h1>

            <p className="text-white text-lg md:text-xl mb-10 max-w-lg">
              Search thousands of real listings from verified sellers. Compare
              prices, check car history, and connect instantly. Whether you're
              buying or selling, our platform makes every step effortless and
              secure.
            </p>

            <div className="flex gap-4">
              <button className="px-8 py-4 rounded-md bg-primary text-black font-medium transition shadow-lg">
                Post an Ad
              </button>

              <button className="px-8 py-4 bg-[#000000] rounded-md border border-gray-300 text-white transition">
                Sell/Buy a car
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center md:justify-end h-full">
            <img
              src={heroimg}
              alt="Hero"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
