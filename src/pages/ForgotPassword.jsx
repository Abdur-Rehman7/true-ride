import loginimg from "../assets/login-side-img.png";
import logo from "../assets/logo.svg";
import google from "../assets/google-icon.svg";
import labelIcon from "../assets/required-label-icon.svg";
import checkIcon from "../assets/correct-icon.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Simple email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(value));
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
            <div className="text-[40px] font-semibold">Forgot Password 😑</div>
            <div className="text-[20px] text-[#9c9c9c]">Please enter your email to reset the password</div>
            <div className="flex justify-between my-2">
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="rememberMe"
                  className="accent-primary"
                />
                <label htmlFor="rememberMe" className="text-[18px]">Reset by E-mail</label>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="rememberMe"
                  className="accent-primary"
                />
                <label htmlFor="rememberMe" className="text-[18px]">Reset by Phone</label>
              </div>
            </div>
            <div className="w-full relative">
              <label
                htmlFor="email"
                className="flex text-sm font-medium text-[#33383F] gap-1 my-2"
              >
                E-mail
                <img src={labelIcon} alt="required label icon" />
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                className="block w-full rounded-lg border border-gray-300 px-4 py-2 text-black placeholder-[#9C9C9C] focus:outline-none"
              />
              {isValid && (
                <img
                  src={checkIcon}
                  alt="valid email"
                  className="absolute right-3 top-10 w-5 h-5"
                />
              )}
            </div>
            <button
              type="submit"
              className="bg-primary text-[20px] font-semibold w-full py-[10px] px-[30px] rounded-[12px] my-8"
            >
              Send Code
            </button>
            <div>
              <span className="text-red-700">*</span> Open your email to get the OTP
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

export default ForgotPassword;
