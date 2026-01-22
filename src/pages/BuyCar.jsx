import { Link } from "react-router-dom";
import bgImage from "../assets/blog-bg.jpg";
import removeicon from "../assets/filter-remove-icon.svg";
import SelectInput from "../components/reuseable/SelectInput";
const BuyCar = () => {
  const filters = [
    "$10,000 – $50,000",
    "Crossover",
    "Gold",
    "Gray",
    "Under 2019",
  ];

  const locationOption = [
    { value: "", label: "Choose location" },
    { value: "pakistan", label: "Pakistan" },
    { value: "southafrica", label: "South Africa" },
    { value: "uae", label: "UAE" },
  ];

  return (
    <>
      <div>
        <div
          className="relative h-[300px] bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          {/* 80% Black Overlay */}
          <div className="absolute inset-0 bg-black/80"></div>

          {/* Centered Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <nav className="text-sm text-gray-300 mb-3">
              <Link to="/" className="hover:text-white">
                Home
              </Link>
              <span className="mx-2">&gt;</span>
              <span className="text-white font-medium">Buy a Car</span>
            </nav>

            <p className="text-[60px] md:text-3xl font-semibold text-white">
              Feature Listings
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center ">
          {/* Outer container */}
          <div className="w-full rounded-xl border border-black gap-4 flex overflow-hidden shadow-2xl">
            {/* Sidebar */}
            <aside className="w-72 border">
              <div className="flex justify-between p-4 border-b">
                <button className="py-[8px] px-[16px] text-[16px] text-black bg-[#F2F2F2] rounded-[8px]">
                  Buy New
                </button>
                <button className="py-[8px] px-[16px] text-[16px] text-primary bg-[#fffff] rounded-[8px] shadow-xl">
                  Buy Used
                </button>
              </div>

              <div>
                <div className="flex justify-between text-black p-4 mb-[16px]">
                  <div className="text-[18px] font-semibold">Filters</div>
                  <div className="text-[14px] ">Clear all</div>
                </div>

                <div className="p-4 flex flex-wrap gap-2 border-b">
                  {filters.map((label, index) => (
                    <div
                      key={index}
                      className="inline-flex items-center gap-1 py-[6px] px-[16px] bg-[#f2f2f2] rounded-full text-sm text-gray-800"
                    >
                      <span>{label}</span>
                      <img
                        src={removeicon}
                        alt="Remove"
                        className="w-4 h-4 cursor-pointer"
                      />
                    </div>
                  ))}
                </div>

                <div className="p-4">
                  <div className="text-[18px] font-semibold mb-4">Location</div>
                  <SelectInput htmlFor="Type" options={locationOption} />
                </div>

                <div className="p-4">
                    <div className="text-[18px] font-semibold">Body Type</div>
                </div>
              </div>
            </aside>

            {/* Main content */}
            <main className="flex-1 p-6 border"></main>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyCar;
