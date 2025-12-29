import img from "./assets/featured-img.svg";
import heart from "./assets/heart.svg";
import gallery from "./assets/gallery.svg";
import arrow from "./assets/arrow-left-right.svg";
import play from "./assets/play.svg";
const FeaturedListing = () => {
  return (
    <>
      <div>
        <p className="text-center text-[44px] font-bold">Featured Listing</p>
        <div>
          <div className="w-[400px] bg-white">
            <div className="relative">
              <img src={img} className="rounded-[12px]" />

              <p className="bg-white absolute top-2 left-2 py-[8px] px-[16px] rounded-[4px] font-semibold">
                Fair Deal
              </p>
              <div className="flex flex-col gap-2 absolute top-2 right-6">
                <div className="w-[32px] h-[32px] bg-[#393939] rounded-full flex items-center justify-center">
                  <img src={heart} alt="heart" />
                </div>

                <div className="w-[32px] h-[32px] bg-[#393939] rounded-full flex items-center justify-center">
                  <img src={gallery} alt="gallery" />
                </div>

                <div className="w-[32px] h-[32px] bg-[#393939] rounded-full flex items-center justify-center">
                  <img src={arrow} alt="arrow" />
                </div>
              </div>

              <div className="absolute bottom-2 left-2">
                <img src={play} />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedListing;
