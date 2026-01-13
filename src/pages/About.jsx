import { Link } from "react-router-dom";
import bgImage from "../assets/blog-bg.jpg";
import founderimg from "../assets/founderimg.jpg";
import trustedicon from "../assets/trusted-icon.svg";
import securityicon from "../assets/security-icon.svg";
import verifiedicon from "../assets/verified-icon.svg";
import notificationicon from "../assets/notification-icon.svg";
import foundervideo from "../assets/foundervideo.svg";
import Testimonial from "../components/home/Testimonial";
import ourmission from "../assets/our-mission.jpg";
import checkicon from "../assets/check-icon.svg";
const About = () => {
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
            <span className="text-white font-medium">About</span>
          </nav>

          <p className="text-[60px] md:text-3xl font-semibold text-white">
            About us
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-[40px] px-20 my-8 ">
        <div className="mx-8">
          <div className="text-[54px] my-4 font-semibold">Our Fonding Story</div>
          <div>
            From that simple idea,
            <span className="text-primary"> TrueRide </span> was born—a platform
            designed to bring every car-related service under one digital roof.
            We wanted to make car ownership as easy as ordering food or booking
            a flight. Whether it’s buying, selling, repairing, insuring, or
            customizing a car—we're here to connect people with the tools and
            services they need, all in one place.
          </div>
          <div>
            With a passionate team of auto enthusiasts, tech experts, and
            customer-first thinkers, we built a marketplace that’s smart,
            seamless, and trustworthy. And we’re just getting started.
          </div>
          <div>
            Our journey began with a problem. Today, we’re solving it for
            thousands—and driving toward a future where car ownership is
            effortless for everyone.
          </div>
        </div>
        <div>
          <img
            src={founderimg}
            alt="founder image"
            className="rounded-[12px]"
          />
        </div>
      </div>

      <div className="px-20 my-8">
        <div className="text-[54px] text-center font-bold">
          Why Choose TrueRide?
        </div>
        <div className="grid grid-cols-4 gap-[25px] my-8">
          <div className="bg-[#F5F5F5] p-[25px] rounded-[21px]">
            <img src={trustedicon} alt="trusted icon" />
            <div className="text-[24px] my-2">
              Trusted by thousands of users
            </div>
            <div className="text-[20px] text-[#575757] my-2">
              Thousands choose us daily for reliable, convenient, & transparent
              car services.
            </div>
          </div>
          <div className="bg-[#F5F5F5] p-[25px] rounded-[21px]">
            <img src={securityicon} alt="security icon" />
            <div className="text-[24px] my-2">Safe & secure platform</div>
            <div className="text-[20px] text-[#575757] my-2">
              Your data and transactions are fully protected with
              industry-leading security.
            </div>
          </div>
          <div className="bg-[#F5F5F5] p-[25px] rounded-[21px]">
            <img src={verifiedicon} alt="verified icon" />
            <div className="text-[24px] my-2">Verified service providers</div>
            <div className="text-[20px] text-[#575757] my-2">
              Only trusted, certified professionals deliver services through our
              platform.
            </div>
          </div>
          <div className="bg-[#F5F5F5] p-[25px] rounded-[21px]">
            <img src={notificationicon} alt="notification icon" />
            <div className="text-[24px] my-2">
              Smart notifications & updates
            </div>
            <div className="text-[20px] text-[#575757] my-2">
              Get real-time alerts for deals, reminders, and important car
              updates.
            </div>
          </div>
        </div>
      </div>

      <div className="px-20 my-8">
        <div className="text-[54px] font-semibold text-center">What We Do</div>
        <div className="grid grid-cols-2 items-center border-b border-[#E4E4E4] py-2">
          <div className="text-[36px] font-semibold">Buy & Sell Cars</div>
          <div className="text-[20px] text-[#575757]">
            Browse thousands of verified listings or list your car for free.
          </div>
        </div>
        <div className="grid grid-cols-2 items-center border-b border-[#E4E4E4] py-2">
          <div className="text-[36px] font-semibold">
            Car Maintenance & Repairs
          </div>
          <div className="text-[20px] text-[#575757]">
            Book trusted garages and mobile mechanics near you.
          </div>
        </div>
        <div className="grid grid-cols-2 items-center border-b border-[#E4E4E4] py-2">
          <div className="text-[36px] font-semibold">Insurance & Financing</div>
          <div className="text-[20px] text-[#575757]">
            Compare the best rates and secure coverage or loans in minutes.
          </div>
        </div>
        <div className="grid grid-cols-2 items-center border-b border-[#E4E4E4] py-2">
          <div className="text-[36px] font-semibold">Parts & Accessories</div>
          <div className="text-[20px] text-[#575757]">
            Discover a wide range of genuine car parts and custom add-ons.
          </div>
        </div>

        <div className="my-8">
          <img
            src={foundervideo}
            alt="founder video"
            className="rounded-[12px]"
          />
        </div>
      </div>

      <div className="px-20 my-8">
        <Testimonial />
      </div>

      <div className="px-20 my-8">
        <div className="text-[54px] font-semibold">Our Mission</div>
        <div className="grid grid-cols-2">
          <div className="text-[20px]">
            <div>
              Our founder Edson, was trying to sell his old car and buy a new
              one. In the process, he had to juggle multiple platforms,
              unresponsive sellers, unreliable service centers, confusing
              paperwork, and overpriced insurance quotes. The entire experience
              was fragmented and time-consuming. The entire experience was
              fragmented and time-consuming.
            </div>
            <img
              src={ourmission}
              alt="our mission image"
              className="rounded-[12px]"
            />
          </div>
          <div className="text-[20px] mx-auto">
            <div>
              With a passionate team of auto enthusiasts, tech experts, and
              customer-first thinkers, we built a marketplace that’s smart,
              seamless, and trustworthy. And we’re just getting started. Our
              journey began with a problem. Today, we’re solving it for
              thousands—and driving toward a future where car ownership is
              effortless for everyone.
            </div>
            <div className="my-20 mx-20">
              <div className="flex gap-2">
                <img src={checkicon} alt="check icon" />
                <div>far far away, behind the word mountains</div>
              </div>
              <div className="flex gap-2">
                <img src={checkicon} alt="check icon" />
                <div>large language ocean</div>
              </div>
              <div className="flex gap-2">
                <img src={checkicon} alt="check icon" />
                <div>far from the countries Vokalia and Consonantia</div>
              </div>
            </div>

            <div className="grid grid-cols-3 shadow-xl rounded-[21px] py-4 px-4">
              <div className="text-center border-r">
                <div className="text-[54px] text-primary font-semibold">
                  280
                </div>
                <div className="text-[22px] font-semibold">
                  Project for Sale
                </div>
              </div>
              <div className="text-center border-r">
                <div className="text-[54px] text-primary font-semibold">
                  640
                </div>
                <div className="text-[22px] font-semibold">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-[54px] text-primary font-semibold">
                  +3500
                </div>
                <div className="text-[22px] font-semibold">
                  Visitors Per Day
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
