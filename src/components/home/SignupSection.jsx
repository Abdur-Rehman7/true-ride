import carimg from "./assets/signupsection-img.svg";
const SignupSection = () => {
  return (
    <>
      <div className="grid grid-cols-2 bg-[#FAFAFA] px-4 my-10">
        <div>
          <div className="text-[60px] font-bold">
            <p>Buy Now</p>
            <p>Pay Later</p>
          </div>
          <div className="text-[#2B2B2B]">
            Search thousands of real listings from verified sellers. Compare
            prices, check car history, and connect instantly. Whether you're
            buying or selling.
          </div>
          <button className="bg-primary text-black text-[18px] py-[12px] px-[24px] rounded-[10px] mt-4">
            Sign up
          </button>
        </div>

        <div>
          <img src={carimg} alt="car img" />
        </div>
      </div>
    </>
  );
};

export default SignupSection;
