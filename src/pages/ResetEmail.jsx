import loginimg from "../assets/login-side-img.png";
import logo from "../assets/logo.svg";
import OTPInput from "../components/reuseable/OTPInput";

const ResetEmail = () => {
  return (
    <>
      <div>
        <div className="grid grid-cols-2 h-screen">
          {/* Left side (empty or form later) */}
          <div className="p-8">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div className="text-[40px] font-semibold">Check your email 📩</div>
            <div className="text-[#9c9c9c] text-[20px]">
              Please enter the 4-digit security code we sent your email.
            </div>
            <div>
              <OTPInput />
            </div>
            <button
              type="submit"
              className="bg-primary text-[20px] font-semibold w-full py-[10px] px-[30px] rounded-[12px] my-8"
            >
              Submit
            </button>

            <p>
              Didn’t have OTP?<span className="text-primary"> Resend OTP</span>
            </p>
          </div>

          {/* Right side image */}
          <div className="h-screen w-full p-2">
            <img
              src={loginimg}
              alt="login"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetEmail;
