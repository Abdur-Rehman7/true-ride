import Accordion from "./Accordion";
import quality from "./assets/quality.svg";
import exclusive from "./assets/exclusive.svg";
import transaction from "./assets/transaction.svg";
const ServicesDetail = () => {
  return (
    <>
      <section>
        <div className="bg-primary w-full h-[416px] rounded-lg">
          <div className="grid grid-cols-2">
            <div className="m-6 ">
              <div className="text-[60px] font-bold">
                All the services we will provide you
              </div>
              <div className="text-[20px]">
                Search thousands of real listings from verified sellers. Compare
                prices, check car history, and connect instantly. Whether you're
                buying or selling, our platform makes every step effortless and
                secure.
              </div>
              <button className="bg-black text-white text-[18px] py-[12px] px-[24px] rounded-[10px] mt-4">
                See All
              </button>
            </div>
            <div className="relative">
              <div className="absolute top-14 ">
                <Accordion />
              </div>
            </div>
          </div>
        </div>

        <div className=" grid grid-cols-3 w-[45%] gap-2 mt-4 ml-6">
          <div className="text-center  bg-[#FAFAFA] rounded-[8px] ">
            <p className="text-[40px] font-semibold">124k+</p>
            <p className="text-[14px] text-[#9C9C9C]">Active Users</p>
          </div>
          <div className="text-center bg-[#FAFAFA] rounded-[8px]">
            <p className="text-[40px] font-semibold">12k+</p>
            <p className="text-[14px] text-[#9C9C9C]">Good Reviews</p>
          </div>
          <div className="text-center bg-[#FAFAFA] rounded-[8px]">
            <p className="text-[40px] font-semibold">32k+</p>
            <p className="text-[14px] text-[#9C9C9C]">Car Available</p>
          </div>
        </div>

        <div className="grid grid-cols-3 bg-[#FAFAFA] mt-14 p-10">
          <div className="flex gap-1">
            <img src={quality} alt="quality" className="w-[50px] h-[50px]" />
            <div className="gap-2">
              <p className="text-[18px] font-semibold">Quality Choice</p>
              <p className="text-[13px] text-[#9C9C9C]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has.
              </p>
            </div>
          </div>
          <div className="flex gap-1">
            <img src={exclusive} alt="exclusive" className="w-[50px] h-[50px]" />
            <div className="gap-2">
              <p className="text-[18px] font-semibold">Quality Choice</p>
              <p className="text-[13px] text-[#9C9C9C]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has.
              </p>
            </div>
          </div>
          <div className="flex gap-1">
            <img src={transaction} alt="transaction" className="w-[50px] h-[50px]" />
            <div className="gap-2">
              <p className="text-[18px] font-semibold">Quality Choice</p>
              <p className="text-[13px] text-[#9C9C9C]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesDetail;
