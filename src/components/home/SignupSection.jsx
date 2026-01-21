import carimg from "./assets/signupsection-img.svg";
const SignupSection = () => {
  return (
    <>
      <div className="grid grid-cols-2 bg-[#FAFAFA] px-4 mb-[44px]">
        <div className="flex flex-col gap-[12px]">
          <div className="text-[60px] font-bold">
            <p>Buy Now <br /> Pay Later</p>
            
          </div>
          <div className="text-[#2B2B2B]">
            Search thousands of real listings from verified sellers. Compare
            prices, check car history, and connect instantly. Whether you're
            buying or selling.
          </div>
          <div>
            <button className="bg-primary text-black text-[18px] font-semibold py-[12px] px-[24px] rounded-[10px] mt-4">
              Sign up
            </button>
          </div>
        </div>

        <div>
          <img src={carimg} alt="car img" />
        </div>
      </div>
    </>
  );
};

export default SignupSection;
