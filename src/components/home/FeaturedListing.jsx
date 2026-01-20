import FeaturedListingCard from "./FeaturedListingCard";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";

const FeaturedListing = () => {
  return (
    <>
      <div className="my-[52px]">
        <p className="text-center text-[44px] font-bold my-[40px]">
          Featured Listing
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeaturedListingCard />
          <FeaturedListingCard />
          <FeaturedListingCard />
          <FeaturedListingCard />
          <FeaturedListingCard />
          <FeaturedListingCard />
        </div>
        <div className="flex gap-2 items-center justify-center my-[40px]">
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

export default FeaturedListing;
