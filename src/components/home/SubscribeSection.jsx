import EmailInput from "./EmailInput";
import img from "./assets/newsletter-img.svg"
const SubscribeSection = () => {
  return (
    <>
      <div className="grid grid-cols-2 bg-[#1E1D18] py-8">
        <div className="mx-20">
          <div className="text-[60px] font-semibold text-white mb-8">
            Subscribe to Our Newsletter for New Updates
          </div>
          <EmailInput />
        </div>
        <div className="relative ">
            <img src={img} alt="News Letter" className="absolute top-12" />
        </div>
      </div>
    </>
  );
};

export default SubscribeSection;
