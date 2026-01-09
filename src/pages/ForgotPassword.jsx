import loginimg from "../assets/login-side-img.png";
import logo from "../assets/logo.svg";
import labelIcon from "../assets/required-label-icon.svg";
import checkIcon from "../assets/correct-icon.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [resetByEmail, setResetByEmail] = useState(true);
  const [resetByPhone, setResetByPhone] = useState(false);
  const navigate = useNavigate();

  const countries = [
    { id: "za", flag: "https://flagcdn.com/w20/za.png" }, // South Africa
    { id: "pk", flag: "https://flagcdn.com/w20/pk.png" }, // Pakistan 🇵🇰
    { id: "us", flag: "https://flagcdn.com/w20/us.png" }, // USA
    { id: "in", flag: "https://flagcdn.com/w20/in.png" }, // India
    { id: "ua", flag: "https://flagcdn.com/w20/ua.png" }, // Ukraine
  ];

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Simple email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(value));
  };

  const handleSendCode = () => {
    if (resetByEmail) {
      navigate("/resetemail");
    }

    if (resetByPhone) {
      navigate("/resetphone");
    }
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
            <div className="text-[20px] text-[#9c9c9c]">
              Please enter your email to reset the password
            </div>
            <div className="flex justify-between my-2">
              <div className="flex gap-[18px]">
                <input
                  type="checkbox"
                  checked={resetByEmail}
                  onChange={() => {
                    setResetByEmail(true);
                    setResetByPhone(false);
                  }}
                  className="accent-primary"
                />
                <label className="text-[18px]">Reset by E-mail</label>
              </div>

              <div className="flex gap-[18px]">
                <input
                  type="checkbox"
                  checked={resetByPhone}
                  onChange={() => {
                    setResetByPhone(true);
                    setResetByEmail(false);
                  }}
                  className="accent-primary"
                />
                <label className="text-[18px]">Reset by Phone</label>
              </div>
            </div>

            {resetByEmail && (
              <div className="w-full relative">
                <label className="flex text-sm font-medium text-[#33383F] gap-1 my-2">
                  E-mail
                  <img src={labelIcon} alt="required label icon" />
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  className="block w-full rounded-lg border px-4 py-2"
                />

                {isValid && (
                  <img
                    src={checkIcon}
                    alt="valid email"
                    className="absolute right-3 top-10 w-5 h-5"
                  />
                )}

                {email && !isValid && (
                  <p className="text-red-500 text-sm mt-1">
                    The email you’ve entered is incorrect.
                  </p>
                )}
              </div>
            )}

            {resetByPhone && (
              <div className="w-full">
                <label className="flex text-sm font-medium text-[#33383F] gap-1 my-2">
                  Phone Number
                  <img src={labelIcon} alt="required label icon" />
                </label>

                <div className="flex items-center border rounded-lg px-4 py-2 gap-3">
                  {/* Flag dropdown */}
                  <select
                    className="absolute opacity-0 cursor-pointer"
                    onChange={(e) => {
                      const country = countries.find(
                        (c) => c.id === e.target.value
                      );
                      setSelectedCountry(country);
                    }}
                  >
                    {countries.map((country) => (
                      <option key={country.id} value={country.id}>
                        {country.id}
                      </option>
                    ))}
                  </select>

                  {/* Visible flag */}
                  <img
                    src={selectedCountry.flag}
                    alt="country flag"
                    className="w-5 h-4 object-cover cursor-pointer"
                  />

                  {/* Divider */}
                  <div className="h-6 w-px bg-gray-300" />

                  {/* Phone input */}
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="flex-1 outline-none text-sm placeholder-[#9C9C9C]"
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              onClick={handleSendCode}
              className="bg-primary text-[20px] font-semibold w-full py-[10px] px-[30px] rounded-[12px] my-8"
            >
              Send Code
            </button>
            <div className="mt-2 text-sm text-gray-600">
              {resetByEmail && (
                <>
                  <span className="text-red-700">*</span> Open your email to get
                  the OTP
                </>
              )}

              {resetByPhone && (
                <>
                  <span className="text-red-700">*</span> Check your phone to
                  get the OTP
                </>
              )}
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
