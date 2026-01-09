import loginimg from "../assets/login-side-img.png";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";

const PasswordReset = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/updatepassword");
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

            <p className="text-[40px] font-semibold">Password reset 🤩</p>
            <p className="text-[20px] text-[#9c9c9c]">
              Your password has been successfully reset. click confirm to set a
              new password
            </p>
            <button
              onClick={handleContinue}
              type="submit"
              className="bg-primary text-[20px] font-semibold w-full py-[10px] px-[30px] rounded-[12px] my-8"
            >
              Continue
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

export default PasswordReset;
