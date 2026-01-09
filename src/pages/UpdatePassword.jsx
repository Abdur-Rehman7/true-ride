import loginimg from "../assets/login-side-img.png";
import logo from "../assets/logo.svg";
import labelIcon from "../assets/required-label-icon.svg";
import { useNavigate } from "react-router-dom";

const UpdatePassword = () => {
    const navigate = useNavigate()

    const handleUpdate = () => {
        navigate("/")
    }
  return (
    <>
      <div>
        <div className="grid grid-cols-2 h-screen">
          {/* Left side (empty or form later) */}
          <div className="p-8">
            <div>
              <img src={logo} alt="logo" />
            </div>

            <p className="text-[40px] font-semibold">Set a new password 🤞</p>
            <p className="text-[20px] text-[#9c9c9c]">
              Please enter your email to reset the password
            </p>

            <div className="w-full">
              <label
                htmlFor="password"
                className="flex text-sm font-medium text-[#33383F] gap-1 my-2"
              >
                New Password
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
            <button type="submit" onClick={handleUpdate} className="bg-primary text-[20px] font-semibold w-full py-[10px] px-[30px] rounded-[12px] my-8">
              Update Password
            </button>
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

export default UpdatePassword;
