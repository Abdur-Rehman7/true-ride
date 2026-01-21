import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import car1 from "./assets/car-1.svg";
import car2 from "./assets/car-2.svg";
import car3 from "./assets/car-3.svg";
import PopularSectionBg from "./assets/blog-bg.jpg";
const PopularModelSection = () => {
  return (
    <>
      <section
        className="relative w-full h-auto rounded-lg mb-[44px] py-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${PopularSectionBg})` }}
      >
        {/* MASK OVERLAY */}
        <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
        <div className="text-white text-[44px] text-center font-semibold">
          Popular Car Models
        </div>
        <div className="relative grid grid-cols-3">
          <div className="text-white flex flex-col items-center ">
            <img src={car1} alt="car 1" className="w-[237px] h-[237px] mt-24" />
            <div className="text-center">
              <p className=" text-[18px] font-bold mt-3">Toyota Corolla 2021</p>
              <p className="text-[13px]">3 Place</p>
              <p className="text-primary">$42,900</p>
            </div>
          </div>
          <div className="text-white flex flex-col items-center ">
            <img src={car2} alt="car 2" className="w-[464px] h-[446px]" />
            <div className="text-center">
              <p className=" text-[18px] font-bold mt-3">Toyota Corolla 2021</p>
              <p className="text-[13px]">1 Place</p>
              <p className="text-primary">$42,900</p>
            </div>
          </div>
          <div className="text-white flex flex-col items-center  ">
            <img src={car3} alt="car 3" className="w-[237px] h-[237px] mt-24" />
            <div className="text-center">
              <p className=" text-[18px] font-bold mt-3">Toyota Corolla 2021</p>
              <p className="text-[13px]">2 Place</p>
              <p className="text-primary">$42,900</p>
            </div>
          </div>

          <div className="w-[37px] h-[37px] absolute top-1/2 left-4 bg-primary rounded-full flex items-center justify-center hover:cursor-pointer">
            <IoMdArrowBack />
          </div>
          <div className="w-[37px] h-[37px] absolute top-1/2 right-4  bg-white rounded-full flex items-center justify-center hover:cursor-pointer">
            <IoMdArrowForward />
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularModelSection;
