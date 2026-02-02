import heroimg from "./assets/hero-img.svg";

const Hero = () => {
  return (
    <section className="relative h-[759px] w-full bg-black overflow-hidden">
      <div
        className="w-[85%] mx-auto h-full flex items-center"
        style={{
          backgroundImage: `url(${heroimg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <div className="max-w-xl">
          <h1 className="text-[72px] md:text-6xl font-semibold text-white leading-tight mb-6">
            Your Next Car Is Just a Click Away
          </h1>

          <p className="text-white text-[20px] md:text-xl mb-10">
            Search thousands of real listings from verified sellers. Compare
            prices, check car history, and connect instantly.
          </p>

          <div className="flex gap-4">
            <button className="px-8 py-4 rounded-md bg-primary text-[18px] text-black font-medium shadow-lg">
              Post an Ad
            </button>

            <button className="px-8 py-4 bg-black rounded-md border border-gray-300 text-[18px] text-white">
              Sell/Buy a car
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

{
  /* Image Section (OVERLAPPING) */
}
{
  /* <div className="absolute right-[12%] top-1/2 -translate-y-1/2 z-0">
  <img src={heroimg} alt="Hero" className="w-[120%] max-w-none" />
</div> */
}
// <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center w-full relative z-10">

//   <div className="max-w-xl">
//     <h1 className="text-[72px] md:text-6xl font-semibold text-white leading-tight mb-6">
//       Your Next Car Is Just a Click Away
//     </h1>

//     <p className="text-white text-[20px] md:text-xl mb-10">
//       Search thousands of real listings from verified sellers. Compare
//       prices, check car history, and connect instantly.
//     </p>

//     <div className="flex gap-4">
//       <button className="px-8 py-4 rounded-md bg-primary text-[18px] text-black font-medium shadow-lg">
//         Post an Ad
//       </button>

//       <button className="px-8 py-4 bg-black rounded-md border border-gray-300 text-[18px] text-white">
//         Sell/Buy a car
//       </button>
//     </div>
//   </div>
// </div>
