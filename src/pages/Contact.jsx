import { Link } from "react-router-dom";
import bgImage from "../assets/blog-bg.jpg";
import sideimg from "../assets/login-side-img.png";
import phoneicon from "../assets/contact-page-phone-icon.svg";
import emailicon from "../assets/contact-page-email-icon.svg";

const Contact = () => {
  return (
    <div>
      <div
        className="relative h-[300px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* 80% Black Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>

        {/* Centered Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <nav className="text-sm text-gray-300 mb-3">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">&gt;</span>
            <span className="text-white font-medium">Contact Us</span>
          </nav>

          <p className="text-[60px] md:text-3xl font-semibold text-white">
            Get in touch with us
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 px-8 my-8 ">
        <div className="h-screen">
          <div className="text-[40px] font-semibold my-2">Contact Us</div>
          <div className="text-[20px] text-[#9C9C9C] my-2">
            Have any question or feedback, feel free to reach out to us. We are
            always available to help.
          </div>

          <div className="grid grid-cols-2 gap-4 my-2">
            <div>
              <label
                htmlFor="firstname"
                className="flex text-sm font-medium text-[#33383F] gap-1 my-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                placeholder="Enter Your First Name"
                className="block w-full rounded-lg border border-gray-300 px-4 py-2 text-black placeholder-[#9C9C9C] focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="lastname"
                className="flex text-sm font-medium text-[#33383F] gap-1 my-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                placeholder="Enter Your Last Name"
                className="block w-full rounded-lg border border-gray-300 px-4 py-2 text-black placeholder-[#9C9C9C] focus:outline-none"
              />
            </div>
          </div>

          <div className="my-2">
            <label
              htmlFor="email"
              className="flex text-sm font-medium text-[#33383F] gap-1 my-2"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="block w-full rounded-lg border border-gray-300 px-4 py-2 text-black placeholder-[#9C9C9C] focus:outline-none"
            />
          </div>
          <div className="my-2">
            <label
              htmlFor="phone"
              className="flex text-sm font-medium text-[#33383F] gap-1 my-2"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phonenumber"
              placeholder="Enter your phone number"
              className="block w-full rounded-lg border border-gray-300 px-4 py-2 text-black placeholder-[#9C9C9C] focus:outline-none"
            />
          </div>
          <div className="my-2">
            <label
              htmlFor="message"
              className="flex text-sm font-medium text-[#33383F] gap-1 my-2"
            >
              Message
            </label>
            <input
              type="text"
              id="message"
              placeholder="Write here"
              className="block w-full rounded-lg border border-gray-300 px-4 py-2 text-black placeholder-[#9C9C9C] focus:outline-none h-[100px]"
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-[20px] font-semibold w-full py-[10px] px-[30px] rounded-[12px] mt-6"
          >
            Send Message
          </button>
        </div>
        <div className="h-screen">
          <img
            src={sideimg}
            alt="side image"
            className="h-screen w-full object-cover rounded-[12px]"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 bg-[#FAFAFA] border border-[#C1C1C1] px-8 my-8 mx-8 py-8 rounded-[20px]">
        <div>
          <div className="text-primary font-semibold">Contact us</div>
          <div className="text-[36px] font-semibold text-[#101828]">
            Get in touch
          </div>
          <div className="text-[20px] text-[#616161]">
            Our friendly team is always here to chat.
          </div>
        </div>
        <div>
          <div className="flex gap-4 my-2">
            <div>
              <img src={phoneicon} alt="phone icon" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-[20px] font-semibold">Phone number</div>
              <div className="text-[14px] text-[#616161]">
                Our friendly team is here to help.
              </div>
              <div className="text-primary text-[18px] font-semibold">
                310-437-2766
              </div>
            </div>
          </div>
          <div className="flex gap-4 my-2">
            <div>
              <img src={emailicon} alt="email icon" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-[20px] font-semibold">Email</div>
              <div className="text-[14px] text-[#616161]">
                Our friendly team is here to help.
              </div>
              <div className="text-primary text-[18px] font-semibold">
                Logo@outlook.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
