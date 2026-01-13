import logo from "./assets/logo.svg";
import language from "./assets/language.svg";
import location from "./assets/location.svg";
import EmailInput from "../home/EmailInput";
import phone from "./assets/phone.svg";
import mail from "./assets/mail.svg";
import facebook from "./assets/facebook.svg";
import twitter from "./assets/twitter.svg";
import telegram from "./assets/telegram.svg";
import { FaFacebookMessenger } from "react-icons/fa6";
import FotterEmailInput from "./FotterEmailInput";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/privacypolicy");
  };
  return (
    <>
      <footer className="bg-[#000000]">
        <div className="mx-8 py-8">
          <div className="flex justify-between">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div className="flex gap-2">
              <div className="flex items-center">
                <img
                  src={language}
                  alt="language icon"
                  className="w-[18px] h-[18px]"
                />
                <select className="border-none rounded-md px-1 py-1 text-sm focus:outline-none bg-[#000000] text-[#FFFFFF]">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
              </div>
              <div className="flex items-center">
                <img
                  src={location}
                  alt="location icon"
                  className="w-[18px] h-[18px]"
                />
                <select className="border-none rounded-md px-1 py-1 text-sm focus:outline-none bg-[#000000] text-[#FFFFFF]">
                  <option>Multan</option>
                  <option>Sargodha</option>
                  <option>Islamabad</option>
                  <option>Lahore</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-4 my-8">
            <div className="flex flex-col gap-4">
              <div className="text-white text-[20px] font-semibold">
                Subscribe to our Newsletter
              </div>
              <div className="text-[14px] text-white">
                Don’t miss any relevant offers!
              </div>
              <div>
                <FotterEmailInput />
              </div>
            </div>
            <div className="text-white flex flex-col gap-[18px] mx-auto">
              <div className="text-[16px] font-semibold">Buying & Selling</div>
              <ul className="text-[14px] flex flex-col gap-4">
                <li>Find a car</li>
                <li>Sell your car</li>
                <li>Car Dealers</li>
                <li>Compare car</li>
                <li>Online car appraisal</li>
              </ul>
            </div>
            <div className="text-white flex flex-col gap-[18px] mx-auto">
              <div className="text-[16px] font-semibold">About</div>
              <ul className="text-[14px] flex flex-col gap-4">
                <li>About True Ride</li>
                <li>Contact us</li>
                <li>FAQs & support</li>
                <li>Mobile app</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="text-white flex flex-col gap-[18px] mx-auto">
              <div className="text-[16px] font-semibold">Profile</div>
              <ul className="text-[14px] flex flex-col gap-4">
                <li>My account</li>
                <li>Wishlist</li>
                <li>My listings</li>
                <li>Add listing</li>
              </ul>
            </div>

            <div className="flex flex-col gap-[32px]">
              <div>
                <div className="text-white flex gap-2 items-center mb-2">
                  <img src={phone} alt="phone" />
                  <div>(406) 555-0120</div>
                </div>
                <div className="text-white flex gap-2 items-center">
                  <img src={mail} alt="mail" />
                  <div>example@gmail.com</div>
                </div>
              </div>

              <div className="flex gap-2 items-center">
                <img
                  src={facebook}
                  alt="facebook icon"
                  className="cursor-pointer"
                />
                <img src={twitter} alt="twitter" className="cursor-pointer" />
                <img src={telegram} alt="telegram" className="cursor-pointer" />
                <div className="w-[32px] h-[32px] flex items-center justify-center bg-white rounded-full cursor-pointer">
                  <FaFacebookMessenger size={14} className="text-primary" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between ">
            <div className="text-white">
              Copyright © True Ride. All rights reserved
            </div>
            <div className="flex gap-4 text-white">
              <div>Terms of Use</div>
              <div
                role="link"
                tabIndex={0}
                className="cursor-pointer hover:underline"
                onClick={handleNavigation}
              >
                Privacy Policy
              </div>
              <div>Accessibility Statement</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
