import { Link } from "react-router-dom";
import bgImage from "../assets/blog-bg.jpg";
import SelectInput from "../components/reuseable/SelectInput";
const Compare = () => {
  const typeOptions = [
    { value: "", label: "Select" },
    { value: "car", label: "Car" },
    { value: "truck", label: "Truck" },
    { value: "suv", label: "SUV" },
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
                <SelectInput htmlFor="Type" options={typeOptions} />
              </div>
              <div>
                <SelectInput htmlFor="Type" options={typeOptions} />
              </div>
            </div>
            <div className="grid grid-cols-2 px-4 gap-4 my-4 ">
              <div className="border-dashed border-[2px] py-4 px-4 rounded-[12px]">
                <div>
                  <SelectInput htmlFor="Type" options={typeOptions} />
                </div>
                <div>
                  <SelectInput htmlFor="Type" options={typeOptions} />
                </div>
                <div>
                  <SelectInput htmlFor="Type" options={typeOptions} />
                </div>
              </div>

              <div className="border-dashed border-[2px] py-4 px-4 rounded-[12px]">
                <div>
                  <SelectInput htmlFor="Type" options={typeOptions} />
                </div>
                <div>
                  <SelectInput htmlFor="Type" options={typeOptions} />
                </div>
                <div>
                  <SelectInput htmlFor="Type" options={typeOptions} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Compare;
