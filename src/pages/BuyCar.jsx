import { Link } from "react-router-dom";
import bgImage from "../assets/blog-bg.jpg";
import removeicon from "../assets/filter-remove-icon.svg";
import SelectInput from "../components/reuseable/SelectInput";
import FilterCheckBox from "../components/reuseable/FilterCheckBox";
import line from "../assets/year-between-line.svg";
import PriceFilter from "../components/reuseable/PriceFilter";
import ToggleButton from "../components/reuseable/ToggleButton";
import sorticon from "../assets/sorting-icon.svg";
import caricon from "../assets/car-icon.svg";
import { useState } from "react";
import FeaturedListingCard from "../components/home/FeaturedListingCard";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoArrowForwardOutline } from "react-icons/io5";
const BuyCar = () => {
  const [isCompareView, setIsCompareView] = useState(false);
  const [bodyTypes, setBodyTypes] = useState(["Crossover"]);
  const [driveTypes, setDriveTypes] = useState([""]);
  const [fuelTypes, setFuelTypes] = useState([""]);
  const [transmission, setTransmission] = useState([""]);
  const [color, setColor] = useState([""]);
  const [sellers, setSellers] = useState([""]);

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
  const makeOption = [
    { value: "", label: "Any make" },
    { value: "pakistan", label: "Pakistan" },
    { value: "southafrica", label: "South Africa" },
    { value: "uae", label: "UAE" },
  ];
  const modelOption = [
    { value: "", label: "Any model" },
    { value: "pakistan", label: "Pakistan" },
    { value: "southafrica", label: "South Africa" },
    { value: "uae", label: "UAE" },
  ];
  const allYearOption = [
    { value: "", label: "All" },
    { value: "pakistan", label: "2016" },
    { value: "southafrica", label: "2017" },
    { value: "uae", label: "2018" },
  ];
  const selectYearOption = [
    { value: "", label: "2019" },
    { value: "pakistan", label: "2019" },
    { value: "southafrica", label: "2020" },
    { value: "uae", label: "2021" },
    { value: "pakistan", label: "2022" },
    { value: "southafrica", label: "2023" },
    { value: "uae", label: "2024" },
    { value: "uae", label: "2025" },
    { value: "uae", label: "2026" },
  ];
  const mileageOption = [
    { value: "", label: "Any make" },
    { value: "pakistan", label: "Pakistan" },
    { value: "southafrica", label: "South Africa" },
    { value: "uae", label: "UAE" },
  ];

  const BODY_TYPES = ["Sedan", "SUV", "Wagon", "Crossover", "Coupe", "Pickup"];
  const Drive_TYPES = ["AWD/4WD", "Front Wheel Drive", "Rear Wheel Drive"];
  const Fuel_TYPES = [
    "Diesel",
    "Electric",
    "Gasoline",
    "Hybrid",
    "Hydrogen",
    "Plug-in Hybrid",
  ];
  const Transmission = [
    "Automatic",
    "Manual 5 Speed",
    "Manual 6 Speed",
    "Manual 7 Speed",
  ];
  const Color = ["Black", "Blue", "Brown", "Gold", "Gray", "Green"];
  const Sellers = ["Dealers Only ", "Private Sellers Only"];

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
          <div className="w-full mt-4 gap-4 flex overflow-hidden shadow-2xl">
            {/* Sidebar */}
            <aside className="w-72 border self-start rounded-[10px]">
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

                <div className="p-4 mb-[32px]">
                  <div className="text-[18px] font-semibold mb-4">Location</div>
                  <SelectInput htmlFor="Type" options={locationOption} />
                </div>

                <div className="p-4 mb-[32px]">
                  <div className="text-[18px] font-semibold mb-[12px]">
                    Body Type
                  </div>
                  <div>
                    <FilterCheckBox
                      options={BODY_TYPES}
                      value={bodyTypes}
                      onChange={setBodyTypes}
                    />
                  </div>
                </div>

                <div className="p-4 mb-[32px]">
                  <div className="mb-[12px] text-[18px] font-semibold">
                    Make & Model
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <SelectInput htmlFor="Type" options={makeOption} />
                    <SelectInput htmlFor="Type" options={modelOption} />
                  </div>
                </div>

                <div className="p-4 mb-[32px]">
                  <div className="mb-[12px] text-[18px] font-semibold">
                    Year
                  </div>
                  <div className="flex gap-[8px]">
                    <SelectInput htmlFor="Type" options={allYearOption} />
                    <img src={line} alt="" />
                    <SelectInput htmlFor="Type" options={selectYearOption} />
                  </div>
                </div>

                <div className="p-4 mb-[32px]">
                  <div className="mb-[24px] text-[18px] font-semibold">
                    Price
                  </div>
                  <div>
                    <PriceFilter />
                    <div className="flex gap-4 mt-[12px]">
                      <ToggleButton
                        isActive={isCompareView}
                        onToggle={() => setIsCompareView(!isCompareView)}
                      />
                      <div className="text-[14px] text-[#828282]">
                        Negotiated price
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 mb-[32px]">
                  <div className="text-[18px] font-semibold mb-[12px]">
                    Drive Type
                  </div>
                  <div>
                    <FilterCheckBox
                      options={Drive_TYPES}
                      value={driveTypes}
                      onChange={setDriveTypes}
                    />
                  </div>
                </div>

                <div className="p-4 mb-[32px]">
                  <div className="text-[18px] font-semibold mb-[12px]">
                    Fuel Type
                  </div>
                  <div>
                    <FilterCheckBox
                      options={Fuel_TYPES}
                      value={fuelTypes}
                      onChange={setFuelTypes}
                    />
                  </div>
                </div>

                <div className="p-4 mb-[32px]">
                  <div className="text-[18px] font-semibold mb-[12px]">
                    Transmission
                  </div>
                  <div>
                    <FilterCheckBox
                      options={Transmission}
                      value={transmission}
                      onChange={setTransmission}
                    />
                  </div>
                </div>

                <div className="p-4">
                  <div className="text-[18px] font-semibold mb-4">Mileage</div>
                  <SelectInput htmlFor="Type" options={mileageOption} />
                </div>

                <div className="p-4 mb-[32px]">
                  <div className="text-[18px] font-semibold mb-[12px]">
                    Color
                  </div>
                  <div>
                    <FilterCheckBox
                      options={Color}
                      value={color}
                      onChange={setColor}
                    />
                  </div>
                </div>

                <div className="p-4 mb-[32px]">
                  <div className="text-[18px] font-semibold mb-[12px]">
                    Sellers
                  </div>
                  <div>
                    <FilterCheckBox
                      options={Sellers}
                      value={sellers}
                      onChange={setSellers}
                    />
                  </div>
                </div>
              </div>
            </aside>

            {/* Main content */}
            <main className="flex-1 p-4">
              <div className="text-[40px] font-bold">Used Cars</div>

              <div className="flex justify-between items-center border-b py-4">
                <div className="flex items-center gap-[12px]">
                  <div className="flex">
                    <img src={sorticon} alt="" />
                    Sort by:
                  </div>
                  <select className="border rounded-[6px] px-2 py-1">
                    <option>Newest</option>
                    <option>By Category</option>
                    <option>Oldest</option>
                  </select>
                </div>
                <div className="flex gap-2">
                  <img src={caricon} alt="" />
                  249 Offers
                </div>
              </div>

              <div className="grid grid-cols-[auto_1fr] gap-[20px] my-4 mx-auto">
                <FeaturedListingCard />
                <FeaturedListingCard />
                <FeaturedListingCard />
                <FeaturedListingCard />
                <FeaturedListingCard />
                <FeaturedListingCard />
                <FeaturedListingCard />
                <FeaturedListingCard />
                <FeaturedListingCard />
                <FeaturedListingCard />
              </div>

              <div className="flex justify-between my-4 mx-8 border-t py-4">
                <div className="flex items-center gap-2">
                  <IoArrowBackOutline />
                  <p>Previous</p>
                </div>
                <div className="flex gap-1">
                  <div className="bg-primary w-[40px] h-[40px] rounded-full flex items-center justify-center text-black font-semibold">
                    1
                  </div>
                  <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center text-black font-semibold">
                    2
                  </div>
                  <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center text-black font-semibold">
                    3
                  </div>
                  <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center text-black font-semibold">
                    ...
                  </div>
                  <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center text-black font-semibold">
                    8
                  </div>
                  <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center text-black font-semibold">
                    9
                  </div>
                  <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center text-black font-semibold">
                    10
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <p>Next</p>
                  <IoArrowForwardOutline />
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyCar;
