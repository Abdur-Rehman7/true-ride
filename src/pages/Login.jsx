import loginimg from "../assets/login-side-img.png";
import logo from "../assets/logo.svg";
import google from "../assets/google-icon.svg";
import labelIcon from "../assets/required-label-icon.svg";
import checkIcon from "../assets/correct-icon.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // to store error message

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Simple email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example check (replace with real authentication logic)
    if (password !== "correctPassword") {
      setError("The email or password you’ve entered is incorrect.");
    } else {
      setError("");
      // proceed with login
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 h-screen">
          {/* Left side (empty or form later) */}
          <div className="p-8">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div>
              <div className="text-[40px] font-semibold my-2">Sign In 👋</div>
              <div className="text-[#9C9C9C] text-[20px] my-2">
                Sign in to stay connected.
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`block w-full rounded-lg border px-4 py-2 placeholder-[#9C9C9C] focus:outline-none
            ${error ? "border-red-500" : "border-gray-300"}`}
              />
              {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
            </div>

            <div className="flex justify-between my-2">
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="rememberMe"
                  className="accent-primary"
                />
                <label htmlFor="rememberMe">Remember me</label>
              </div>

              <div className="text-[#9C9C9C] cursor-pointer">
                <Link to="/forgotpassword">Forget password?</Link>
              </div>
            </div>

            <button
              type="submit"
              className="bg-primary text-[20px] font-semibold w-full py-[10px] px-[30px] rounded-[12px]"
            >
              Sign In
            </button>

            <div className="text-[20px] my-2">
              Don’t have an account?
              <span className="text-primary"> Click here to sign up.</span>
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
      </form>
    </>
  );
};

export default Login;
