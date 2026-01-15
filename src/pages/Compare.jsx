import { Link } from "react-router-dom";
import bgImage from "../assets/blog-bg.jpg";
import SelectInput from "../components/reuseable/SelectInput";
import compareimg from "../assets/compare-image.svg";
import Rating from "../components/reuseable/Rating";
import deleteicon from "../assets/delete-icon.svg";
import { useState } from "react";
import ToggleButton from "../components/reuseable/ToggleButton";
import CarComparisonTable from "../components/reuseable/CarComparisonTable";

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

  const carsGroup1 = [
    {
      model: "Toyota Hilux",
      specs: {
        "Overall Length": "5325 mm",
        "Overall Width": "1855 mm",
        "Overall Height": "1815 mm",
        "Wheel Base": "3090 mm",
        "Ground Clearance": "310 mm",
        "Kerb Weight": "2060 KG",
        "Boot Space": "435 L",
        "Seating Capacity": "5 persons",
        "No. of Doors": "4 doors",
      },
    },
    {
      model: "JAC T9",
      specs: {
        "Overall Length": "5330 mm",
        "Overall Width": "1965 mm",
        "Overall Height": "1920 mm",
        "Wheel Base": "3110 mm",
        "Ground Clearance": "240 mm",
        "Kerb Weight": "2055 KG",
        "Boot Space": "1000 L",
        "Seating Capacity": "5 persons",
        "No. of Doors": "4 doors",
      },
    },
  ];
  const carsGroup2 = [
    {
      model: "Engine/ Motor",
      specs: {
        "Overall Length": "5325 mm",
        "Overall Width": "1855 mm",
        "Overall Height": "1815 mm",
        "Wheel Base": "3090 mm",
        "Ground Clearance": "310 mm",
        "Kerb Weight": "2060 KG",
        "Boot Space": "435 L",
        "Seating Capacity": "5 persons",
        "No. of Doors": "4 doors",
      },
    },
    {
      specs: {
        "Overall Length": "5330 mm",
        "Overall Width": "1965 mm",
        "Overall Height": "1920 mm",
        "Wheel Base": "3110 mm",
        "Ground Clearance": "240 mm",
        "Kerb Weight": "2055 KG",
        "Boot Space": "1000 L",
        "Seating Capacity": "5 persons",
        "No. of Doors": "4 doors",
      },
    },
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
                <div>Compare Specifications</div>
                <div className="flex items-center gap-2 justify-end">
                  Hide common specs
                  <ToggleButton
                    isActive={isCompareView}
                    onToggle={() => setIsCompareView(!isCompareView)}
                  />
                </div>
              </div>

              <div>
                <CarComparisonTable cars={carsGroup1} />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Compare;
