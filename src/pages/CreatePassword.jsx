import loginimg from "../assets/login-side-img.png";
import logo from "../assets/logo.svg";
import labelIcon from "../assets/required-label-icon.svg";
import google from "../assets/google-icon.svg";
import { useNavigate } from "react-router-dom";

const CreatePassword = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/confirmpassword");
  };
  return (
    <>
      <div>
        <div className="grid grid-cols-2 h-screen">
          {/* Left side (empty or form later) */}
          <div className="p-8">
            <div>
              <img src={logo} alt="logo" />
            </div>

            <div>
              <div className="text-[40px] font-semibold my-2">
                Create a password 🔐
              </div>
              <div className="text-[#9C9C9C] text-[20px] my-2">
                Kindly fill your details to create an account
              </div>
            </div>
            <div className="flex justify-center gap-2 py-[12px] px-[24px] rounded-[12px] border border-[#999999]">
              <img src={google} alt="google icon" /> Continue with Google
            </div>
            <div className="flex items-center w-full h-[35px] my-4">
              <div className="flex-grow border-t border-gray-300"></div>

              <span className="px-4 text-sm text-gray-500">
                or sign in with
              </span>

              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <div className="w-full">
              <label
                htmlFor="password"
                className="flex text-sm font-medium text-[#33383F] gap-1 my-2"
              >
                Password
                <img src={labelIcon} alt="required label icon" />
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your Password"
                className=" block w-full rounded-lg border px-4 py-2 placeholder-[#9C9C9C] focus:outline-none"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="password"
                className="flex text-sm font-medium text-[#33383F] gap-1 my-2"
              >
                Confirm Password
                <img src={labelIcon} alt="required label icon" />
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your Password"
                className=" block w-full rounded-lg border px-4 py-2 placeholder-[#9C9C9C] focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-[8px] mt-4">
              <input type="checkbox" className="w-[16px] h-[16px]" />
              <p className="text-[14px] text-[#9C9C9C]">
                By creating an account you are agreeing to our Terms and
                Conditions and Privacy Policy
              </p>
            </div>
            <button
              onClick={handleContinue}
              type="submit"
              className="bg-primary text-[20px] font-semibold w-full py-[10px] px-[30px] rounded-[12px] my-4"
            >
              Continue
            </button>

            <div>
              I have an account?{" "}
              <span className="text-primary">Click here to Sign In.</span>
            </div>
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

export default CreatePassword;
