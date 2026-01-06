import FeaturedListingCard from "./FeaturedListingCard";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
const LatestListing = () => {
  return (
    <>
      <div>
        <div className="text-[44px] font-semibold text-center">
          Latest Listing
        </div>
        <div className="flex justify-between">
          <FeaturedListingCard />
          <FeaturedListingCard />
          <FeaturedListingCard />
        </div>
        <div className="flex gap-2 items-center justify-center mt-4">
          <div className="w-[50px] h-[50px] bg-[#F5F6F7] flex items-center justify-center hover:cursor-pointer rounded-[10px]">
            <IoMdArrowBack className="text-xl text-[#9A9EA7]" size={20} />
          </div>
          <div className="w-[50px] h-[50px] bg-primary flex items-center justify-center hover:cursor-pointer rounded-[10px]">
            <IoMdArrowForward className="text-xl" size={20} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestListing;
