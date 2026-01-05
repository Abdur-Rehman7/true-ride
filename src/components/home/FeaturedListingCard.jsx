import img from "./assets/featured-img.svg";
import heart from "./assets/heart.svg";
import gallery from "./assets/gallery.svg";
import arrow from "./assets/arrow-left-right.svg";
import play from "./assets/play.svg";
import { IoStar } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import diesel from "./assets/diesel.svg";
import odometer from "./assets/odometer.svg";
import hp from "./assets/hp.svg";
import suv from "./assets/suv.svg";
import color from "./assets/color.svg";

const FeaturedListingCard = () => {
  return (
    <>
      <div
        class="w-[360px] bg-white rounded-2xl border px-[12px] pt-[12px] pb-[24px] border-[#C2C2C2]
            transition-all duration-300 ease-in-out
            hover:shadow-xl hover:border-transparent
            hover:cursor-pointer overflow-hidden"
      >
        <div class="relative">
          <img
            src={img}
            alt="Hyundai Tucson"
            class="w-full h-[262px] object-cover rounded-2xl"
          />

          <span class="absolute top-3 left-3 bg-white text-xs font-semibold px-3 py-1 rounded shadow">
            Fair Deal
          </span>

          <div class="absolute top-3 right-3 flex flex-col gap-2">
            <button class="w-9 h-9 bg-[#393939] rounded-full flex items-center justify-center shadow">
              <img src={heart} alt="heart" />
            </button>
            <button class="w-9 h-9 bg-[#393939] rounded-full flex items-center justify-center shadow">
              <img src={gallery} alt="gallery" />
            </button>
            <button class="w-9 h-9 bg-[#393939] rounded-full flex items-center justify-center shadow">
              <img src={arrow} alt="arrow" />
            </button>
          </div>

          <div class="absolute bottom-3 left-3 right-3 flex items-center gap-3">
            <div class="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-xs cursor-pointer">
              <img src={play} alt="play button" />
            </div>
            <div class="flex-1 h-1 bg-primary rounded-full"></div>
          </div>
        </div>

        <div class="p-2">
          <div class="flex items-center text-yellow-400 text-sm px-2">
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            <span class="text-black ml-1">(12)</span>
          </div>

          <h3 class="text-[18px] font-bold mt-1 px-2">Hyundai Tucson 2022</h3>

          <p class="text-sm text-gray-500 flex items-center gap-1 px-2">
            <span>
              <IoLocationOutline />
            </span>{" "}
            Johannesburg
          </p>

          <div className="grid grid-cols-3 gap-2 text-gray-600 my-3 py-3 border-t border-b place-items-center">
            <span className="flex items-center justify-center gap-2 text-[#232323] text-[18px]">
              <img src={diesel} alt="diesel" />
              Diesel
            </span>

            <span className="flex items-center justify-center gap-2 text-[#232323] text-[18px]">
              <img src={odometer} alt="odometer" />
              35,000 km
            </span>

            <span className="flex items-center justify-center gap-2 text-[#232323] text-[18px]">
              <img src={hp} alt="horsepower" />
              1800 cc
            </span>

            <span className="flex items-center justify-center gap-2 text-[#232323] text-[18px]">
              <img src={suv} alt="suv" />
              SUV
            </span>

            <span className="flex items-center justify-center gap-2 text-[#232323] text-[18px]">
              <img src={color} alt="color" />
              White
            </span>
          </div>

          <div class="text-center mt-4 text-2xl font-bold text-primary">
            $42,900
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedListingCard;
