import { Link } from "react-router-dom";
import compareicon from "../assets/compare-icon.svg";
import saveicon from "../assets/save-icon.svg";
import shareicon from "../assets/share-icon.svg";
import gasoline from "../assets/gasoline-icon.svg";
import miles from "../assets/miles-icon.svg";
import manual from "../assets/manual-icon.svg";
import celender from "../assets/celender-icon.svg";
import buycarone from "../assets/buy-car-1.png";
import buycartwo from "../assets/buy-car-2.png";

const CardDetail = () => {
  return (
    <>
      <div className="p-4">
        <div className="flex justify-between">
          <div>
            <nav className="text-sm text-gray-300 mb-3">
              <Link to="/" className="text-black">
                Home
              </Link>
              <span className="mx-2 text-[#676767]">&gt;</span>
              <span className="text-[#676767] font-medium">Buy a Car</span>
            </nav>
            <div className="text-[40px] text-[#000000]">2024 Jaguar F-PACE</div>
          </div>
          <div className="flex gap-[10px]">
            <div className="flex items-center gap-[10px]">
              <div className="w-[36px] h-[36px] rounded-[18px] border border-[#E9E9E9] flex items-center justify-center">
                <img src={compareicon} alt="" />
              </div>
              Compare
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="w-[36px] h-[36px] rounded-[18px] border border-[#E9E9E9] flex items-center justify-center">
                <img src={saveicon} alt="" />
              </div>
              Save
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="w-[36px] h-[36px] rounded-[18px] border border-[#E9E9E9] flex items-center justify-center">
                <img src={shareicon} alt="" />
              </div>
              Share
            </div>
          </div>
        </div>

        <div className="flex gap-[10px]">
          <div className="flex gap-2 py-[6px] px-[20px] border border-[#E1E1E1] rounded-[40px]">
            <img src={gasoline} alt="gasoline icon" />
            Gasoline
          </div>
          <div className="flex gap-2 py-[6px] px-[20px] border border-[#E1E1E1] rounded-[40px]">
            <img src={miles} alt="miles icon" />
            250 miles
          </div>
          <div className="flex gap-2 py-[6px] px-[20px] border border-[#E1E1E1] rounded-[40px]">
            <img src={manual} alt="manual icon" />
            manual
          </div>
          <div className="flex gap-2 py-[6px] px-[20px] border border-[#E1E1E1] rounded-[40px]">
            <img src={celender} alt="celender icon" />
            2025
          </div>
        </div>

        <div className="flex gap-4 my-[30px]">
          {/* Left big section */}
          <div className="flex-1 h-[625px] bg-green-500 rounded-xl">
            <div className="absolute top-4 left-4 text-[20px] bg-black text-white px-3 py-1 rounded">Featured</div>
            <img
              src={buycarone}
              alt="buy car one image"
              className="h-[625px] rounded-xl"
            />
          </div>

          {/* Right stacked sections */}
          <div className="flex flex-col gap-[23px] w-[290px]">
            <div className="h-[192px] bg-green-500 rounded-[23px]">
              <img
                src={buycartwo}
                alt="buy car one image"
                className="w-full h-[192px] bg-green-500 rounded-[23px]"
              />
            </div>
            <div className="h-[192px] bg-green-500 rounded-[23px]">
              <img
                src={buycartwo}
                alt="buy car one image"
                className="w-full h-[192px] bg-green-500 rounded-[23px]"
              />
            </div>
            <div className="relative h-[192px] bg-green-500 rounded-[23px] overflow-hidden">
              <img
                src={buycartwo}
                alt="buy car one image"
                className="w-full h-[192px] bg-green-500 rounded-[23px]"
              />
              <div className="flex items-center justify-center absolute inset-0 bg-[#574C4C]/70 text-[20px] text-white font-bold">
                +12
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetail;
