import { Link } from "react-router-dom";
import compareicon from "../assets/compare-icon.svg";
import saveicon from "../assets/save-icon.svg";
import shareicon from "../assets/share-icon.svg";
import gasoline from "../assets/gasoline-icon.svg";
import miles from "../assets/miles-icon.svg";
import manual from "../assets/manual-icon.svg";
import celender from "../assets/celender-icon.svg";
import buycarone from "../assets/buy-car-1.png";
import buycartwo from "../assets/buy-car-2.png";
import play from "../assets/play.svg";
import { IoStar } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import modelicon from "../assets/model-icon.svg";
import statusicon from "../assets/status-icon.svg";
import drivetypeicon from "../assets/drivetype-icon.svg";
import enginesizeicon from "../assets/enginesize-icon.svg";
import dooricon from "../assets/door-icon.svg";
import cylindericon from "../assets/cylinder-icon.svg";
import coloricon from "../assets/color-icon.svg";
import vinicon from "../assets/vin-icon.svg";
import bmwlogo from "../assets/bmw-logo.svg";
import dealerverifiedicon from "../assets/dealer-verified-icon.svg";
import map from "../assets/map.png";
import reviewstar from "../assets/review-star.svg";
import reviewactionicon from "../assets/review-action-icon.svg";
import imgOne from "../assets/review-person-img-1.jpg";
import imgTwo from "../assets/review-person-img-2.jpg";
import imgThree from "../assets/review-person-img-3.jpg";
import FeaturedListingCard from "../components/home/FeaturedListingCard";
const CardDetail = () => {
  const reviews = [
    {
      id: 1,
      title: "Charming and comfortable",
      rating: "4.91",
      description:
        "Reviews on peer-to-peer sites can happen organically, often removing the company from the review process entirely. (This can be a nightmare if you’re managing a small business, since one bad review can have a huge impact).",
      user: "Jushawn McDowell",
      date: "Jun 03-10, 2020",
      userImg: imgOne,
    },
    {
      id: 2,
      title: "Hideaway tent with pool and tub",
      rating: "4.8",
      description:
        "Reviews on peer-to-peer sites can happen organically, often removing the company from the review process entirely. (This can be a nightmare if you’re managing a small business, since one bad review can have a huge impact).",
      user: "Joana Leite",
      date: "Jun 03-10, 2020",
      userImg: imgTwo,
    },
    {
      id: 3,
      title: "Charming and comfortable house",
      rating: "4.96",
      description:
        "We list customer quotes as the easiest type of review to get because they involve very little effort for you and your customer. ",
      user: "Alexa Tenorio",
      date: "Jun 03-10, 2020",
      userImg: imgThree,
    },
  ];

  const ratingStats = [
    {
      id: 1,
      label: "Positive",
      percent: 80,
      description: "4 stars and above",
      color: "#A2F3D9",
    },
    {
      id: 2,
      label: "Positive",
      percent: 15,
      description: "3 stars and above",
      color: "#FBB0BF",
    },
    {
      id: 3,
      label: "Positive",
      percent: 5,
      description: "under 2 stars",
      color: "#F3CD03",
    },
  ];

  return (
    <>
      <div className="p-4">
        <div className="flex justify-between">
          <div>
            <nav className="text-sm text-gray-300 mb-3">
              <Link to="/" className="text-black">
                Home
              </Link>
              <span className="mx-2 text-[#676767]">&gt;</span>
              <span className="text-[#676767] font-medium">Buy a Car</span>
            </nav>
            <div className="text-[40px] text-[#000000]">2024 Jaguar F-PACE</div>
          </div>
          <div className="flex gap-[10px]">
            <div className="flex items-center gap-[10px]">
              <div className="w-[36px] h-[36px] rounded-[18px] border border-[#E9E9E9] flex items-center justify-center">
                <img src={compareicon} alt="" />
              </div>
              Compare
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="w-[36px] h-[36px] rounded-[18px] border border-[#E9E9E9] flex items-center justify-center">
                <img src={saveicon} alt="" />
              </div>
              Save
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="w-[36px] h-[36px] rounded-[18px] border border-[#E9E9E9] flex items-center justify-center">
                <img src={shareicon} alt="" />
              </div>
              Share
            </div>
          </div>
        </div>

        <div className="flex gap-[10px]">
          <div className="flex gap-2 py-[6px] px-[20px] border border-[#E1E1E1] rounded-[40px]">
            <img src={gasoline} alt="gasoline icon" />
            Gasoline
          </div>
          <div className="flex gap-2 py-[6px] px-[20px] border border-[#E1E1E1] rounded-[40px]">
            <img src={miles} alt="miles icon" />
            250 miles
          </div>
          <div className="flex gap-2 py-[6px] px-[20px] border border-[#E1E1E1] rounded-[40px]">
            <img src={manual} alt="manual icon" />
            manual
          </div>
          <div className="flex gap-2 py-[6px] px-[20px] border border-[#E1E1E1] rounded-[40px]">
            <img src={celender} alt="celender icon" />
            2025
          </div>
        </div>

        <div className="flex gap-4 my-[30px]">
          {/* Left big section */}
          <div className="relative flex-1 h-[625px] bg-green-500 rounded-xl">
            <div className="absolute top-4 left-4 text-[20px] bg-black text-white px-3 py-1 rounded">
              Featured
            </div>
            <img
              src={buycarone}
              alt="buy car one image"
              className="h-[625px] rounded-xl"
            />

            <div class="absolute bottom-3 left-3 right-3 flex items-center gap-3">
              <div class="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-xs cursor-pointer">
                <img src={play} alt="play button" />
              </div>
              <div class="flex-1 h-1 bg-[#D9D9D9] rounded-full">
                <div class="flex-1 h-1 w-[50%] bg-primary rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Right stacked sections */}
          <div className="flex flex-col gap-[23px] w-[290px]">
            <div className="h-[192px] bg-green-500 rounded-[23px]">
              <img
                src={buycartwo}
                alt="buy car one image"
                className="w-full h-[192px] bg-green-500 rounded-[23px]"
              />
            </div>
            <div className="h-[192px] bg-green-500 rounded-[23px]">
              <img
                src={buycartwo}
                alt="buy car one image"
                className="w-full h-[192px] bg-green-500 rounded-[23px]"
              />
            </div>
            <div className="relative h-[192px] bg-green-500 rounded-[23px] overflow-hidden">
              <img
                src={buycartwo}
                alt="buy car one image"
                className="w-full h-[192px] bg-green-500 rounded-[23px]"
              />
              <div className="flex items-center justify-center absolute inset-0 bg-[#574C4C]/70 text-[20px] text-white font-bold">
                +12
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-[20px]">
          <div className="col-span-2">
            <div>
              <div>$165,000</div>
              <div className="flex justify-between">
                <div class="text-sm text-[#15142B] flex items-center gap-1">
                  <span>
                    <IoLocationOutline />
                  </span>{" "}
                  Johannesburg
                </div>
                <div class="flex items-center text-yellow-400 text-sm ">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <span class="text-black ml-1">(12)</span>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-[50px]">
                <div className="text-[24px] text-[#0D0A19] font-bold mb-[20px]">
                  Description
                </div>
                <div className="text-[20px] text-[#0D0A19]">
                  The coupe and convertible come in 230i and M240i form. The
                  230i is powered by a 248-horsepower, turbocharged 2.0-liter
                  four-cylinder engine, while the M240i gets a 335-hp,
                  turbocharged 3.0-liter inline-six. Both versions are offered
                  with rear- or all-wheel drive and an eight-speed automatic or
                  six-speed manual transmission.{" "}
                </div>

                <div className="text-[20px] text-[#0D0A19] mt-[20px]">
                  The Gran Coupe is powered by a turbocharged 2.0-liter
                  four-cylinder that makes 228 hp in the 228i and 301 hp in the
                  M235i. The Gran Coupe has standard all-wheel drive and an
                  eight-speed automatic transmission.
                </div>
              </div>

              <div className="grid grid-cols-2 mb-[50px]">
                <div className="">
                  <div className="grid grid-cols-2 py-2">
                    <div className="flex gap-2">
                      <img src={modelicon} alt="model icon" />
                      Model
                    </div>
                    <div>Jaguar</div>
                  </div>
                  <div className="grid grid-cols-2 py-2">
                    <div className="flex gap-2">
                      <img src={statusicon} alt="status icon" />
                      Status
                    </div>
                    <div className="text-left">User</div>
                  </div>
                  <div className="grid grid-cols-2 py-2">
                    <div className="flex gap-2">
                      <img src={drivetypeicon} alt="drive type icon" />
                      Drive Type
                    </div>
                    <div>Reverse Gear</div>
                  </div>
                  <div className="grid grid-cols-2 py-2">
                    <div className="flex gap-2">
                      <img src={enginesizeicon} alt="engine size" />
                      Engine Size
                    </div>
                    <div>4.0</div>
                  </div>
                </div>
                <div>
                  <div className="grid grid-cols-2 py-2">
                    <div className="flex gap-2">
                      <img src={dooricon} alt="door icon" />
                      Door
                    </div>
                    <div>4 Door</div>
                  </div>
                  <div className="grid grid-cols-2 py-2">
                    <div className="flex gap-2">
                      <img src={cylindericon} alt="cylinder icon" />
                      Cylinder
                    </div>
                    <div>4</div>
                  </div>
                  <div className="grid grid-cols-2 py-2">
                    <div className="flex gap-2">
                      <img src={coloricon} alt="color icon" />
                      Color
                    </div>
                    <div>Black</div>
                  </div>
                  <div className="grid grid-cols-2 py-2">
                    <div className="flex gap-2">
                      <img src={vinicon} alt="vin icon" />
                      VIN
                    </div>
                    <div>FCB123792</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 mt-[20px]">
                <div className="text-[20px]">
                  <div className=" font-semibold">
                    Standard features include:
                  </div>
                  <div className="py-1">17-inch wheels</div>
                  <div className="py-1">LED headlights</div>
                  <div className="py-1">Rain-sensing windshield wipers</div>
                  <div className="py-1">Push-button start</div>
                  <div className="py-1">Forward collision warning</div>
                  <div className="py-1">Lane departure warning</div>
                  <div className="py-1">Front and rear parking sensors</div>
                </div>
                <div className="text-[20px]">
                  <div className=" font-semibold">
                    Available features include:
                  </div>
                  <div className="py-1">Keyless access</div>
                  <div className="py-1">Power moonroof</div>
                  <div className="py-1">Heated front seats</div>
                  <div className="py-1">Heated steering wheel</div>
                  <div className="py-1">Wireless device charging</div>
                  <div className="py-1">Harman Kardon stereo</div>
                </div>
              </div>
            </div>
          </div>
          <div className="border w-full py-[24px] rounded-[14px] shadow-xl shadow-[#999BA826]">
            <div className="px-[24px] mb-[28px]">
              <div className="text-[#9A9EA7]">Seller</div>
              <div className="flex items-center gap-[12px]">
                <div className="w-[38px] h-[38px] flex items-center justify-center border border-[#E4E6E8] rounded-[8px] p-[8px]">
                  <img src={bmwlogo} alt="Bmw Icon" />
                </div>
                <div>
                  <div className="flex gap-1 mb-[2px] text-[#0D0A19] text-[14px]">
                    BMW Dealer Liana
                    <img
                      src={dealerverifiedicon}
                      alt="dealer verification icon"
                    />
                  </div>
                  <div className="text-[#9A9EA7] text-[12px]">
                    Roobchester, TN 30071-8345
                  </div>
                </div>
              </div>

              <div className="text-[#545454] text-[14px] leading-[21px]">
                My new car is sexy. Melbourne Red color, interior is nice. I
                enjoy changing the ambiance light to the color of my choice.
              </div>
            </div>

            <div className="mb-[28px]">
              <img src={map} alt="" className="w-full" />
            </div>

            <div className="mb-[28px] px-[24px]">
              <div className="mb-[12px] text-[#595959]">Warranty</div>
              <div className="mb-[12px]">
                <div className="text-[#0D0A19] mb-[4px] text-[14px] font-semibold">
                  Maximum Age/Mileage
                </div>
                <div className="text-[14px]">
                  Certified Pre-Owned Elite with less than 15,000 miles;
                  Certified Pre-Owned with less than 60,000 miles
                </div>
              </div>

              <div className="mb-[12px]">
                <div className="mb-[4px] text-[#0D0A19] text-[14px] font-semibold">
                  Basic Warranty Terms
                </div>
                <div className="text-[14px]">
                  1 year/unlimited miles from expiration of 4-year/50,000-mile
                  new car warranty
                </div>
              </div>

              <div className="text-[12px] text-[#FFB611] font-semibold">
                View All Warranty Program Details
              </div>
            </div>

            <div className="flex justify-between px-[24px]">
              <button className="px-[18px] py-[12px] bg-[#FFB611] text-[#000000] font-semibold rounded-[8px]">
                Contact Dealer
              </button>
              <button className="px-[18px] py-[12px] bg-[#F5F6F7] text-[#919ea7] font-semibold rounded-[8px]">
                Book a Ride
              </button>
            </div>
          </div>
        </div>

        <hr />

        <div className="grid grid-cols-3 gap-4 mt-[20px] mb-[77px]">
          <div className="col-span-2">
            <div className="flex justify-between items-center mb-[30px]">
              <div className="text-[24px] font-bold text-[#0D0A19]">
                Latest reviews
              </div>
              <div className="underline">Write a Review</div>
            </div>

            {reviews.map((review) => (
              <div key={review.id} className="mb-[22px]">
                <div className="flex mb-[17px] justify-between ">
                  <div className="text-[20px] font-semibold">
                    {review.title}
                  </div>

                  <div className="flex gap-3 items-center">
                    <div className="flex gap-2 items-center">
                      <img src={reviewstar} alt="rating star" />
                      <div>{review.rating}</div>
                    </div>
                    <img src={reviewactionicon} alt="action icon" />
                  </div>
                </div>

                <div className="mb-[17px] text-[18px] text-[#383838]">
                  {review.description}
                </div>

                <div className="flex items-center gap-[17px] mb-[22px]">
                  <img
                    src={review.userImg}
                    alt={review.user}
                    className="w-[45px] h-[45px] rounded-[22px]"
                  />
                  <div>
                    <div className="font-medium">{review.user}</div>
                    <div className="text-sm text-gray-500">{review.date}</div>
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>

          <div className="pb-[30px] rounded-[17px] shadow-xl shadow-[#999BA826] ">
            <div className="py-[22px] px-[30px] bg-[#F5F6F7] mb-[30px] rounded-tl-[17px] rounded-tr-[17px]">
              <div className="flex gap-1 mb-[5px]">
                <img
                  src={reviewstar}
                  alt="review star"
                  className="w-[35px] h-[35px]"
                />
                <div className="text-[28px] font-bold text-[#0D0A19]">4.96</div>
              </div>
              <div className="text-[20px] text-[#717171]">Average Score</div>
            </div>

            {ratingStats.map((item) => (
              <div key={item.id} className="mb-[30px] px-[30px] py-[30px]">
                <div className="flex mb-[5px] justify-between">
                  <div className="text-[18px] font-semibold">{item.label}</div>
                  <div className="text-[18px] font-semibold">
                    {item.percent}%
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>{item.description}</div>
                  <ProgressLine value={item.percent} color={item.color} />
                </div>
              </div>
            ))}
            <div className="px-[30px] mt-[95px]">
              <button className="py-[15px] px-[22px] w-full bg-[#F5F6F7] rounded-[10px]">
                All Reviews
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="text-[44px] text-center font-bold mb-[40px]">
            Similar Listing
          </div>

          <div className="grid grid-cols-3 ">
            <FeaturedListingCard />
            <FeaturedListingCard />
            <FeaturedListingCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetail;

const ProgressLine = ({ value, color }) => {
  return (
    <div className="w-[70px] h-[5px] bg-[#F2F2F2] rounded-full flex justify-end overflow-hidden">
      <div
        className="h-full rounded-full"
        style={{
          width: `${value}%`,
          backgroundColor: color,
        }}
      />
    </div>
  );
};
