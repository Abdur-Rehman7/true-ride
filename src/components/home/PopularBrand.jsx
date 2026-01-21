import logo1 from "./assets/brand-logo-1.svg";
import logo2 from "./assets/brand-logo-2.svg";
import logo3 from "./assets/brand-logo-3.svg";
import logo4 from "./assets/brand-logo-4.svg";
import logo5 from "./assets/brand-logo-5.svg";
import logo6 from "./assets/brand-logo-6.svg";
import logo7 from "./assets/brand-logo-7.svg";
import logo8 from "./assets/brand-logo-8.svg";
import logo9 from "./assets/brand-logo-9.svg";
import logo10 from "./assets/brand-logo-10.svg";
import logo11 from "./assets/brand-logo-11.svg";
const PopularBrand = () => {
  return (
    <>
      <div>
        <div className="text-[44px] text-black text-center font-semibold mb-[40px]">
          Popular Brands
        </div>
        <div className="flex justify-between my-6">
          <img src={logo1} alt="opel car" />
          <img src={logo2} alt="Audi car" />
          <img src={logo3} alt="Benz mersedz car" />
          <img src={logo4} alt="toyota car" />
          <img src={logo5} alt="Mazda car" />
          <img src={logo6} alt="Nissan car" />
          <img src={logo7} alt="Hundai car" />
          <img src={logo8} alt="lexes car" />
          <img src={logo9} alt="Honda car" />
          <img src={logo10} alt="renault car" />
          <img src={logo11} alt="infiniti car" />
        </div>
      </div>
    </>
  );
};

export default PopularBrand;
