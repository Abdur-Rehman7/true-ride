import logo from "./assets/logo.svg";
import language from "./assets/language.svg";
import location from "./assets/location.svg";
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

  return (
    <footer className="bg-black text-white">
      <div className="px-4 sm:px-8 py-8 max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between gap-4">
          <img src={logo} alt="logo" className="w-32 mx-0 md:mx-0" />

          {/* Language & Location (Hidden on Mobile) */}
          <div className="hidden md:flex gap-4">
            <div className="flex items-center gap-1">
              <img src={language} alt="language" className="w-4 h-4" />
              <select className="bg-black text-white text-sm focus:outline-none">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>

            <div className="flex items-center gap-1">
              <img src={location} alt="location" className="w-4 h-4" />
              <select className="bg-black text-white text-sm focus:outline-none">
                <option>Multan</option>
                <option>Sargodha</option>
                <option>Islamabad</option>
                <option>Lahore</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 my-10 text-left">
          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg text-[20px] font-semibold">
              Subscribe to our Newsletter
            </h3>
            <p className="text-[14px] text-[#ffffff]">
              Don’t miss any relevant offers!
            </p>
            <FotterEmailInput />
          </div>

          {/* Buying & Selling */}
          <div>
            <h4 className="font-semibold mb-4">Buying & Selling</h4>
            <ul className="text-sm space-y-3">
              <li>Find a car</li>
              <li>Sell your car</li>
              <li>Car Dealers</li>
              <li>Compare car</li>
              <li>Online car appraisal</li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="text-sm space-y-3">
              <li>About True Ride</li>
              <li>Contact us</li>
              <li>FAQs & support</li>
              <li>Mobile app</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Profile */}
          <div>
            <h4 className="font-semibold mb-4">Profile</h4>
            <ul className="text-sm space-y-3">
              <li>My account</li>
              <li>Wishlist</li>
              <li>My listings</li>
              <li>Add listing</li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col gap-6 items-center lg:items-start">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <img src={phone} alt="phone" />
                <span>(406) 555-0120</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={mail} alt="mail" />
                <span>example@gmail.com</span>
              </div>
            </div>

            <div className="flex gap-3">
              <img src={facebook} alt="facebook" className="cursor-pointer" />
              <img src={twitter} alt="twitter" className="cursor-pointer" />
              <img src={telegram} alt="telegram" className="cursor-pointer" />
              <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full cursor-pointer">
                <FaFacebookMessenger size={14} className="text-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row gap-4 md:justify-between text-sm text-center md:text-left">
          <p>Copyright © True Ride. All rights reserved</p>

          <div className="flex justify-center md:justify-end gap-4">
            <span
              className="cursor-pointer hover:underline"
              onClick={() => navigate("/termsandcondition")}
            >
              Terms of Use
            </span>
            <span
              className="cursor-pointer hover:underline"
              onClick={() => navigate("/privacypolicy")}
            >
              Privacy Policy
            </span>
            <span>Accessibility Statement</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
