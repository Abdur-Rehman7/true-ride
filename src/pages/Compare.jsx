import { Link } from "react-router-dom";
import bgImage from "../assets/blog-bg.jpg";
import SelectInput from "../components/reuseable/SelectInput";
import compareimg from "../assets/compare-image.svg";
import Rating from "../components/reuseable/Rating";
import deleteicon from "../assets/delete-icon.svg";
import { useState } from "react";
import ToggleButton from "../components/reuseable/ToggleButton";
import CarComparisonTable from "../components/reuseable/CarComparisonTable";
import ComparisonTableTwo from "../components/reuseable/CarComparisonTableTwo";
import SpecsComparisonTable from "../components/reuseable/SpecsComparisonTable";

const Compare = () => {
  const [selectedCarOne, setSelectedCarOne] = useState(null);
  const [selectedCarTwo, setSelectedCarTwo] = useState(null);

  const [isCompareView, setIsCompareView] = useState(false);

  const showNewDiv = selectedCarOne || selectedCarTwo;

  const typeOptions1 = [
    { value: "", label: "Select car to compare" },
    { value: "toyota", label: "Toyota" },
    { value: "honda", label: "Honda" },
    { value: "bmw", label: "BMW" },
    { value: "mercedes", label: "Mercedes-Benz" },
    { value: "audi", label: "Audi" },
    { value: "tesla", label: "Tesla" },
    { value: "ford", label: "Ford" },
    { value: "hyundai", label: "Hyundai" },
    { value: "kia", label: "Kia" },
  ];
  const typeOptions2 = [
    { value: "", label: "Select a make" },
    { value: "toyota", label: "Toyota" },
    { value: "honda", label: "Honda" },
    { value: "bmw", label: "BMW" },
    { value: "mercedes", label: "Mercedes-Benz" },
    { value: "audi", label: "Audi" },
    { value: "tesla", label: "Tesla" },
    { value: "ford", label: "Ford" },
    { value: "hyundai", label: "Hyundai" },
    { value: "kia", label: "Kia" },
  ];
  const typeOptions3 = [
    { value: "", label: "Select a model" },
    { value: "toyota", label: "Toyota" },
    { value: "honda", label: "Honda" },
    { value: "bmw", label: "BMW" },
    { value: "mercedes", label: "Mercedes-Benz" },
    { value: "audi", label: "Audi" },
    { value: "tesla", label: "Tesla" },
    { value: "ford", label: "Ford" },
    { value: "hyundai", label: "Hyundai" },
    { value: "kia", label: "Kia" },
  ];
  const typeOptions4 = [
    { value: "", label: "Select a varient" },
    { value: "toyota", label: "Toyota" },
    { value: "honda", label: "Honda" },
    { value: "bmw", label: "BMW" },
    { value: "mercedes", label: "Mercedes-Benz" },
    { value: "audi", label: "Audi" },
    { value: "tesla", label: "Tesla" },
    { value: "ford", label: "Ford" },
    { value: "hyundai", label: "Hyundai" },
    { value: "kia", label: "Kia" },
  ];

  const dimensionsData = {
    heading: "Dimensions",
    cars: ["Toyota Hilux", "JAC T9"],
    specs: [
      { label: "Overall Length", values: ["5325 mm", "5330 mm"] },
      { label: "Overall Width", values: ["1855 mm", "1965 mm"] },
      { label: "Overall Height", values: ["1815 mm", "1920 mm"] },
      { label: "Wheel Base", values: ["3090 mm", "3110 mm"] },
      { label: "Ground Clearance", values: ["310 mm", "240 mm"] },
      { label: "Kerb Weight", values: ["2060 KG", "2055 KG"] },
      { label: "Boot Space", values: ["435 L", "1000 L"] },
      { label: "Seating Capacity", values: ["5 persons", "5 persons"] },
      { label: "No. of Doors", values: ["4 doors", "4 doors"] },
    ],
  };

  const engineMotorData1 = {
    heading: "Engine / Motor",
    specs: [
      {
        label: "Engine Type",
        car1: "Diesel",
        car2: "Diesel",
      },
      {
        label: "Displacement",
        car1: "2755 cc",
        car2: "1999 cc",
      },
      {
        label: "Horse Power",
        car1: "201 HP @ 3400 RPM",
        car2: "168 HP @ 3600 RPM",
      },
      {
        label: "Torque",
        car1: "500 Nm @ 2800 RPM",
        car2: "410 Nm @ 2500 RPM",
      },
      {
        label: "No. of Cylinders",
        car1: "4",
        car2: "4",
      },
      {
        label: "Cylinder Configuration",
        car1: "In-Line",
        car2: "In-Line",
      },
      {
        label: "Compression Ratio",
        car1: "15.6:1",
        car2: "16:1",
      },
      {
        label: "Valves per Cylinder",
        car1: "4",
        car2: "4",
      },
      {
        label: "Valve Mechanism",
        car1: "DOHC",
        car2: "DOHC",
      },
      {
        label: "Fuel System",
        car1: "Common Rail",
        car2: "Direct Injection",
      },
      {
        label: "Max Speed",
        car1: "200 KM/H",
        car2: "150 KM/H",
      },
    ],
  };

  const engineMotorData2 = {
    heading: "Transmission",
    specs: [
      {
        label: "Transmission Type",
        car1: "Automatic (AT)",
        car2: "Automatic (AT)",
      },
      {
        label: "Gearbox",
        car1: "6 - speed",
        car2: "8 - speed",
      },
    ],
  };

  const engineMotorData3 = {
    heading: "Steering",
    specs: [
      {
        label: "Steering Type",
        car1: "Rack & Pinion",
        car2: "Rack & Pinion",
      },
      {
        label: "Power Assisted",
        car1: "Hydraulic",
        car2: "Electric",
      },
      {
        label: "Minimum Turning Radius",
        car1: "6.7m",
        car2: "5.9m",
      },
    ],
  };

  const engineMotorData4 = {
    heading: "Suspension & Brakes",
    specs: [
      {
        label: "Suspension",
        car1: "Double-Wishbone:Tube Shocks with Leaf Springs",
        car2: "Multi-Link Double Wishbone:Tube Shocks with Leaf Springs",
      },
      {
        label: "Brakes",
        car1: "Ventilated Disc:Drum",
        car2: "Ventilated Disc:Ventilated Disc",
      },
    ],
  };

  const engineMotorData5 = {
    heading: "Wheels and Tyres",
    specs: [
      {
        label: "Wheel Type",
        car1: "Alloy Wheels",
        car2: "Alloy Wheels",
      },
      {
        label: "Wheel Size",
        car1: "18 in",
        car2: "18 in",
      },
      {
        label: "PCD",
        car1: "6 x 139mm",
        car2: "-",
      },
      {
        label: "Tyre Size",
        car1: "265/60/R18",
        car2: "265/60/R18",
      },
      {
        label: "Spare Tyre",
        car1: true,
        car2: true,
      },
      {
        label: "Spare Tyre Size",
        car1: "18 in",
        car2: "18 in",
      },
    ],
  };
  const engineMotorData6 = {
    heading: "Fuel Economy",
    specs: [
      {
        label: "Fuel Tank Capacity",
        car1: "80 L",
        car2: "76 L",
      },
      {
        label: "Mileage City",
        car1: "8 KM/L",
        car2: "10 KM/L",
      },
      {
        label: "Mileage Highway",
        car1: "11 KM/L",
        car2: "12 KM/L",
      },
    ],
  };

  const safetyData = {
    heading: "Safety",
    specs: [
      {
        label: "No. of Airbags",
        car1: "3",
        car2: "7",
      },
      {
        label: "No. of Seatbelts",
        car1: "5",
        car2: "5",
      },
      {
        label: "Immobilizer",
        car1: true,
        car2: true,
      },
      {
        label: "Anti-Lock Braking System (ABS)",
        car1: true,
        car2: true,
      },
      {
        label: "Down Hill Assist Control",
        car1: true,
        car2: true,
      },
      {
        label: "Hill Start Assist Control",
        car1: true,
        car2: true,
      },
      {
        label: "Traction Control",
        car1: true,
        car2: true,
      },
      {
        label: "Vehicle Stability Control",
        car1: true,
        car2: true,
      },
      {
        label: "Child Lock",
        car1: true,
        car2: true,
      },
      {
        label: "ISOFIX Child Seat Anchors",
        car1: true,
        car2: true,
      },
    ],
  };

  const exteriorData = {
    heading: "Exterior",
    specs: [
      {
        label: "Alloy Wheels",
        car1: true,
        car2: true,
      },
      {
        label: "Front Fog Lights",
        car1: true,
        car2: true,
      },
      {
        label: "Colored Outside Door Handles",
        car1: "Body Colored",
        car2: "Chrome",
      },
      {
        label: "Side Mirrors With Indicators",
        car1: true,
        car2: true,
      },
      {
        label: "Sun Roof",
        car1: false,
        car2: true,
      },
      {
        label: "Moon Roof",
        car1: false,
        car2: false,
      },
      {
        label: "Adjustable Headlights",
        car1: true,
        car2: true,
      },
      {
        label: "DRLs",
        car1: true,
        car2: true,
      },
      {
        label: "Rear Spoiler",
        car1: false,
        car2: false,
      },
    ],
  };

  const InstrumentationData = {
    heading: "Instrumentation",
    specs: [
      {
        label: "Tachometer",
        car1: true,
        car2: true,
      },
      {
        label: "Multi Info",
        car1: true,
        car2: true,
      },
    ],
  };

  const InfotainmentData = {
    heading: "Infotainment",
    specs: [
      {
        label: "CD Player",
        car1: false,
        car2: false,
      },
      {
        label: "DVD Player",
        car1: false,
        car2: false,
      },
      {
        label: "USB and Auxillary Cable",
        car1: true,
        car2: true,
      },
      {
        label: "Display Size",
        car1: "8.0 in",
        car2: "10.0 in",
      },
      {
        label: "Front Speakers",
        car1: true,
        car2: true,
      },
      {
        label: "Rear Speakers",
        car1: true,
        car2: true,
      },
      {
        label: "Rear Seat Entertainment",
        car1: false,
        car2: false,
      },
    ],
  };

  const ComfortandConvenienceData = {
    heading: "Infotainment",
    specs: [
      {
        label: "Air Conditioner",
        car1: true,
        car2: true,
      },
      {
        label: "Climate Control",
        car1: true,
        car2: true,
      },
      {
        label: "Heater",
        car1: true,
        car2: true,
      },
      {
        label: "Defogger",
        car1: false,
        car2: false,
      },
      {
        label: "Key Type",
        car1: "Smart Key with Panic Button",
        car2: "Smart entery",
      },
      {
        label: "Keyless Entry",
        car1: true,
        car2: true,
      },
      {
        label: "Push Start",
        car1: true,
        car2: true,
      },
      {
        label: "Central Locking",
        car1: true,
        car2: true,
      },
      {
        label: "Power Door Locks",
        car1: true,
        car2: true,
      },
      {
        label: "Power Steering",
        car1: true,
        car2: true,
      },
      {
        label: "Power Windows",
        car1: true,
        car2: true,
      },
      {
        label: "Power Mirrors",
        car1: true,
        car2: true,
      },
      {
        label: "Power Boot",
        car1: false,
        car2: false,
      },
      {
        label: "Steering Adjustment",
        car1: true,
        car2: true,
      },
      {
        label: "Steering Switches",
        car1: true,
        car2: true,
      },
      {
        label: "Cruise Control",
        car1: false,
        car2: false,
      },
      {
        label: "Driving Modes",
        car1: true,
        car2: true,
      },
      {
        label: "Navigation",
        car1: true,
        car2: true,
      },
      {
        label: "Optional Navigation",
        car1: false,
        car2: false,
      },
      {
        label: "Front Camera",
        car1: false,
        car2: true,
      },
      {
        label: "Rear Camera",
        car1: true,
        car2: true,
      },
      {
        label: "Rear Central Control",
        car1: false,
        car2: false,
      },
      {
        label: "Rear AC Vents",
        car1: true,
        car2: true,
      },
      {
        label: "Rear Folding Seat",
        car1: false,
        car2: true,
      },
      {
        label: "Rear Headrest",
        car1: 3,
        car2: 3,
      },
      {
        label: "Rear Wiper",
        car1: false,
        car2: false,
      },
      {
        label: "Seat Material Type",
        car1: "Leather Seats with Powered Adjustments",
        car2: "Leather  with Powered Adjustments",
      },
      {
        label: "Heated Seats",
        car1: false,
        car2: true,
      },
      {
        label: "Arm Rest",
        car1: true,
        car2: true,
      },
      {
        label: "Handbrake",
        car1: "Manual",
        car2: "Electric",
      },
      {
        label: "Cup Holders",
        car1: true,
        car2: true,
      },
      {
        label: "CoolBox",
        car1: true,
        car2: true,
      },
      {
        label: "Interior Lighting",
        car1: true,
        car2: true,
      },
      {
        label: "Front Power Outlet",
        car1: true,
        car2: true,
      },
      {
        label: "Rear Power Outlet",
        car1: false,
        car2: true,
      },
    ],
  };

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
              <span className="text-white font-medium">Compare Cars</span>
            </nav>

            <p className="text-[60px] md:text-3xl font-semibold text-white">
              Compare New Cars
            </p>
          </div>
        </div>

        <div className="px-20">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-[54px]">Select Cars to Compare</div>
              <div className="text-[28px] text-[#3B3B3B]">
                Compare new car features, pricing, details and specifications
                side by side.
              </div>
            </div>
            <div>
              <button className="text-[24px] text-[#3B3B3B] border border-[#D5D5D5] rounded-[10px] py-2 px-2">
                Remove All Cars
              </button>
            </div>
          </div>

          <div className="border-[2px] border-[#D7D7D7] rounded-[24px] py-4 px-4 my-8">
            <div className="grid grid-cols-2 px-4 gap-4">
              <div>
                <SelectInput
                  htmlFor="Type"
                  options={typeOptions1}
                  value={selectedCarOne}
                  onChange={(e) => setSelectedCarOne(e.target.value)}
                />

                {selectedCarOne && (
                  <div className="border border-[#C2C2C2] rounded-[16px] p-2 my-4">
                    <div
                      className="h-[220px] bg-cover bg-center rounded-[16px] relative"
                      style={{ backgroundImage: `url(${compareimg})` }}
                    >
                      <button
                        type="button"
                        className="absolute top-3 right-3 bg-[#393939] rounded-full p-1 shadow-xl"
                        aria-label="Remove car"
                      >
                        <img src={deleteicon} alt="" />
                      </button>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="text-[26px] font-bold text-primary">
                        $42,900
                      </div>
                      <div className="text-[20px] font-bold">Toyota Hilux</div>

                      <div>
                        <Rating />
                      </div>

                      <div className="w-full">
                        <SelectInput
                          htmlFor="Type"
                          options={typeOptions4}
                          className="w-full"
                        />
                      </div>

                      <button
                        type="submit"
                        className="bg-primary text-[20px] font-semibold w-full py-[10px] px-[30px] rounded-[12px] my-2"
                      >
                        Search cars for sale
                      </button>

                      <div className="text-center border-b border-black my-2">
                        Book a test drive
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div>
                <SelectInput
                  htmlFor="Type"
                  options={typeOptions1}
                  value={selectedCarTwo}
                  onChange={(e) => setSelectedCarTwo(e.target.value)}
                />

                {selectedCarTwo && (
                  <div className="border border-[#C2C2C2] rounded-[16px] p-2 my-4">
                    <div
                      className="h-[220px] bg-cover bg-center rounded-[16px] relative"
                      style={{ backgroundImage: `url(${compareimg})` }}
                    >
                      <button
                        type="button"
                        className="absolute top-3 right-3 bg-[#393939] rounded-full p-1 shadow-xl"
                        aria-label="Remove car"
                      >
                        <img src={deleteicon} alt="" />
                      </button>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="text-[26px] font-bold text-primary">
                        $42,900
                      </div>
                      <div className="text-[20px] font-bold">Toyota Hilux</div>

                      <div>
                        <Rating />
                      </div>

                      <div className="w-full">
                        <SelectInput
                          htmlFor="Type"
                          options={typeOptions4}
                          className="w-full"
                        />
                      </div>

                      <button
                        type="submit"
                        className="bg-primary text-[20px] font-semibold w-full py-[10px] px-[30px] rounded-[12px] my-2"
                      >
                        Search cars for sale
                      </button>

                      <div className="text-center border-b border-black my-2">
                        Book a test drive
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {!showNewDiv && (
              <div className="grid grid-cols-2 px-4 gap-4 my-4">
                <div className="border-dashed border-[2px] py-4 px-4 rounded-[12px]">
                  <div className="my-2">
                    <SelectInput htmlFor="carOne" options={typeOptions2} />
                  </div>
                  <div className="my-2">
                    <SelectInput htmlFor="carOne2" options={typeOptions3} />
                  </div>
                  <div className="my-2">
                    <SelectInput htmlFor="carOne3" options={typeOptions4} />
                  </div>
                </div>

                <div className="border-dashed border-[2px] py-4 px-4 rounded-[12px]">
                  <div className="my-2">
                    <SelectInput htmlFor="carTwo" options={typeOptions2} />
                  </div>
                  <div className="my-2">
                    <SelectInput htmlFor="carTwo2" options={typeOptions3} />
                  </div>
                  <div className="my-2">
                    <SelectInput htmlFor="carTwo3" options={typeOptions4} />
                  </div>
                </div>
              </div>
            )}
          </div>
          {showNewDiv && (
            <div className="px-4 my-4">
              <div className="grid grid-cols-2 ">
                <div className="text-[26px] font-semibold">
                  Compare Specifications
                </div>
                <div className="flex items-center gap-2 justify-end text-[16px]">
                  Hide common specs
                  <ToggleButton
                    isActive={isCompareView}
                    onToggle={() => setIsCompareView(!isCompareView)}
                  />
                </div>
              </div>

              <div>
                <SpecsComparisonTable data={dimensionsData} />
                <ComparisonTableTwo data={engineMotorData1} />
                <ComparisonTableTwo data={engineMotorData2} />
                <ComparisonTableTwo data={engineMotorData3} />
                <ComparisonTableTwo data={engineMotorData4} />
                <ComparisonTableTwo data={engineMotorData5} />
                <ComparisonTableTwo data={engineMotorData6} />
              </div>
              <div className="flex justify-between items-center">
                <div className="text-[26px] font-semibold">
                  Compare Features
                </div>
                <div className="flex items-center gap-2 justify-end text-[16px]">
                  Hide common Feature
                  <ToggleButton
                    isActive={isCompareView}
                    onToggle={() => setIsCompareView(!isCompareView)}
                  />
                </div>
              </div>
              <ComparisonTableTwo data={safetyData} />
              <ComparisonTableTwo data={exteriorData} />
              <ComparisonTableTwo data={InstrumentationData} />
              <ComparisonTableTwo data={InfotainmentData} />
              <ComparisonTableTwo data={ComfortandConvenienceData} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Compare;
