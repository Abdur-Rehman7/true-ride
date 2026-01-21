import Hero from "../components/home/hero";
import SearchFilter from "../components/home/SearchFilter";
import FeaturedListing from "../components/home/FeaturedListing";
import PopularModelSection from "../components/home/PopularModelSection";
import ServicesDetail from "../components/home/ServicesDetail";
import SignupSection from "../components/home/SignupSection";
import FindCar from "../components/home/FindCar";
import Testimonial from "../components/home/Testimonial";
import PopularBrand from "../components/home/PopularBrand";
import LatestListing from "../components/home/LatestListing";
import SubscribeSection from "../components/home/SubscribeSection";
import BlogSection from "../components/home/BlogSection";
export default function Home() {
  return (
    <div>
      <Hero />
      <div className="w-[95%] mx-auto">
        <SearchFilter />
        <FeaturedListing />
      </div>
      <PopularModelSection />
      <ServicesDetail />
      {/* <SignupSection />
      <FindCar />
      <Testimonial />
      <PopularBrand /> */}
      {/* <div className="w-[95%] mx-auto">
        <LatestListing />
      </div>
      <SubscribeSection />
      <div className="w-[95%] mx-auto">
        <BlogSection />
      </div> */}
    </div>
  );
}
