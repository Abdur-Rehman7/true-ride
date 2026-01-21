import car1 from "./assets/find-car-1.svg";
import car2 from "./assets/find-car-2.svg";
import car3 from "./assets/find-car-3.svg";
import car4 from "./assets/find-car-4.svg";
import PaginationLines from "./PaginationLines";
const FindCar = () => {
  return (
    <>
      <div className="mb-[44px]">
        <div className="text-[44px] font-bold text-center mb-[32px]">
          Find car by model
        </div>
        <div className="grid grid-cols-4 mb-[32px]">
          <div className="flex flex-col gap-2">
            <img src={car1} alt="car 1" className="h-[130px] mb-[26px]" />
            <div className="text-center text-[17px] font-semibold mb-[13px]">Sedan</div>
            <div className="bg-[#FFF6E1] rounded-2xl px-6 py-4 w-fit mx-auto">
              <p className="text-[#FFB611] font-bold">23,457 vehicles</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <img src={car2} alt="car 2" className="h-[130px] mb-[26px]" />
            <div className="text-center text-[17px] font-semibold mb-[13px]">SUV</div>
            <div className="bg-[#F5F6F7] rounded-2xl px-6 py-4 w-fit mx-auto">
              <p className="text-[#9A9EA7] font-bold">23,457 vehicles</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <img src={car3} alt="car 3" className="h-[130px] mb-[26px]" />
            <div className="text-center text-[17px] font-semibold mb-[13px]">SUV</div>
            <div className="bg-[#F5F6F7] rounded-2xl px-6 py-4 w-fit mx-auto">
              <p className="text-[#9A9EA7] font-bold">23,457 vehicles</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <img src={car4} alt="car 4" className="h-[130px] mb-[26px]" />
            <div className="text-center text-[17px] font-semibold mb-[13px]">SUV</div>
            <div className="bg-[#F5F6F7] rounded-2xl px-6 py-4 w-fit mx-auto">
              <p className="text-[#9A9EA7] font-bold">23,457 vehicles</p>
            </div>
          </div>
        </div>
        <PaginationLines total={4} activeIndex={3} />
      </div>
    </>
  );
};

export default FindCar;
